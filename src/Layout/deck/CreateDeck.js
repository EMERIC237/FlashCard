import React, { useState } from "react";
import { Route, Switch, NavLink, Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import { Form, Button, Breadcrumb } from "react-bootstrap";

export default function CreateDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(undefined);
  const { push } = useHistory();
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
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Create Deck</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Create Deck</h1>
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
