import React from "react";
import { useHistory } from "react-router-dom";
export default function DeckForm({
  action,
  handleChange,
  formData,
  handleSubmit,
  deck,
}) {
  const { push } = useHistory();
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`decks/${deck && deck.id}`} role="button">
              {deck && deck.name}
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {action} Deck
          </li>
        </ol>
      </nav>
      <h1>{action} Deck</h1>
      <form className="">
        <div className="mb-3 form-group">
          <label className="form-label">Name</label>
          <input
            name="name"
            placeholder="Deck name"
            id="name"
            className="form-control"
            onChange={handleChange}
            value={formData.name}
          ></input>
        </div>
        <div className="mb-3 form-group">
          <label className="form-label">Description</label>
          <textarea
            rows="3"
            name="description"
            placeholder="Brief description of the deck"
            id="description"
            className="form-control"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </div>
        <button onClick={() => push("/")} className="btn btn-secondary">
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
