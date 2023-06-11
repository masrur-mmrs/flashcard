// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AddCard.css'
import Add from "../../../assets/add.png"

const AddCard = () => {
  return (
    <button className="addCardButton">
        <img src={Add} alt="Add Card"/>
    </button>
  )
}

export default AddCard
