import React, { useState } from 'react';
import { useEffect } from 'react';

const Search = () => {
 
  const [search ,setSearch] = useState([]);

  const [query, setQuery] = useState(''); 

  const getSearchMovies = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/search/movie/${query}`);
      const data = await response.json();

      if (response.ok) {
        setSearch(data.content);
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  useEffect(() => {
    {
      getSearchMovies();
  
    }
  }, [query]); 

  return (
    <div  >
      <input placeholder="Enter search term" className="rounded bg-transparent pl-3 border border-zinc-600  text-white flex items-center" value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
    
    </div>
  );
};

export default Search;
