import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index";

export default function CardUnit({
  card,
  deckId,
  setCards,
  setError,
  cards,
  deck,
  setDeck,
}) {
  const history = useHistory();
  const deleteClickHandler = () => {
    if (
      window.confirm(
        `Delete this card?\n\n You will not be able to recover it.`
      )
    ) {
      async function toDeleteCard(cardId, signal) {
        try {
          await deleteCard(cardId, signal);
          setCards(cards.filter((card) => card.id !== cardId));
          setDeck({...deck})
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted", error);
          } else {
            setError(error);
          }
        }
      }
      if (card.id) {
        const cardId = card.id;
        const abortController = new AbortController();
        toDeleteCard(cardId, abortController.signal);
        window.location.reload();
        return () => {
          abortController.abort();
        };
      }
    }
  };


  return (
    <div className="card">
      <div className="card-body">
        <div className="card-text d-flex justify-content-between">
          <p className ="text-start">{card.front}</p>
          <p className="text-end">{card.back}</p>
        </div>
        <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-secondary mr-2 "
          onClick={() => {
            history.push(`/decks/${deckId}/cards/${card.id}/edit`);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger mr-2"
          onClick={deleteClickHandler}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
}
