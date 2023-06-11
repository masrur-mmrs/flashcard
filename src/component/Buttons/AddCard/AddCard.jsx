// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AddCard.css'
import Add from "../../../assets/add.png"

// eslint-disable-next-line react/prop-types
const AddCard = ({clicked}) => {

  const handleClick = () => {
    clicked();
  };

  return (
    <button className="addCardButton" onClick={handleClick}>
        <img src={Add} alt="Add Card"/>
    </button>
  )
}

export default AddCard
