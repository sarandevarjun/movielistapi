//import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import searchIcon from "./search.svg";
import './CSS/App.css';
const App = () => {
	// e79ac15c
	// http://www.omdbapi.com/?i=tt3896198&apikey=e79ac15c
  const [counter, setCounter] = useState(5);
	//useEffect (()=> {

	//},);
  return (
    <div className="app">
      <button style={{ 'display': 'none' }} onClick={() => setCounter((counterval) => counterval - 1)}>
        Decrease the counter value-
      </button>
      <h1 style={{ 'display': 'none' }}>App content here!{counter}</h1>
      <button style={{ 'display': 'none' }} onClick={() => setCounter((counterval) => counterval + 1)}>
        Increase the counter value+
      </button>
      <h1>MovieLand</h1>
	  <div className="search">
	  	<input placeholder="Search Movies here...!" />
	  	<img src={searchIcon} alt="Search Button" />
	  </div>
    </div>
  );
};

export default App;
