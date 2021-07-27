import React from "react";
import { deleteDeck } from "../../utils/api";

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
      <div>
        <div>
          <div>
            {deck.name}
            <span> {deck.cards.length} cards</span>
          </div>
          <div>{deck.description}</div>
          <button variant="secondary" href={`/decks/${deck.id}`}>
            View
          </button>
          <button variant="primary" href={`/decks/${deck.id}/study`}>
            Study
          </button>
          <button variant="danger" onClick={deleteClickHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
