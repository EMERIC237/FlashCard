import React, { Fragment } from "react";
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
import Button from "react-bootstrap/Button";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <Button variant="secondary" href="/decks/new">
              Create Deck
            </Button>{" "}
            <DeckList />
          </div>
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
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
          <DeckProfile />
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
