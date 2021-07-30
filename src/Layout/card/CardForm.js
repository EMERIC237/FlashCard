import React, { useState } from 'react';

export default function CardForm({
  onSubmit,
  onCancel,
  initialState = { front: "", back: "" },
}) {
  const [card, setCard] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();//What does this do
    onSubmit(card);
  }

  return (
    <>
      <form onSubmit={submitHandler} className="card-edit">
        <fieldset>
          <div className="form-group">
            <label htmlFor="front">front</label>
            <textarea
              id="front"
              name="front"
              className="form-control"
              value={card.front}
              required={true}
              placeholder="card's Question"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
          <label htmlFor="back">back</label>
            <textarea
              id="back"
              name="back"
              className="form-control"
              value={card.back}
              required={true}
              placeholder="card's Answer"
              onChange={changeHandler}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}
