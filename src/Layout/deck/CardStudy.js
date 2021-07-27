import React, { useState, useEffect } from "react";

function CardStudy({ card, index, lengthOfCards, handleNumber }) {
  const [flip, setFlip] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    text === card.front ? setText(card.back) : setText(card.front);
  }, [flip, card]);

  return (
    <div>
      <div>
        <div>
          <div>
            Card {index + 1} of {lengthOfCards}
          </div>
          <div>{text}</div>
          <button onClick={() => setFlip(!flip)}>flip</button>
          {flip ? <button onClick={handleNumber}>Next</button> : null}
        </div>
      </div>
    </div>
  );
}

export default CardStudy;
