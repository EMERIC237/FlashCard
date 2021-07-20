import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function DeckEdit() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDeck(deckId, signal) {
      try {
        const deckFromAPI = await readDeck(deckId, signal);
        setDeck(deckFromAPI);
        setFormData(deckFromAPI);
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
    } else {
      window.confirm("Please put some entry");
    }
  };

  if (error) {
    console.log(error);
    return <div>NO DECK: FETCH ERROR</div>;
  }

  return (
    <div>
      <DeckForm
        action={"Edit"}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        deck={deck}
      />
    </div>
  );
}

export default DeckEdit;
