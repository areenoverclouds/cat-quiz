import React from "react"
import catType from "./catType.jsx"
import {TwitterShareButton} from "react-share";
import QuestionMarkTooltip from './QuestionMarkTooltip';

export default function Result(props){
    
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    const handleImageLoad = () => {
        setIsLoaded(true);
      };
    
    const prefix = ((catType[props.type].name === "Orange" || 
                     catType[props.type].name === "Orange & White" ||
                     catType[props.type].name === "Orange & Black") ? "an" : "a")
    
    return(
        <div className="result">

            {!isLoaded && 
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            }

            {isLoaded && 
                <div className="result-cat">
                    You are <b>{Math.round(props.percentage)}%</b> {prefix} <b>{catType[props.type].name}</b> cat 
                </div>
            
            }

            <div>
                <img src={catType[props.type].image} width="200px" 
                className="result-image" onLoad={handleImageLoad} />
            </div>

            {isLoaded && 
                <div className="result-description"> {catType[props.type].description}
                    <label> 
                        <QuestionMarkTooltip text="This conclusion is derived from careful research on cat behaviour conducted by Areen." />
                    </label>
                </div>
            }

            {isLoaded && 
                <div className="share-button">
                    <a href = {"https://twitter.com/intent/tweet?text=My%20cat%20aura%20type%20is%20"
                               +encodeURIComponent(catType[props.type].name)
                               +"%20cat!%20Check%20yours%20at%20&url=https%3A%2F%2Fwhich-cat-am-i.netlify.app"}>
                        Share it on Twitter!
                    </a>
                </div>
            }

        </div>
    )
}