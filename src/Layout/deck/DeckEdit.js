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
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/decks/${deckId}`}>{deck.name}</Breadcrumb.Item>
        <Breadcrumb.Item active>Edit Deck</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Edit Deck</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Deck name"
            onChange={handleChange}
            value={formData.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            name="description"
            placeholder="Brief description of the deck"
            onChange={handleChange}
            value={formData.description}
          />
        </Form.Group>
        <Button variant="secondary" href={"/"}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default DeckEdit;
