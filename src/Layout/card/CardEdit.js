import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function CardEdit() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState({ front: "", back: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  function submitHandler(updatedCard) {
    updateCard(updatedCard).then(history.push(`/decks/${deckId}`));
  }
  function cancel() {
    history.goBack();
  }

  const child = card.id ? (
    <CardForm onCancel={cancel} onSubmit={submitHandler} initialState={card} />
  ) : (
    <p>Loading...</p>
  );

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
            Edit Card {card.id}
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      {child}
    </>
  );
}

export default CardEdit;
