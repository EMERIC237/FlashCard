import React from "react";
import { deleteDeck } from "../../utils/api/index";
import { useHistory } from "react-router-dom";

export default function Deck({ deck, setError, decks, setDecks }) {
  const history = useHistory();
  const deleteClickHandler = () => {
    if (
      window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)
    ) {
      async function toDeleteDeck(deckId, signal) {
        try {
          await deleteDeck(deckId, signal);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted", error);
          } else {
            setError(error);
          }
        }
      }
      if (deck.id) {
        const deckId = deck.id;
        const abortController = new AbortController();
        const newDecks = decks.filter((deck) => deck.id !== deckId);
        toDeleteDeck(deckId, abortController.signal);
        setDecks(newDecks);
        history.push("/");
        return () => {
          abortController.abort();
        };
      }
    }
  };

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
              onClick={() => history.push(`/decks/${deck.id}`)}
              className="btn btn-secondary"
              style={buttonStyle}
            >
              View
            </button>
            <button
              onClick={() => history.push(`/decks/${deck.id}/study`)}
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
              onClick={deleteClickHandler}
              style={buttonStyle}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
