/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './Card.css'
import { useSwipeable } from 'react-swipeable';


// eslint-disable-next-line react/prop-types
const Card = ({frontContent, backContent, swipeAnimation, onSwipe, flip, cardFlipped}) => {
    const [isFlipped, setIsFlipped] = useState(cardFlipped);
    const [swiped, setSwiped] = useState("");
  
    const handleCardClick = () => {
      flip();
    };


    const animationEndHandler = () => {
      setSwiped("");
    }

    const handlers = useSwipeable({
      onSwiped: (e) => {
        if (isFlipped) {
          setIsFlipped(false);
          flip();
          setTimeout(() => {
            onSwipe(e.dir);
          }, 600);
        }
        else {
          onSwipe(e.dir);
        }
      }
    })


    useEffect(() => {
      setIsFlipped(cardFlipped)
      switch (swipeAnimation) {
        case 0:
          setSwiped("");
          break;
        case 1:
          setSwiped("swiped-up");
          break;
        case 2:
          setSwiped("swiped-down");
          break;
        default:
          break;
      }
    }, [swipeAnimation, cardFlipped]);

  
    return (
        <div
        {...handlers}
          className={`card ${isFlipped ? 'flipped' : ''} ${swiped}`}
          onClick={handleCardClick}
          onAnimationEnd={animationEndHandler}
        >
          <div className="card-inner">
            <div className="card-front">
              {frontContent}
            </div>
            <div className="card-back">
              {backContent}
            </div>
          </div>
        </div>

    );
  };
  
  
  export default Card;
  