import React, { useState, useEffect } from "react";

function CardStudy({ card, index, lengthOfCards, handleNumber }) {
  const [flip, setFlip] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    text === card.front ? setText(card.back) : setText(card.front);
  }, [flip, card]);

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
          onClick={() => setFlip(!flip)}
        >
          flip
        </button>
        {flip ? (
          <button type="button" className="btn btn-primary" onClick={handleNumber}>
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default CardStudy;
