import { deleteDeck } from "../../utils/api";

export function deleteClickHandler(setError, deck, decks, setDecks, push) {
  if (
    window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)
  ) {
    deleteDeck(deck.id)
      .then(setDecks([...decks]))
      .then(push("/"))
      .then(window.location.reload());
  }
}
