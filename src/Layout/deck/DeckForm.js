import React from "react";
import { Form, Button } from "react-bootstrap";
export default function DeckForm({ handleChange, formData, handleSubmit }) {
  return (
    <div>
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
