import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CharacterItemProps {
  item: {
    id: number;
    name: string;
    birthday: string;
    occupation: string[];
    img: string;
    appearance: number[];
    status: string;
  };
}

function CharacterItem({ item }: CharacterItemProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title={item.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.birthday}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.occupation}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CharacterItem;
