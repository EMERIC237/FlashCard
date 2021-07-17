import React from "react";
import { Breadcrumb, Form, Button } from "react-bootstrap";

export default function CardForm({
  deckId,
  handleChange,
  formData,
  handleSubmit,
}) {
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
        <Button href={`decks/${deckId}`}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}
