import React, { useState } from "react";
import { Route, Switch, NavLink, Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";

export default function CreateDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(undefined);
  const { push } = useHistory();
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    async function postDeck(deck, signal) {
      try {
        const response = await createDeck(deck, signal);
        console.log(response);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", error);
        } else {
          setError(error);
        }
      }
    }
    const abortController = new AbortController();
    const NewDeck = {
        "name": formData.name,
        "description": formData.description,
      };
      if (NewDeck.name !=="" && NewDeck.description !==""){
      postDeck(NewDeck, abortController.signal);
      setFormData({ ...initialFormState });
      // push(`/decks/${deckId}`)
      console.log("handle submit applied");
      }else{
        window.confirm("Please put some entry");
      }
      
  };
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">create Deck</NavLink>
      </header>
      <h1>Create Deck</h1>
      <form>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </label>
        <button onClick={()=>{push("/")}}>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
