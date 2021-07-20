import React from "react";
import { deleteDeck } from "../../utils/api";
import { Card, Button } from "react-bootstrap";
export default function Deck({ deck }) {
  const deleteClickHandler = () => {
    if (
      window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)
    ) {
      deleteDeck(deck.id);
      window.location.reload();
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            {deck.name}
            <span> {deck.cards.length} cards</span>
          </Card.Title>
          <Card.Text>{deck.description}</Card.Text>
          <Button variant="secondary" href={`/decks/${deck.id}`}>
            View
          </Button>
          <Button variant="primary" href={`/decks/${deck.id}/study`}>
            Study
          </Button>
          <Button variant="danger" onClick={deleteClickHandler}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
