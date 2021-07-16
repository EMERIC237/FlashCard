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
import { Form, Button, Breadcrumb } from "react-bootstrap";
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
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/decks/${deckId}`}> deck name</Breadcrumb.Item>
        <Breadcrumb.Item active>Create Deck</Breadcrumb.Item>
      </Breadcrumb>
      <h1>{deck.name}: Add Card</h1>
      <Form>
        <Form.Group className="mb-3" controlId="front">
          <Form.Label htmlFor="front">Front</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            id="front"
            name="front"
            placeholder="Question"
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
            placeholder="Answer"
            onChange={handleChange}
            value={formData.back}
          />
        </Form.Group>

        <Button
          variant="secondary"
          onClick={() => {
            push(`/decks/${deckId}`);
          }}
        >
          Done
        </Button>
        <Button type="submit" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </div>
  );
}
