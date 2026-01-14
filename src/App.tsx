import { useState, useEffect, useCallback, useMemo } from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Shuffle questions once on initial load
    const shuffledQuestions = useMemo(() => shuffleArray(questions), []);

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
                onNext={goToNext}
                onPrevious={goToPrevious}
                hasNext={currentIndex < totalQuestions - 1}
                hasPrevious={currentIndex > 0}
            />

            <Footer />
        </div>
    );
}

export default App;
