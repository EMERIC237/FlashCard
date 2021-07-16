import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({ card, deckId }) {
  const { push } = useHistory();
  const deleteClickHandler = () => {
    if (
      window.confirm(
        `Delete this deck?\n\n\You will not be able to recover it.`
      )
    ) {
      deleteCard(card.id);
    }
  };

  return (
    <article>
      <div>
        <p>{card.front}</p>
        <p>{card.back}</p>
      </div>
      <button
        onClick={() => {
          push(`/decks/${deckId}/cards/${card.id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={deleteClickHandler}>Delete</button>
    </article>
  );
}
