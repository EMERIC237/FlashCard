import { NavLink, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import CardStudy from "./CardStudy";

function DeckStudy() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState(null);
  const [number, setNumber] = useState(0);
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
    return <div>NO DECKS HERE</div>;
  }

  if (!deck) {
    return <div>NO DECK FOUND</div>;
  }

  const handleNumber = () => {
    if (number + 1 < listCards.length) {
      setNumber(number + 1);
    } else {
      window.confirm(
        `Restart Cards?\n\n\Click 'cancel' to return to the home page.`
      )
        ? setNumber(0)
        : push("/");
    }
  };

  const listCards = deck.cards.map((card, index, array) => (
    <CardStudy
      card={card}
      index={index}
      lengthOfCards={array.length}
      handleNumber={handleNumber}
    />
  ));

  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">{deck.name}</NavLink>
        <NavLink to="/">Study</NavLink>
      </header>
      <h2>Study: {deck.name}</h2>
      <div>
        {listCards.length > 2 ? (
          listCards[number]
        ) : (
          <div>
            <h>Not Enough cards</h>
            <p>
              You need at least 3 cards to study. There are {listCards.length}{" "}
              cards in this deck
            </p>
            <button onClick={() => push(`/decks/${deckId}/cards/new`)}>Add Cards</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeckStudy;