import React, { useState } from 'react';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('');

const upDateSearch = (e) => {
  setSearch(e.target.value);
};
const getSearch = (e) => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
};

export default Search;
