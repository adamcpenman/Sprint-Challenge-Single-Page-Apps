import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CharacterList from "./components/CharacterList";
import EpisodeList from './components/EpisodeList';
import LocationList from "./components/LocationsList";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
     
        <Route path="/characters" component={CharacterList}/>
        <Route path="/episodes" component={EpisodeList}/>
         <Route path="/locations" component={LocationList}/>
     

    </main>
  );
}
