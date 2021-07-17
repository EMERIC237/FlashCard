import React, { useState } from "react";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

export default function CreateDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(undefined);

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    async function postDeck(deck, signal) {
      try {
        const response = await createDeck(deck, signal);
        console.log(response);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", error);
        } else {
          setError(error);
        }
      }
    }
    const abortController = new AbortController();
    const NewDeck = {
      name: formData.name,
      description: formData.description,
    };
    if (NewDeck.name !== "" && NewDeck.description !== "") {
      postDeck(NewDeck, abortController.signal);
      setFormData({ ...initialFormState });
      // push(`/decks/${deckId}`)
      console.log("handle submit applied");
    } else {
      window.confirm("Please put some entry");
    }
  };
  return (
    <div>
      <DeckForm
        action={"Create"}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
