import React from "react";
import { Link } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({ card }) {
  const deleteClickHandler = () => {
    if (
      window.confirm(
        `Delete this deck?\n\n\You will not be able to recover it.`
      )
    ) {
      deleteCard(card.id);
    }
  };

  return (
    <article>
      <div>
        <p>{card.front}</p>
        <p>{card.back}</p>
      </div>
      <button>Edit</button>
      <button onClick={deleteClickHandler}>Delete</button>
    </article>
  );
}
