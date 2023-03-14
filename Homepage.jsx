import React from "react"

export default function Homepage(props){
    return (
        <span className="homepage">
            <div className="homepage--main"> 
                Which cat am I? 
            </div>
            <div className="homepage--bottom"> 
                Answer these simple personality questions to know your hidden cat aura 
            </div>
            <button className="homepage--start" onClick={props.startQuiz}> 
                Start Quiz 
            </button>
        </span>
    )
}