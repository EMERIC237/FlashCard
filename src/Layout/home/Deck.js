import React from "react";
import { deleteClickHandler } from "./Helper";
import { useHistory } from "react-router-dom";

export default function Deck({ deck, setError, decks, setDecks }) {
  const { push } = useHistory();

  const buttonStyle = {
    margin: "0px 5px",
  };

  const divStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title h5" style={divStyle}>
          <span>{deck.name}</span>
          <span> {deck.cards.length} cards</span>
        </div>
        <p className="card-text">{deck.description}</p>
        <div style={divStyle}>
          <div>
            <button
              onClick={() => push(`/decks/${deck.id}`)}
              className="btn btn-secondary"
              style={buttonStyle}
            >
              View
            </button>
            <button
              onClick={() => push(`/decks/${deck.id}/study`)}
              className="btn btn-primary"
              style={buttonStyle}
            >
              Study
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger"
              style={buttonStyle}
              onClick={() => {
                deleteClickHandler(setError, deck, decks, setDecks, push);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
