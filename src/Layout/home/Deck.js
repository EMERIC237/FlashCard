import React from "react";
import { Link , useHistory} from "react-router-dom";
import { deleteDeck } from "../../utils/api";
export default function Deck({ deck }) {
  const {push} = useHistory();
    const deleteClickHandler = () => {
        if(window.confirm(`Delete this deck?\n\n\You will not be able to recover it.` )){
            deleteDeck(deck.id)
        };
    };
    

  return (
    <article>
      <div>
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
      </div>
      <button>View</button>
      <button onClick={()=>push(`/decks/${deck.id}/study`)}>Study</button>
      <button onClick={deleteClickHandler}>Delete</button>
    </article>
  );
}
