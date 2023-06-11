// eslint-disable-next-line no-unused-vars
import React from 'react'
import StudySet from "../../../assets/studySet.png"
import './Browse.css'

const Browse = () => {
  return (
    <button className='studySet'>
        <img src={StudySet} alt="Browse Study Set"/>
    </button>
  )
}

export default Browse
