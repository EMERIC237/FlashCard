import React, { Fragment } from "react";
import { Route, Switch, NavLink, Link ,useHistory} from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./home/DeckList";
import DeckStudy from "./deck/DeckStudy";
import CreateDeck from "./CreateDeck";
import CardAdd from "./card/CardAdd"

function Layout() {
  const {push} = useHistory();
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Header />
          <div className="container">
            <button onClick={()=>push("/decks/new")}>Create Deck</button>
            <DeckList />
          </div>
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route path="/decks/:deckId/study">
          <DeckStudy />
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <CardAdd />
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
