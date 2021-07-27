import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import CardUnit from "../card/CardUnit";

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
      <div>
        <a href="/">Home</a>
        <a>{deck.name}</a>
      </div>
      <div>
        <h3>{deck.name}</h3>
        <h3>{deck.description}</h3>
        <button onClick={() => push(`/decks/${deckId}/edit`)}>Edit</button>
        <button onClick={() => push(`/decks/${deck.id}/study`)}>Study</button>
        <button onClick={() => push(`/decks/${deckId}/cards/new`)}>
          Add Cards
        </button>
        <button onClick={deleteClickHandler}>Delete</button>
      </div>
      <h2>Cards</h2>
      {listForCards}
    </div>
  );
}

export default DeckProfile;
