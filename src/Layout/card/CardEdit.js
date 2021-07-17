import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function CardEdit() {
  const { deckId, cardId } = useParams();
  const { push } = useHistory();
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const initialFormState = {
    front: "",
    back: "",
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
          const cardFromAPI = await readCard(cardId, signal);
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
    async function CardUpdate(updatedCard, signal) {
      try {
        const response = await updateCard(updatedCard, signal);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", error);
        } else {
          setError(error);
        }
      }
    }
    const abortController = new AbortController();
    card.front = formData.front;
    card.back = formData.back;
    if (card.front !== "" && card.back !== "") {
      CardUpdate(card, abortController.signal);
      setFormData({ ...initialFormState });
      // push(`/decks/${deckId}`)
      console.log("handle submit applied");
      push(`decks/${deckId}`);
    } else {
      window.confirm("Please put some entry");
    }
  };
  console.log(deck);

  return (
    <div>
      <CardForm
        deckId={deckId}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CardEdit;
