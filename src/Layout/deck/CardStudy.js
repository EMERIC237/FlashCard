import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function CardStudy({ card, index, lengthOfCards, handleNumber }) {
  const [flip, setFlip] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    text === card.front ? setText(card.back) : setText(card.front);
  }, [flip]);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            Card {index + 1} of {lengthOfCards}
          </Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="secondary" onClick={() => setFlip(!flip)}>
            flip
          </Button>
          {flip ? (
            <Button variant="primary" onClick={handleNumber}>
              Next
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardStudy;
