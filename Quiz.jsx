import React from "react"
import data from "./data.jsx"
import Question from "./Question.jsx"
import Result from "./Result.jsx"

export default function Quiz(props){
    
    const [ques, setQues] = React.useState(data)
    const [clicks, setClicks] = React.useState(0)
    const [score, setScore] = React.useState([0, 0, 0, 0])
    const [yourCat, setYourCat] = React.useState({cat: -1, percentage: 0})
    
    React.useEffect(() => {
    }, [])
    
    function keyPress(value){
        score[value] += 1
        setClicks(clicks + 1)
    }
    
    let count = -1
    const showQuestions = ques.map(item => {
        count += 1;
        return(
            <>
            {count === clicks && <Question 
                                      key={item.id} 
                                      id={item.id}
                                      question={item.question}
                                      options={item.options}
                                      toggleOrange={() => keyPress(0)} 
                                      toggleWhite={() => keyPress(1)} 
                                      toggleGrey={() => keyPress(2)} 
                                      toggleBlack={() => keyPress(3)} 
                                />
            }
            </>
        )        
    })
    
    function calculateScore(){
        setClicks(clicks + 1)
        var max1 = -1, max2 = -1, max3 = -1
        var pos1 = -1, pos2 = -1, pos3 = -1
        
        for(let i = 0; i < 4; i++){
            if(score[i] > max1){
                max1 = score[i]
                pos1 = i
            }
        }
        
        for(let i = 0; i < 4; i++){
            if(score[i] > max2 && i != pos1){
                max2 = score[i]
                pos2 = i
            }
        }
        
        for(let i = 0; i < 4; i++){
            if(score[i] > max3 && i != pos1 && i != pos2){
                max3 = score[i]
                pos3 = i
            }
        }
        
        if(max1 === max2 && max2 === max3){
            yourCat.cat = 4
            yourCat.percentage = 100
        } 
        else if(max1 === max2){
            if((pos1 === 0 && pos2 === 1) || (pos1 === 1 && pos2 === 0)){
                yourCat.cat = 5
                yourCat.percentage = 90
            } 
            else if((pos1 === 3 && pos2 === 1) || (pos1 === 1 && pos2 === 3)){
                yourCat.cat = 6
                yourCat.percentage = 90
            }
            else{
                yourCat.cat = 7
                yourCat.percentage = 90
            }
        } 
        else{
            let perc = (max1) / (max1 + max2 + max3)
            yourCat.cat = pos1
            yourCat.percentage = perc * 100
        } 
        
        if(yourCat.percentage === 50){
            var doit = Math.floor(Math.random() * 2)
            if(doit == 1){
                yourCat.percentage += (10 + Math.floor(Math.random() * 15))
            }
        }
        else if(yourCat.percentage === 67){
            yourCat.percentage += Math.floor(Math.random() * 5)
        }
    }
           
    return(
        <> 
            {showQuestions}
            {clicks === 6 && 
                <div className="result">
                <div className="result-text"> You're all set to go! </div>
                <div className="result-button">
                    <button className="calculate-result" onClick={calculateScore}> 
                        Calculate my result 
                    </button>
                 </div>
                 </div>
            }
            {clicks === 7 && <Result type={yourCat.cat}
                                     percentage={yourCat.percentage}
                             />
            }
        </>
    )
}