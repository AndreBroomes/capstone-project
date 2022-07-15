import React, { useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar';
import SearchBar from "./SearchBar";
import TeamCard from "./TeamCard";

const searchApi = "/teams";

export default function Inspo() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [teams, setTeams] = useState([]);
  

  const searchTeams = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setTeams(data);
    setIsLoading(false);
  };

  useEffect(() => {
    searchTeams()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchTeams();
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
        
        {teams ? teams.map(team => (
          <TeamCard
             key={team.id}
             team={team}
          />
        )) : "No Results"}
      </div>
    </div>
    </>
  );
}