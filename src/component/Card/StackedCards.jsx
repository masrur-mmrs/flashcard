/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable";
import "./StackedCards.css"

const StackedCards = ({nextCardAnimation, nextQuestion, thirdQuestion, onAnimated, onSwipe, cardFlipped, flip,}) => {

    const [animateUp, setAnimateUp] = useState(false);
    const [animateDown, setAnimateDown] = useState(false);


    const handlers = useSwipeable({
        onSwiped: (e) => {
            if (cardFlipped) {
                flip();
                setTimeout(() => {
                    onSwipe(e.dir);
                }, 600);
            } else {
                onSwipe(e.dir);
            }
        }
    })

    const animationEndHadler = () => {
        onAnimated();
    }

    useEffect(() => {
        switch (nextCardAnimation) {
            case 0:
                setAnimateUp(false)
                setAnimateDown(false);
                break;
            case 1:
                setAnimateUp(true);
                setAnimateDown(false); 
                break;
            case 2:
                setAnimateUp(false);
                setAnimateDown(true);
                break;    
            default:
                break;
        }
        
    }, [nextCardAnimation]);
    
  return (
   <div className="dummy-cards-container" {...handlers}>
    <div className="dummy-cards"></div>
    <div className={`dummy-cards ${animateUp?"card-shuffle-1":""} ${animateDown?"card-shuffle-1-rev":""}`}></div>
    <div className={`dummy-cards ${animateUp?"card-shuffle-2":""} ${animateDown?"card-shuffle-2-rev":""}`}></div>
    <div className={`dummy-cards ${animateUp?"card-shuffle-3":""} ${animateDown?"card-shuffle-3-rev":""}`}>{thirdQuestion}</div>
    <div className={`dummy-cards ${animateUp?"card-lift":""}  ${animateDown?"card-lift-rev":""}`} onAnimationEnd={animationEndHadler}>{nextQuestion}</div>
   </div>
  )
}

export default StackedCards
