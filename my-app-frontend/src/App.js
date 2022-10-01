import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('null');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch('http://localhost:3001/Recipes');
    const data = await response.json();
    setRecipes(data);
  };

  const upDateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <Router>
      <div className="App">
        <form onSubmit={getSearch} className="RecipeForm">
          <input
            className="Search-bar"
            value={search}
            type="text"
            onChange={upDateSearch}
          />
          <button className="Search" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map((recipes) => (
            <Recipes
              key={recipes.id}
              title={recipes.title}
              meal={recipes.meal}
              directions={recipes.directions}
              image={recipes.image}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
