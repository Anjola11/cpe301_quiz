import React, { useState, useEffect } from 'react';
import { Question } from '../data/questions';

interface QuestionCardProps {
    question: Question;
    onNext: () => void;
    onPrevious: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    onNext,
    onPrevious,
    hasNext,
    hasPrevious,
}) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [key, setKey] = useState(question.id);

    // Reset state when question changes
    useEffect(() => {
        setSelectedOption(null);
        setShowAnswer(false);
        setIsAnswered(false);
        setKey(question.id);
    }, [question.id]);

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (index !== question.correctAnswer) {
            // Wrong answer - show check answer button after a brief moment
        }
    };

    const handleCheckAnswer = () => {
        setShowAnswer(true);
    };

    const getOptionClass = (index: number) => {
        if (!isAnswered) return '';
        if (index === question.correctAnswer) return 'correct';
        if (index === selectedOption && index !== question.correctAnswer) return 'incorrect';
        return '';
    };

    const isCorrect = selectedOption === question.correctAnswer;

    return (
        <div className="question-card glass-card" key={key}>
            <span className="question-section">{question.section}</span>
            <p className="question-number">Question {question.id}</p>
            <h2 className="question-text">{question.question}</h2>

            <div className="options-list">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-btn ${selectedOption === index ? 'selected' : ''} ${getOptionClass(index)}`}
                        onClick={() => handleOptionClick(index)}
                        disabled={isAnswered}
                    >
                        <span className="option-label">
                            <span className="option-letter">
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="option-text">{option}</span>
                        </span>
                        {isAnswered && index === question.correctAnswer && (
                            <span className="feedback-icon correct">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </span>
                        )}
                        {isAnswered && index === selectedOption && index !== question.correctAnswer && (
                            <span className="feedback-icon incorrect">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {isAnswered && !isCorrect && !showAnswer && (
                <div className="check-answer-container">
                    <button
                        className="btn btn-primary check-answer-btn"
                        onClick={handleCheckAnswer}
                    >
                        Check Answer
                    </button>
                </div>
            )}

            {(showAnswer || (isAnswered && isCorrect)) && question.explanation && (
                <div className="answer-reveal">
                    <p className="answer-reveal-title">
                        {isCorrect ? '✨ Correct!' : '📖 Explanation'}
                    </p>
                    <p className="answer-reveal-text">{question.explanation}</p>
                </div>
            )}

            <div className="navigation" style={{ marginTop: 'var(--spacing-8)' }}>
                <button
                    className="nav-btn"
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Previous
                </button>
                <button
                    className="nav-btn"
                    onClick={onNext}
                    disabled={!hasNext}
                >
                    Next
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default QuestionCard;
