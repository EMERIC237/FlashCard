import React from "react";
import { Breadcrumb, Form, Button } from "react-bootstrap";

export default function CardForm({
  action,
  deckId,
  handleChange,
  formData,
  handleSubmit,
  deck,
}) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/decks/${deckId}`}>
          {deck && deck.name}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{action} Card</Breadcrumb.Item>
      </Breadcrumb>
      <h1>{action} Card</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="front">Front</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            id="front"
            name="front"
            placeholder="Front side Card"
            onChange={handleChange}
            value={formData.front}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="front">Back</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            id="back"
            name="back"
            placeholder="Back side Card"
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
