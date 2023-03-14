import React from "react"
import "./questions.css"

export default function Question(props){
    return(
        <>
        {/*<div className="question-heading"> Question {props.id} </div> */}
        <div className="question">
            
            <div className="question--ques"> 
                {props.question}
            </div>
            
            <div className="options">
                <div><button className="question-option" onClick={props.toggleOrange}>
                    {props.options[0]} 
                </button></div>
                
                <div><button className="question-option" onClick={props.toggleWhite}>
                    {props.options[1]} 
                </button></div>
                <div><button className="question-option" onClick={props.toggleGrey}> 
                    {props.options[2]}
                </button></div>
                <div><button className="question-option" onClick={props.toggleBlack}>
                    {props.options[3]}
                </button></div>
            </div>
            
        </div>
        </>
    )
}