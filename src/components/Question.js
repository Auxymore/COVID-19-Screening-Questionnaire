import React, { useContext } from 'react'
import { QuizContext } from '../context/context'

const Question = () => {
    const {questions, error} = useContext(QuizContext)
    return (
        <div>
            <h2>{questions}</h2>
            <p className="error">{error}</p>
        </div>
    )
}

export default Question
