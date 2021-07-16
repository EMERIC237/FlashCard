import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'


function CardStudy({ card , index, lengthOfCards, handleNumber}) {
    const [flip, setFlip] = useState(false);
    const [text, setText] = useState("");
    const [display, setDisplay] = useState("inline");

    useEffect(()=>{
        text === card.front ? setText(card.back) : setText(card.front);
        display === "inline" ? setDisplay("None") : setDisplay("inline");
    },[flip]);
    
    return (
        <div>
            <h3>Card{index+1} of {lengthOfCards}</h3>
            <p>{text}</p>
            <button onClick={() => setFlip(!flip)}>flip</button>
            <button style={{display:display}} onClick={handleNumber}>Next</button>
        </div>
    )
}

export default CardStudy
