import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  NavLink,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";

function DeckEdit() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
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
  }, []);

  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const { push } = useHistory();
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    async function DeckUpdate(updatedDeck, signal) {
      try {
        const response = await updateDeck(updatedDeck, signal);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", error);
        } else {
          setError(error);
        }
      }
    }
    const abortController = new AbortController();
    deck.name = formData.name;
    deck.description = formData.description;
    if (deck.name !== "" && deck.description !== "") {
      DeckUpdate(deck, abortController.signal);
      setFormData({ ...initialFormState });
      // push(`/decks/${deckId}`)
      console.log("handle submit applied");
    } else {
      window.confirm("Please put some entry");
    }
  };
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">create Deck</NavLink>
      </header>
      <h1>Edit Deck</h1>
      <form>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <button
          onClick={() => {
            push(`/desk/${deckId}`);
          }}
        >
          Cancel
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default DeckEdit;
