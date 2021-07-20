import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import { Card, Breadcrumb, Button } from "react-bootstrap";
import CardUnit from "../card/CardUnit";

function DeckProfile() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    async function getDeck(deckId, signal) {
      try {
        const deckFromAPI = await readDeck(deckId, signal);
        setDeck(deckFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", error);
        } else {
          setError(error);
        }
      }
    }
    if (deckId) {
      const abortController = new AbortController();
      getDeck(deckId, abortController.signal);
      return () => {
        abortController.abort();
      };
    }
  }, [deckId]);

  if (error) {
    console.log(error);
    return <div>NO DECK: FETCH ERROR</div>;
  }

  if (!deck) {
    return <div>NO DECK FOUND</div>;
  }

  const deleteClickHandler = () => {
    if (
      window.confirm(
        `Delete this deck?\n\n\You will not be able to recover it.`
      )
    ) {
      deleteDeck(deck.id);
      push("/");
    }
  };

  const listForCards = deck.cards.map((card) => (
    <CardUnit key={card.id} card={card} deckId={deckId} />
  ));

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{deck.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <Card.Title>{deck.name}</Card.Title>
        <Card.Text>{deck.description}</Card.Text>
        <Button
          variant="secondary"
          onClick={() => push(`/decks/${deckId}/edit`)}
        >
          Edit
        </Button>
        <Button
          variant="primary"
          onClick={() => push(`/decks/${deck.id}/study`)}
        >
          Study
        </Button>
        <Button
          variant="primary"
          onClick={() => push(`/decks/${deckId}/cards/new`)}
        >
          Add Cards
        </Button>
        <Button variant="danger" onClick={deleteClickHandler}>
          Delete
        </Button>
      </div>
      <h2>Cards</h2>
      {listForCards}
    </div>
  );
}

export default DeckProfile;
