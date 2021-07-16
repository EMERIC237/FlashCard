import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link, useParams } from "react-router-dom";
import { readDeck, readCard } from "../../utils/api";

function CardEdit({front, back}) {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const initialFormState = {
    front: front,
    back: back,
  };
  const [formData, setFormData] = useState({ ...initialFormState });

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
        async function getCard(cardId, signal) {
            try {
              const cardFromAPI = await readDeck(cardId, signal);
              setCard(cardFromAPI);
            } catch (error) {
              if (error.name === "AbortError") {
                console.log("Aborted", error);
              } else {
                setError(error);
              }
            }
          }
      getCard(cardId, abortController.signal);

      return () => {
        abortController.abort();
      };
    }
  }, [cardId]);

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };

  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">create Deck</NavLink>
      </header>
      <h1>Add Card</h1>
      <form>
        <label htmlFor="front">
          Front
          <textarea
            id="front"
            type="text"
            name="front"
            onChange={handleChange}
            value={formData.front}
          />
        </label>
        <label htmlFor="back">
          Back
          <textarea
            id="back"
            type="text"
            name="back"
            onChange={handleChange}
            value={formData.back}
          />
        </label>
        <button>Cancel</button>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CardEdit;
