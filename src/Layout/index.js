import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./home/DeckList";
import DeckStudy from "./deck/DeckStudy";
import CreateDeck from "./deck/CreateDeck";
import CardAdd from "./card/CardAdd";
import DeckProfile from "./deck/DeckProfile";
import DeckEdit from "./deck/DeckEdit";
import CardEdit from "./card/CardEdit";
import { useHistory } from "react-router";

function Layout() {
  const [decks, setDecks] = useState([]);
  const { push } = useHistory();
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <button
              onClick={() => push("/decks/new")}
              className="btn btn-secondary mb-2"
            >
              Create Deck
            </button>
            <DeckList decks={decks} setDecks={setDecks} />
          </div>
        </Route>
        <Route path="/decks/new">
          <CreateDeck decks={decks} setDecks={setDecks}/>
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <CardAdd />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <CardEdit />
        </Route>
        <Route path="/decks/:deckId/edit">
          <DeckEdit />
        </Route>
        <Route path="/decks/:deckId/study">
          <DeckStudy />
        </Route>
        <Route path="/decks/:deckId">
          <DeckProfile decks={decks} setDecks={setDecks}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      {/* TODO: Implement the screen starting here */}
    </Fragment>
  );
}

export default Layout;
