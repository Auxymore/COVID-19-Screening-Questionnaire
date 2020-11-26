import React, { createContext, useEffect, useReducer } from 'react';
import { data } from '../data';
import AppReducer from '../reducer/AppReducer';
import axios from 'axios';
import Submission from '../components/Submission';

export const QuizContext = createContext();

const initialState = {
    quizData:[],
    questions:[],
    answers:[],
    currentQuestion: 0,
    currentAnswer: null,
    results: [],
    finalAnswer:[],
    error:""
}

const QuizContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)
    const {quizData, questions, answers, currentQuestion, currentAnswer, results, finalAnswer,error} = state

    const loadQuizData =  () => {
        if(currentQuestion <= (data.length - 1)){
        dispatch({
            type: "SET_QUIZ_DATA",
            payload: data
        })
        const dataQuestion = data[currentQuestion] 
        dispatch({
            type:"SET_QUESTIONS",
            payload: dataQuestion.question
        })
        dispatch({
            type: "SET_ANSWERS",
            payload: dataQuestion.answers.option
        })
        }else {
        console.log("Questionnaire it's done")  
        }  
    }
    
    useEffect(() => {
        loadQuizData()
    }, [currentQuestion])

    const selectAnswer = event =>{  
        const selection = (event.target.value) * 1 
        dispatch({
            type:"SET_CURRENT_ANSWER",
            payload: selection
        })
        dispatch({
            type: "SET_ERROR",
            payload: ""
        })
    }

    const nextQuestion = () => {           
            if(currentAnswer !== null && currentQuestion <= (data.length - 1)){
                dispatch({
                    type:"SET_CURRENT_QUESTION",
                    payload: currentQuestion + 1
                })
                dispatch({
                    type: "SET_FINAL_ANSWER",
                    payload: [...finalAnswer,currentAnswer]
                })               
                dispatch({
                    type: "SET_RESULTS",
                    payload: [ ...results,
                        {
                        question: data[currentQuestion].id,
                        answer:data[currentQuestion].answers.option[currentAnswer].id
                    }]
                })
            }else{
                dispatch({
                    type: "SET_ERROR",
                    payload: "Please select an answer"
                })
            }
            dispatch({
                type: "SET_CURRENT_ANSWER",
                payload: null
            }) 
    }

    const prevQuestion = () =>{
            dispatch({
                type: "SET_CURRENT_QUESTION",
                payload: currentQuestion - 1
            })
            const id = finalAnswer[finalAnswer.length - 1]  
            console.log(id)
            finalAnswer.pop()    
    }

    const submitQuiz = event =>{
        event.preventDefault()
        console.log(currentQuestion, quizData.length)
        const resultData = results
        axios.post("https://jsonplaceholder.typicode.com/posts", {resultData})
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
        console.log(resultData)
        console.log("resultData has been submitted")
         dispatch({
            type: "RESET_QUIZ"
        })          
    }

    if(currentQuestion === quizData.length){ 
        console.log("redirect section")
    return (<Submission />)     
     }else{
        return (
            <QuizContext.Provider value={{
                questions, 
                answers, 
                nextQuestion, 
                prevQuestion, 
                currentQuestion, 
                quizData,
                selectAnswer,
                error,
                submitQuiz,
                results
                }}>
                {children}
            </QuizContext.Provider>
        )
     }
}

export default QuizContextProvider