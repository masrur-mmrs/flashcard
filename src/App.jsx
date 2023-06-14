/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css'

import Card from './component/Card/Card'
import AddCard from './component/Buttons/AddCard/AddCard'
import Browse from './component/Buttons/Browse/Browse'
import Search from './component/Buttons/Search/Search'
import StackedCards from './component/Card/StackedCards'

import { getFlashCards } from './firebase'



const App = () => {
  const [flashCards, setFlashCards] = useState(null);

  const [swiped, setSwiped] = useState(0);


  const [flashCardFlipped, setFlashCardFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentStudeSetIndex, setCurrentStudeSetIndex] = useState(0);

  const [AddCardClicked, setAddCardClicked] = useState(false);

  const animationEndHandler = () => {
    setSwiped(0);
  }

  const swipeHandler = (direction) => {
    switch (direction) {
      case "Up":
        setSwiped(1);
        setTimeout(() => {
          setCurrentCardIndex(currentCardIndex + 1);
        }, 565);
        break;
      case "Down":
        if (currentCardIndex > 0) {
          setSwiped(2);
          setCurrentCardIndex(currentCardIndex - 1);
        }
        break;
      default:
        break;
    }
  }

  const flipHandler = () => {
    setFlashCardFlipped(!flashCardFlipped);
  }

  const handleAddCardClicked = () => {
    setAddCardClicked(!AddCardClicked);
  };
  

  useEffect(() => {
    getFlashCards().then((data) => {
      setFlashCards(data);
    }).catch((err) => {
      console.log(err);
    })
    
  },[flashCards]);

  if (!flashCards) {
    return <></>
  }

  return (
    <div className='container' >
      <div className="center">
        <Card
          frontContent={flashCards[Object.keys(flashCards)[currentStudeSetIndex]][currentCardIndex].question}
          backContent={flashCards[Object.keys(flashCards)[currentStudeSetIndex]][currentCardIndex].answer}
          swipeAnimation={swiped}
          flip={flipHandler}
          isAddCardClicked={AddCardClicked}
          cardFlipped={flashCardFlipped}
          onSwipe={swipeHandler} />
      </div>
     <StackedCards
        nextCardAnimation={swiped}
        nextQuestion={flashCards[Object.keys(flashCards)[currentStudeSetIndex]][currentCardIndex + 1].question}
        thirdQuestion={flashCards[Object.keys(flashCards)[currentStudeSetIndex]][currentCardIndex + 2].question}
        onAnimated={animationEndHandler}
        cardFlipped={flashCardFlipped}
        flip={flipHandler}
        isAddCardClicked={AddCardClicked}
        onSwipe={swipeHandler} />
      <div className="button-row">
        <AddCard clicked={handleAddCardClicked} />
        <Browse />
        <Search />
      </div>
    </div>
  )
}

export default App

// console.log(flashCards.React[0].question);
// console.log(flashCards.React[0].answer);
// console.log(Object.keys(flashCards)[currentStudeSetIndex]);
// console.log(flashCards[Object.keys(flashCards)[currentCardIndex]][currentCardIndex]);
