import React, { useState, useEffect } from "react";

function CardStudy({ card, index, lengthOfCards, handleNumber }) {
  const [flip, setFlip] = useState(false);
  const [text, setText] = useState(card.front);
  useEffect(()=>{
    setText(card.front)
    setFlip(false)
  },[card])


  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title h5">
          Card {index + 1} of {lengthOfCards}
        </div>
        <p className="card-text">{text}</p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            flip ? setText(card.front) : setText(card.back);
            setFlip(!flip)}
          }
        >
          flip
        </button>
        {flip ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNumber}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default CardStudy;
