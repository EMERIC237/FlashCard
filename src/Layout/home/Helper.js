import { deleteDeck } from "../../utils/api";

export function deleteClickHandler(setError, deck, decks, setDecks, push) {
  if (
    window.confirm(`Delete this deck?\n\nYou will not be able to recover it.`)
  ) {
    const deckId = deck.id
    deleteDeck(deck.id)
      .then(setDecks(decks.filter((deck)=> deck.id !== deckId)))
      .then(push("/"))
  }
}
