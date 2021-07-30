import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import { deleteClickHandler } from "../home/Helper";
import CardUnit from "../card/CardUnit";

function DeckProfile({ decks, setDecks }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    async function getDeck(deckId, signal) {
      try {
        const deckFromAPI = await readDeck(deckId, signal);
        setDeck(deckFromAPI);
        setCards(deckFromAPI.cards);
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

  const listForCards = cards.map((card) => (
    <CardUnit
      key={card.id}
      card={card}
      deckId={deckId}
      setCards={setCards}
      cards={cards}
      deck={deck}
      setDeck={setDecks}
    />
  ));

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="mb-5">
        <div className="card-title h5">{deck.name}</div>
        <p className="card-text">{deck.description}</p>
        <div className="d-flex justify-content-between">
          <div>
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={() => push(`/decks/${deckId}/edit`)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={() => push(`/decks/${deck.id}/study`)}
            >
              Study
            </button>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={() => push(`/decks/${deckId}/cards/new`)}
            >
              Add Cards
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger mr-5"
              onClick={() => {
                deleteClickHandler(setError, deck, decks, setDecks, push);
              }}
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
