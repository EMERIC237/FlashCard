import React from "react";
import { useHistory } from "react-router";
export default function DeckForm({
  action,
  handleChange,
  formData,
  handleSubmit,
  deck,
}) {
  return (
    <div>
      <div>
        <a href="/">Home</a>
        <a> {deck && deck.name}</a>
        <a>{action} Deck</a>
      </div>
      <h1>{action} Deck</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          as="input"
          name="name"
          placeholder="Deck name"
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={3}
          name="description"
          placeholder="Brief description of the deck"
          onChange={handleChange}
          value={formData.description}
        />
        <button
          onClick={() => {
            useHistory.push("/");
          }}
        >
          Cancel
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
