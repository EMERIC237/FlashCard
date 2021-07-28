import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import CardUnit from "../card/CardUnit";
import "../css/DeckProfile.css"

function DeckProfile() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    async function getDeck(deckId, signal) {
      try {
        const deckFromAPI = await readDeck(deckId, signal);
        setDeck(deckFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", error);
        } else {
          setError(error);
        }
      }
    }
    if (deckId) {
      const abortController = new AbortController();
      getDeck(deckId, abortController.signal);
      return () => {
        abortController.abort();
      };
    }
  }, [deckId]);

  if (error) {
    console.log(error);
    return <div>NO DECK: FETCH ERROR</div>;
  }

  if (!deck) {
    return <div>NO DECK FOUND</div>;
  }

  const deleteClickHandler = () => {
    if (
      window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)
    ) {
      deleteDeck(deck.id);
      push("/");
    }
  };

  const listForCards = deck.cards.map((card) => (
    <CardUnit key={card.id} card={card} deckId={deckId} />
  ));

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ul>
      </nav>
      <div>
        <div className="card-title h5">{deck.name}</div>
        <div className="card-text">{deck.description}</div>
        <div className="divButton">
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => push(`/decks/${deckId}/edit`)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => push(`/decks/${deck.id}/study`)}
            >
              Study
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => push(`/decks/${deckId}/cards/new`)}
            >
              Add Cards
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
      <h2>Cards</h2>
      {listForCards}
    </div>
  );
}

export default DeckProfile;
