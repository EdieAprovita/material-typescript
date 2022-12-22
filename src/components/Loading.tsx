import { Backdrop, CircularProgress, Container } from "@mui/material";

interface LoadingProps {
  open?: boolean;
}

function Loading({ open = true }: LoadingProps): JSX.Element {
  return (
    <Container>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}

export default Loading;
