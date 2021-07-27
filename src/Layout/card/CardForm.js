import React from "react";
import { useHistory } from "react-router";

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
      <div>
        <a href="/">Home</a>
        <a href={`/decks/${deckId}`}>{deck && deck.name}</a>
        <a>{action} Card</a>
      </div>
      <h1>{action} Card</h1>
      <form>
        <label htmlFor="front">Front</label>
        <textarea
          rows={2}
          id="front"
          name="front"
          placeholder="Front side Card"
          onChange={handleChange}
          value={formData.front}
        />
        <label htmlFor="front">Back</label>
        <textarea
          rows={2}
          id="back"
          name="back"
          placeholder="Back side Card"
          onChange={handleChange}
          value={formData.back}
        />
        <button
          onClick={() => {
            useHistory.push(`decks/${deckId}`);
          }}
        >
          Cancel
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
