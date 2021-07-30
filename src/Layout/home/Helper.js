import { deleteDeck } from "../../utils/api";

export function deleteClickHandler(setError, deck, decks, setDecks, push) {
  if (
    window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)
  ) {
    async function toDeleteDeck(deckId, signal) {
      try {
        await deleteDeck(deckId, signal);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", error);
        } else {
          setError(error);
        }
      }
    }
    if (deck.id) {
      const deckId = deck.id;
      const abortController = new AbortController();
      const newDecks = decks.filter((deck) => deck.id !== deckId);
      toDeleteDeck(deckId, abortController.signal);
      setDecks(newDecks);
      push("/");
      window.location.reload();
      return () => {
        abortController.abort();
      };
    }
  }
}
