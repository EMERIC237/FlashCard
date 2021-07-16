import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  NavLink,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import { Breadcrumb,Form,Button } from "react-bootstrap";
import { readDeck, readCard, updateCard } from "../../utils/api";

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
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/decks/${deckId}`}>deck name</Breadcrumb.Item>
        <Breadcrumb.Item active>Edit Deck</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Edit Card</h1>
      <Form>
        <Form.Group className="mb-3" controlId="front">
          <Form.Label htmlFor="front">Front</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            id="front"
            name="front"
            onChange={handleChange}
            value={formData.front}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="back">
          <Form.Label htmlFor="front">Back</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            id="back"
            name="back"
            onChange={handleChange}
            value={formData.back}
          />
        </Form.Group>
        <Button
          onClick={() => {
            push(`decks/${deckId}`);
          }}
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default CardEdit;
