import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index";

export default function CardUnit({
  card,
  deckId,
  setCards,
  cards,
}) {
  const history = useHistory();
  const deleteClickHandler = () => {
    if (
      window.confirm(
        `Delete this card?\n\n You will not be able to recover it.`
      )
    ) {
      const cardId = card.id
      deleteCard(card.id)
        .then(setCards(cards.filter((card) => card.id !== cardId)))
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-text d-flex justify-content-between">
          <p className="text-start">{card.front}</p>
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
