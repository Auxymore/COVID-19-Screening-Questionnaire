import React, { useContext } from 'react'
import { QuizContext } from '../context/context'
import AnswersOptions from './Answers_options'

const Answer = () => {
    const {answers, nextQuestion, prevQuestion, currentQuestion, quizData, selectAnswer, submitQuiz} = useContext(QuizContext)
    
    return (
        <form className="answer-option" onSubmit={submitQuiz}>
            <div>
                {answers.map(answer =>{
                    return (
                        <AnswersOptions 
                        answer={answer.answer}
                        key={answer.id}
                        option={answer.id}
                        selection={selectAnswer}
                    />
                    )           
                })}
                {currentQuestion === 0 ? "" : <button onClick={()=> prevQuestion()} type="button" className="btn">Back</button>}
                
                <button onClick={()=> nextQuestion()} type={currentQuestion === quizData.length ? "submit" : "button"} className="btn">{currentQuestion === quizData.length - 1 ? "Submit" : "Next"}</button>           
            </div>
        </form>
    )
}

export default Answer
