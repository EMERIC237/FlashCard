import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link, useParams } from "react-router-dom";
import { readDeck ,deleteDeck} from "../utils/api";
import Card from "./card/Card";

function DeckEdit({name, description}) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState(null);

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
    }
  };

  const listForCards = deck.cards.map((card) => <Card key={card.id} card={card} />);

  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">{deck.name}</NavLink>
        <NavLink to="/">Edit Deck</NavLink>
      </header>
      <h1>Edit Deck</h1>
      <form>
          <label htmlFor = "name">
              Name
              <input id="name"type="text" name="name" value={name}/>
          </label>
          <label htmlFor = "description">
              Description
              <textarea id="description" name="description" value={description}/>
          </label>
          <button>Cancel</button>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default DeckEdit;
