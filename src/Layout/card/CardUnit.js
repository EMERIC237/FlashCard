import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";
import { Card, Button } from "react-bootstrap";

export default function CardUnit({ card, deckId }) {
  const { push } = useHistory();
  const deleteClickHandler = () => {
    if (
      window.confirm(
        `Delete this deck?\n\n You will not be able to recover it.`
      )
    ) {
      deleteCard(card.id);
      window.location.reload();
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <p>{card.front}</p>
          <p>{card.back}</p>
        </Card.Text>
        <Button
          variant="secondary"
          onClick={() => {
            push(`/decks/${deckId}/cards/${card.id}/edit`);
          }}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={deleteClickHandler}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
