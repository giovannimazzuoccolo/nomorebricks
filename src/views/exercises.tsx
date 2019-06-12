import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 345,
      marginBottom: 20
    },
    media: {
      height: 140
    },
    container: {
      padding: "20px 0px 0px",
      backgroundColor: "#f1f1f1"
    },
    grid: {
      justifyContent: "center"
    }
  })
);

const cards: {
  title: string;
  image: string;
  text: string;
  key: number;
  buttons: { text: string; action?: Function; variant: string, link?: string }[];
}[] = [
  {
    title: "Court training",
    image: "court.png",
    text:
      "This is the time when you can make the difference, track all your shots and access all the stats of your workout!",
    key: 0,
    buttons: [
      {
        text: "Start workout now",
        variant: "primary",
      },
      {
        text: "Register past workout",
        variant: "primary",
        link: '/registerWorkout'
      }
    ]
  },
  {
    title: "Home training",
    image: "home.png",
    text:
      "You can still improve your basketball skills also when you are away from the court, discover more!",
    key: 1,
    buttons: [
      {
        text: "Start workout now",
        variant: "primary",
        action: () => {}
      },
      {
        text: "Register past workout",
        variant: "primary",
        action: () => {}
      }
    ]
  }
];

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.grid}>
        {cards.map(card => (
          <Card className={classes.card} key={card.key}>
            <CardMedia
              className={classes.media}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.text}
              </Typography>
            </CardContent>
            <CardActions>
              {card.buttons.map((btn, index) => (
                <Button
                  size="small"
                  key={index}
                  color="primary"
                  onClick={() => btn.action}
                >
                  {btn.hasOwnProperty('link') && <Link to={btn.link ? btn.link : ''}>{btn.text} </Link>}
                  {!btn.hasOwnProperty('link') && btn.text}

                </Button>
              ))}
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
