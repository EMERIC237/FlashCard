import React from "react";
import { useHistory } from "react-router-dom";

export default function CardForm({
  action,
  deckId,
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
            <a href={`/decks/${deckId}`}>{deck && deck.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {action} Card
          </li>
        </ol>
      </nav>
      <h1>{action} Card</h1>
      <form className="">
        <div className="mb-3 form-group">
          <label className="form-label" for="front">
            Front
          </label>
          <textarea
            rows="2"
            name="front"
            placeholder="Front side Card"
            id="front"
            className="form-control"
            onChange={handleChange}
            value={formData.front}
          ></textarea>
        </div>
        <div className="mb-3 form-group">
          <label className="form-label" for="front">
            Back
          </label>
          <textarea
            rows="2"
            name="back"
            placeholder="Back side Card"
            id="back"
            className="form-control"
            onChange={handleChange}
            value={formData.back}
          ></textarea>
        </div>
        <button
          onClick={() => push(`decks/${deckId}`)}
          className="btn btn-primary"
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
