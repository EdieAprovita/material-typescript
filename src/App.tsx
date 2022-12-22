import React, { useState, useEffect, useCallback } from "react";
import { Grid, Container } from "@mui/material";
import axios from "axios";

import Header from "./components/Header";
import Search from "./components/Search";
import CharacterList from "./pages/Characters/CharacterList";

function App(): JSX.Element {
  const [items, setItems] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const queryFunction = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return (
    <div className="App">
      <Header />
      <Search getQuery={queryFunction} />
      <CharacterList items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
