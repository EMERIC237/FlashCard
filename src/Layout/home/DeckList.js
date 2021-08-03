import React, { useState, useEffect } from "react";
import { listDecks } from "../../utils/api";
import Deck from "./Deck";

function DeckList({ decks, setDecks }) {
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks).catch(setError);

    return () => abortController.abort();
  }, [decks,setDecks]);

  if (error) {
    return <div>NO DECKS HERE</div>;
  }

  const listForDesks = decks.map((deck) => (
    <Deck
      key={deck.id}
      deck={deck}
      decks={decks}
      setDecks={setDecks}
      setError={setError}
    />
  ));

  return (
    <main>
      <section>{listForDesks}</section>
    </main>
  );
}

export default DeckList;
