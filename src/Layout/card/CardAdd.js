import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

export default function CardAdd() {
  const initialFormState = {
    front: "",
    back: "",
  };
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);
  const [formData, setFormData] = useState({ ...initialFormState });
  const { deckId } = useParams();
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
      <CardForm
        action={"Add"}
        deckId={deckId}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSave}
        deck={deck}
      />
    </div>
  );
}
