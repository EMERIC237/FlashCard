import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

export default function CardAdd() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState(null);
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function submitHandler(card) {
    createCard(deckId, card).then(history.push(`/decks/${deckId}`));
  }
  function cancel() {
    history.goBack();
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck && deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h1>Add Card</h1>
      <CardForm onCancel={cancel} onSubmit={submitHandler} />;
    </>
  );
}
