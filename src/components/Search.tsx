import React, { useCallback } from "react";
import { TextField, Box } from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "45px",
        }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={onChange}
          size="small"
        />
      </Box>
    </section>
  );
}

export default Search;
