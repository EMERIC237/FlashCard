import React from "react";
import { deleteDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";
import "../css/Deck.css";

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
    <div className="card">
      <div className="card-body">
        <div className="card-title h5 divButton">
          <span>{deck.name}</span>
          <span> {deck.cards.length} cards</span>
        </div>
        <p className="card-text">{deck.description}</p>
        <div className="divButton">
          <div>
            <button
              onClick={() => push(`/decks/${deck.id}`)}
              className="btn btn-secondary"
            >
              View
            </button>
            <button
              onClick={() => push(`/decks/${deck.id}/study`)}
              className="btn btn-primary"
            >
              Study
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteClickHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
