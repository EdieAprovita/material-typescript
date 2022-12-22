import React, { useCallback } from "react";
import { TextField } from "@mui/material";

interface SearchProps {
  getQuery: (query: string) => void;
}

function Search({ getQuery }: SearchProps) {
  const onChange = useCallback(
    (q: React.ChangeEvent<HTMLInputElement>) => {
      getQuery(q.target.value);
    },
    [getQuery]
  );

  return (
    <section className="search">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={onChange}
        size="small"
      />
    </section>
  );
}

export default Search;
