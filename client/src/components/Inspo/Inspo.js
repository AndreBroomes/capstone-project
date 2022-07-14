import React, { useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar';
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

const searchApi = "/teams";

export default function Inspo() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [tickets, setTickets] = useState([]);
  
  // search for the recipe
  const searchTickets = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setTickets(data);
    setIsLoading(false);
  };

  useEffect(() => {
    searchTickets()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchTickets();
  }

  return (
      <>
      <NavBar />
      <br />
      <br />
      <br />
    <div className="recipe-container">
      <h2 className="inspo-title">MLS Team Search</h2>
      <h4>Find your local Major Leage Soccer Team <br/> use as a conversation piece for your future soccer friends.</h4>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {tickets ? tickets.map(ticket => (
          <RecipeCard
             key={ticket.id}
             ticket={ticket}
          />
        )) : "No Results"}
      </div>
    </div>
    </>
  );
}