import React, { useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar';
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

const searchApi = "/teams";

export default function Inspo() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
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
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.id}
             recipe={recipe}
          />
        )) : "No Results"}
      </div>
    </div>
    </>
  );
}