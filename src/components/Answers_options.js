import React from 'react'

const AnswersOptions = (props) => {
    return (
        <div>
            <button onClick={props.selection} type="button" className="btn-answer" value={props.option}>{props.answer}</button>
        </div>
    )
}

export default AnswersOptions
