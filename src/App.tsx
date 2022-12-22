import React, { useState, useEffect, useCallback } from "react";
import { Grid, Container } from "@mui/material";

import Header from "./components/Header";
import { ApiProps } from "./Types";
import Search from "./components/Search";

function App(): JSX.Element {
  const [items, setItems] = useState<ApiProps[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");

  const queryFunction = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return (
    <div className="App">
      <Header />
      <Search getQuery={queryFunction} />
    </div>
  );
}

export default App;
