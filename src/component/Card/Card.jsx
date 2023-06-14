/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import './Card.css'
import { useSwipeable } from 'react-swipeable';


// eslint-disable-next-line react/prop-types
const Card = ({ frontContent, backContent, swipeAnimation, onSwipe, flip, cardFlipped, isAddCardClicked }) => {
  const [isFlipped, setIsFlipped] = useState(cardFlipped);
  const [swiped, setSwiped] = useState("");
  const [visible, setVisible] = useState(isAddCardClicked);

  const [inputQuestion, setInputQuestion] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");

  const questionInputRef = useRef(null);
  const answerInputRef = useRef(null);


  const handleCardClick = () => {
    if (isAddCardClicked) {
      console.log("Do nothing");
    } else {
      flip();
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputQuestion.length > 0 && inputAnswer.length === 0) {
      e.preventDefault();
      questionInputRef.current.blur();
      flip();
      answerInputRef.current.focus();
    } else if (inputQuestion.length === 0 && inputAnswer.length > 0) {
      e.preventDefault();
      answerInputRef.current.blur();
      flip();
      questionInputRef.current.focus();
      
    }
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

  const questionChangeHandler = (e) => {
    setInputQuestion(e.target.value);
  };

  const answerChangeHandler = (e) => {
    setInputAnswer(e.target.value);
  };

 
  useEffect(() => {
    setIsFlipped(cardFlipped)
    setVisible(isAddCardClicked)
    switch (swipeAnimation) {
      case 0:
        setSwiped("")
        break;
      case 1:
        setSwiped("swiped-up")
        break;
      case 2:
        setSwiped("swiped-down")
        break;
      default:
        break;
    }
  }, [swipeAnimation, cardFlipped, isAddCardClicked]);


  return (
    
    <div
      {...handlers}
      className={`card ${isFlipped ? 'flipped' : ''} ${swiped}`}
      onClick={handleCardClick}
      onAnimationEnd={animationEndHandler}
    >
      
      <div className="card-inner">

        <div className="card-front">
          {(visible)?<></>:<p>{frontContent}</p>}
          {(visible)?
          <form onSubmit={handleSubmit}>
            <input
            autoFocus
            ref={questionInputRef}
            autoComplete='off' 
            type='text'
            name='question' 
            value={inputQuestion} 
            onChange={questionChangeHandler}
            placeholder='Question...' 
            ></input>
          </form> : ""}
        </div>

        <div className="card-back">
          {(visible)?<></>:<p>{backContent}</p>}
          {(visible)?
          <form onSubmit={handleSubmit}>
            <input
            ref={answerInputRef}
            autoComplete='off' 
            type='text' 
            name='answer' 
            value={inputAnswer} 
            onChange={answerChangeHandler}
            placeholder='Answer...'  
            ></input>
          </form> : ""}
        </div>
      </div>
      
    </div>
    
  );
};


export default Card;
