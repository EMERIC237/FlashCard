import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  NavLink,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import Card from "../card/Card";

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

  if (!deck) {
    return <div>NO DECK FOUND</div>;
  }

  const deleteClickHandler = () => {
    if (
      window.confirm(
        `Delete this deck?\n\n\You will not be able to recover it.`
      )
    ) {
      deleteDeck(deck.id);
      push("/");
    }
  };

  const listForCards = deck.cards.map((card) => (
    <Card key={card.id} card={card} deckId={deckId}/>
  ));

  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">{deck.name}</NavLink>
        <NavLink to="/">Study</NavLink>
      </header>
      <div>
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
        <button onClick={() => push(`/decks/${deckId}/edit`)}>Edit</button>
        <button onClick={() => push(`/decks/${deck.id}/study`)}>Study</button>
        <button onClick={() => push(`/decks/${deckId}/cards/new`)}>Add Cards</button>
        <button onClick={deleteClickHandler}>Delete</button>
      </div>
      <h2>Cards</h2>
      {listForCards}
    </div>
  );
}

export default DeckProfile;
