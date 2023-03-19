import { styled, Grid, Card, CardHeader,CardActions } from "@mui/material";


export const StyledGrid = styled(Grid)({
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom: '3rem',
  })

 export const StyledCard = styled(Card)({
    width: "100%",
    maxHeight: "100%",
  });

  export const StyledCardHeader = styled(CardHeader)({
    height: '100px'
  })

  export const StyledCardActions = styled(CardActions)({
    padding: "1rem",
  });
