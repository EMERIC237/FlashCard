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
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          <span>{card.front}</span>
          <span>{card.back}</span>
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            push(`/decks/${deckId}/cards/${card.id}/edit`);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteClickHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
