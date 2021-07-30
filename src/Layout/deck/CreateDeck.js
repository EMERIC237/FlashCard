import React from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../../utils/api/index";
import DeckForm from "./DeckForm";

export default function CreateDeck() {
  const history = useHistory();
  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
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
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm onCancel={cancel} onSubmit={submitHandler} />;
    </>
  );
}
