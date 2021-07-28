import React, { useState } from "react";
import { Link } from 'react-router-dom'

import { createDeck } from "../../utils/api/index";
import DeckForm from "./DeckForm";

export default function CreateDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(undefined);

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
      name: formData.name,
      description: formData.description,
    };
    if (NewDeck.name !== "" && NewDeck.description !== "") {
      postDeck(NewDeck, abortController.signal);
      setFormData({ ...initialFormState });
    } else {
      window.confirm("Please put some entry");
    }
  };

  if (error) {
    console.log(error);
    return <div>POST ERROR</div>;
  }
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" key="0">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page" key="1">
            Create Deck
          </li>
        </ol>
      </nav>
      <br />
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <DeckForm formData={formData} handleChange={handleChange} />
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>{" "}
        &nbsp;
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
