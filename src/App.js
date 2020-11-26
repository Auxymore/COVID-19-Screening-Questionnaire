import React from 'react'
import QuizContextProvider from './context/context';
import Question from './components/Question';
import Answer from './components/Answer';
import "./App.css";
import Header from './components/Header';

const App = () => {

    return (
        <QuizContextProvider>
            <div className="container">
               <div className="app-wrapper">
                   <Header />
                   <Question />
                   <Answer />
               </div>             
            </div>           
        </QuizContextProvider>
    )
}

export default App;
