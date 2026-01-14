import { useState, useEffect, useCallback, useMemo } from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';

const STORAGE_KEY = 'cpe301_quiz_progress';

// Storage type for persisted data
interface QuizProgress {
    answers: Record<number, number>; // questionId -> selectedOptionIndex
    questionOrder: number[]; // Array of question IDs in shuffled order
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Load progress from localStorage
function loadProgress(): QuizProgress | null {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('Failed to load quiz progress:', e);
    }
    return null;
}

// Save progress to localStorage
function saveProgress(progress: QuizProgress): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error('Failed to save quiz progress:', e);
    }
}

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    // Load saved progress or shuffle questions on initial load
    const shuffledQuestions = useMemo(() => {
        const saved = loadProgress();
        if (saved && saved.questionOrder && saved.questionOrder.length === questions.length) {
            // Restore the saved question order
            const orderMap = new Map(questions.map(q => [q.id, q]));
            const restored = saved.questionOrder
                .map(id => orderMap.get(id))
                .filter((q): q is typeof questions[0] => q !== undefined);
            if (restored.length === questions.length) {
                return restored;
            }
        }
        // Create new shuffle if no valid saved order
        return shuffleArray(questions);
    }, []);

    // Initialize answers from localStorage on mount
    useEffect(() => {
        const saved = loadProgress();
        if (saved && saved.answers) {
            setAnswers(saved.answers);
        }
    }, []);

    // Save progress whenever answers or question order changes
    useEffect(() => {
        const progress: QuizProgress = {
            answers,
            questionOrder: shuffledQuestions.map(q => q.id),
        };
        saveProgress(progress);
    }, [answers, shuffledQuestions]);

    // Handler for when user answers a question
    const handleAnswer = useCallback((questionId: number, selectedOption: number) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption,
        }));
    }, []);

    const currentQuestion = shuffledQuestions[currentIndex];
    const totalQuestions = shuffledQuestions.length;

    const goToNext = useCallback(() => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, totalQuestions]);

    const goToPrevious = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }, [currentIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'n') {
                goToNext();
            } else if (e.key === 'ArrowLeft' || e.key === 'p') {
                goToPrevious();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious]);

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">CPE301 Quiz</h1>
                <p className="app-subtitle">
                    Computer Architecture & Assembly Language
                </p>
            </header>

            <ProgressBar current={currentIndex + 1} total={totalQuestions} />

            <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                onNext={goToNext}
                onPrevious={goToPrevious}
                hasNext={currentIndex < totalQuestions - 1}
                hasPrevious={currentIndex > 0}
                savedAnswer={answers[currentQuestion.id]}
                onAnswer={handleAnswer}
            />

            <Footer />
        </div>
    );
}

export default App;
