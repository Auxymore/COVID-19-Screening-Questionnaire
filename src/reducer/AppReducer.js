const AppReducer = (state, action) => {
    switch(action.type){
        case "SET_QUIZ_DATA":
            return {
                ...state,
                quizData: action.payload
            }
        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.payload
            }
        case "SET_ANSWERS":
            return {
                ...state,
                answers: action.payload
            }
        case "SET_CURRENT_ANSWER":
            return {
                ...state,
                currentAnswer: action.payload
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        case "SET_CURRENT_QUESTION":
            return {
                ...state,
                currentQuestion: action.payload
            }
        case "SET_FINAL_ANSWER":
            return {
                ...state,
                finalAnswer: action.payload
            }
        case "SET_RESULTS":
            return {
                ...state,
                results: action.payload
            }
        case "RESET_QUIZ":
            return {
                ...state,
                finalAnswer: [],
                results: [],
                currentQuestion: 0
            }
        default:
            return state
    }   
}

export default AppReducer
