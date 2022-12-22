import { Grid } from "@mui/material";
import CharacterItem from "./CharacterCard";
import Loading from "../../components/Loading";
import { CharactersProps } from "../../Types";

interface CharacterItemProps {
  items: CharactersProps[] | [];
  isLoading: boolean;
}

function CharacterList({ items, isLoading }: CharacterItemProps): JSX.Element {
  return isLoading ? (
    <Loading />
  ) : (
    <Grid>
      <Grid item xs={12} md={6} sm={3}>
        {items.map(item => (
          <CharacterItem
            key={item.id}
            item={{
              id: 0,
              name: "",
              birthday: "",
              occupation: [],
              img: "",
              appearance: [],
              status: "",
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default CharacterList;
