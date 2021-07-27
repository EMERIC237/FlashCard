import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

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
    <div>
      <div>
        <div>
          <span>{card.front}</span>
          <br />
          <span>{card.back}</span>
        </div>
        <button
          onClick={() => {
            push(`/decks/${deckId}/cards/${card.id}/edit`);
          }}
        >
          Edit
        </button>
        <button variant="danger" onClick={deleteClickHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
