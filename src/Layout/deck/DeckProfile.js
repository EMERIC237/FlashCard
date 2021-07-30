import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, listCards } from "../../utils/api";
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
        const cardFromAPI = await listCards(deckId, signal);
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
        push("/");
        return () => {
          abortController.abort();
        };
      }
    }
  };

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
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div class="mb-5">
        <div class="card-title h5">{deck.name}</div>
        <p class="card-text">{deck.description}</p>
        <div class="d-flex justify-content-between">
          <div>
            <button
              type="button"
              class="btn btn-secondary mr-2"
              onClick={() => push(`/decks/${deckId}/edit`)}
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-primary mr-2"
              onClick={() => push(`/decks/${deck.id}/study`)}
            >
              Study
            </button>
            <button
              type="button"
              class="btn btn-primary mr-2"
              onClick={() => push(`/decks/${deckId}/cards/new`)}
            >
              Add Cards
            </button>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-danger mr-5"
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
