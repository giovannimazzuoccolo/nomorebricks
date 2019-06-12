import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles(
  createStyles({
    container: {
      padding: "0px",
      minHeight: 'calc( 100vh - 56px )'
    },
    grid: {
      justifyContent: "center"
    },
    image: {
        width: '100%',
        objectFit: 'cover'
    },
    pTRBL: {
        padding: '8px'
    },
    pLR: {
        padding: '0 8px' 
    },
    pTB: {
        padding: '8px 0'
    }
  })
);

export default function RegisterWorkout() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.grid}>
        <img src="/court.png" alt="court" className={classes.image} />

        <Typography variant="h4" className={classes.pTRBL}>Register your workout</Typography>
        <Typography variant="body1" >Track all your progress</Typography>
        <form noValidate>
          <Grid container className={classes.pLR}>
          <Typography variant="body2">2 Points shoots:</Typography>
            <Grid item xs={12} sm={6} className={classes.pTB}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="2 Points"
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.pTB}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Total shoots 2 points"
              />
            </Grid>
            <Typography variant="body2" className={classes.pTB}>3 Points shoots:</Typography>
            <Grid item xs={12} sm={6} className={classes.pTB}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="3 Points"
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.pTB}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Total shoots 3 points"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" className={classes.pTRBL} fullWidth>Save Workout</Button>
        </form>
      </Grid>
    </Container>
  );
}
