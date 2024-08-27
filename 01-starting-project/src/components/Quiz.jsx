import quizCompleteImg from '../assets/quiz-complete.png';
import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import Question from './Question';


export default function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =  userAnswers.length;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
    
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);

       
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Quiz Completed" />
                <h2>Quiz Completed</h2>
            </div>
        );
    }



    return (
        <div id="quiz">
          <Question 
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
          />  
        </div>
    );
}
