/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './MainScreen.css'

import Card from './component/Card/Card'
import AddCard from './component/Buttons/AddCard/AddCard'
import Browse from './component/Buttons/Browse/Browse'
import Search from './component/Buttons/Search/Search'
import StackedCards from './component/Card/StackedCards'
import ButtonRow from './component/ButtonRow'

import { getFlashCards, addFlashCard } from './firebase'



const MainScreen = () => {
  const [flashCards, setFlashCards] = useState(null);

  const [swiped, setSwiped] = useState(0);


  const [flashCardFlipped, setFlashCardFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentStudySetIndex, setCurrentStudySetIndex] = useState(0);

  const [AddCardClicked, setAddCardClicked] = useState(false);

  const AddCardHandler = (ans, ques) => {
    const currentIndex = currentStudySetIndex;
    const currentFlashCards = flashCards[Object.keys(flashCards)[currentIndex]];
    const keyIndex = currentFlashCards.length;
  
    const keyA =  '/' + Object.keys(flashCards)[currentIndex] + '/' + keyIndex + '/' + 'answer';
    const keyQ =  '/' + Object.keys(flashCards)[currentIndex] + '/' + keyIndex + '/' + 'question';
  
    const flashCardData = {};
    flashCardData[keyA] = ans;
    flashCardData[keyQ] = ques;

    // console.log("App.jsx ", flashCardData);
  
    addFlashCard(flashCardData);
    getFlashCards().then((data) => {
      setFlashCards(data);
    }).catch((err) => {
      console.log(err);
    });
    setAddCardClicked(false);
  };
  
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
      // console.log();
      // console.log( '/' + Object.keys(flashCards)[currentStudySetIndex] + '/' + flashCards[Object.keys(flashCards)[currentStudySetIndex]].length + '/' + 'answer');
    }).catch((err) => {
      console.log(err);
    })
    
  },[currentStudySetIndex, flashCards, currentCardIndex]);

  if (!flashCards) {
    return <></>
  }

  return (
    <div className='container' >
      <div className="center">
        <Card
          frontContent={flashCards[Object.keys(flashCards)[currentStudySetIndex]][currentCardIndex].question}
          backContent={flashCards[Object.keys(flashCards)[currentStudySetIndex]][currentCardIndex].answer}
          onCardAdded={AddCardHandler}
          swipeAnimation={swiped}
          flip={flipHandler}
          isAddCardClicked={AddCardClicked}
          cardFlipped={flashCardFlipped}
          onSwipe={swipeHandler} />
      </div>
     <StackedCards
        nextCardAnimation={swiped}
        nextQuestion={flashCards[Object.keys(flashCards)[currentStudySetIndex]][currentCardIndex + 1].question}
        thirdQuestion={flashCards[Object.keys(flashCards)[currentStudySetIndex]][currentCardIndex + 2].question}
        onAnimated={animationEndHandler}
        cardFlipped={flashCardFlipped}
        flip={flipHandler}
        isAddCardClicked={AddCardClicked}
        onSwipe={swipeHandler} />
      <ButtonRow animationFlag={AddCardClicked}>
        <AddCard clicked={handleAddCardClicked} />
        <Browse />
        <Search />
      </ButtonRow>
    </div>
  )
}

export default MainScreen

// console.log(flashCards.React[0].question);
// console.log(flashCards.React[0].answer);
// console.log(Object.keys(flashCards)[currentStudySetIndex]);
// console.log(flashCards[Object.keys(flashCards)[currentCardIndex]][currentCardIndex]);
