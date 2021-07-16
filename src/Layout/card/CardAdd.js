import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  NavLink,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";

export default function CardAdd() {
  const initialFormState = {
    front: "Front side Card",
    back: "Back side Card",
  };
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);
  const [formData, setFormData] = useState({ ...initialFormState });
  const { deckId } = useParams();
  const { push } = useHistory();
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
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
  }, []);

  const handleSave = (event) => {
    async function postCard(deckId, card, signal) {
      try {
        const response = await createCard(deckId, card, signal);
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
      const NewCard = {
        front: formData.front,
        back: formData.back,
        deckId: deckId,
      };
      postCard(deckId, NewCard, abortController.signal);
      return () => {
        abortController.abort();
      };
    }
    setFormData({ ...initialFormState });
  };
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">create Deck</NavLink>
      </header>
      <h1>{deck.name}: Add Card</h1>
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
        <button
          onClick={() => {
            push(`/decks/${deckId}`);
          }}
        >
          Done
        </button>
        <button type="submit" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}
