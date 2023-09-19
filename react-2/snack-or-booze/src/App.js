import React, { useEffect, useState } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SnackOrBoozeApi from "./Api";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Menu from "./mycomponents/Menu";
import MenuItem from "./mycomponents/MenuItem";
import NewItem from "./mycomponents/NewItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getMenu() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getMenu();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home snacks={snacks} drinks={drinks}/>} />
          <Route path="/snacks" element={<Menu items={snacks} title="Snacks" />} />
          <Route path="/snacks/:id" element={<MenuItem items={snacks} cantFind="/snacks" />} />
          <Route path="/drinks" element={<Menu items={drinks} title="Drinks" />} />
          <Route path="/drinks/:id" element={<MenuItem items={drinks} cantFind="/drinks" />} />
          <Route path="/snacks/new" element={<NewItem page="snacks"/>}/>
          <Route path="/drinks/new" element={<NewItem page="drinks"/>}/>
          <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

