import React from "react";
import { Breadcrumb, Form, Button } from "react-bootstrap";
export default function DeckForm({
  action,
  handleChange,
  formData,
  handleSubmit,
  deck,
}) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item> {deck && deck.name}</Breadcrumb.Item>
        <Breadcrumb.Item active>{action} Deck</Breadcrumb.Item>
      </Breadcrumb>
      <h1>{action} Deck</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            as="input"
            name="name"
            placeholder="Deck name"
            onChange={handleChange}
            value={formData.name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            id="description"
            as="textarea"
            rows={3}
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
