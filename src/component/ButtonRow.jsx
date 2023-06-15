/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import "./ButtonRow.css"

const ButtonRow = ({ children, animationFlag }) => {
    const [animate, setAnimate] = useState(animationFlag);

    useEffect(() => {
        if (animationFlag) {
            setTimeout(() => {
                setAnimate(animationFlag)
            }, 550);
        } else {
            setAnimate(animationFlag);
        }
    }, [animationFlag]);

  return animate?(<></>):(
    <div className={`button-row ${animationFlag?"animateOut":"animateIn"}`}>
      {children}
    </div>
  )
}

export default ButtonRow
