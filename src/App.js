import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Router>
        <Route path="/chacters" component={CharacterList}/>
      </Router>

    </main>
  );
}
