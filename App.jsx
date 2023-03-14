import React from "react"
import Homepage from "./Homepage.jsx"
import Quiz from "./Quiz.jsx"
import "./style.css"

export default function App(){
    
    const [start, setStart] = React.useState(false) 
    
    function startQuiz(){
        setStart(!start)
    }
    
    return (
        <>
            {start === false && <Homepage startQuiz={startQuiz}/>}
            {start === true && <Quiz />}
        </>
    )
}