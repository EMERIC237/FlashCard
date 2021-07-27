import React from "react";
import { deleteDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";
export default function Deck({ deck }) {
  const deleteClickHandler = () => {
    if (
      window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)
    ) {
      deleteDeck(deck.id);
      window.location.reload();
    }
  };
  const { push } = useHistory();

  return (
    <div class="card">
      <div class="card-body">
        <div class="card-title h5">
          {deck.name}
          <span> {deck.cards.length} cards</span>
        </div>
        <p class="card-text">{deck.description}</p>
        <button
          onClick={() => push(`/decks/${deck.id}`)}
          class="btn btn-secondary"
        >
          View
        </button>
        <button
          onClick={() => push(`/decks/${deck.id}/study`)}
          class="btn btn-primary"
        >
          Study
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={deleteClickHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
