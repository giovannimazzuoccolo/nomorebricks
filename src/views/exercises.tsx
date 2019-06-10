import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }),
);

const cards: {title: string, image: string, text: string, buttons:{ text: string, action: Function, variant: string }[] }[] = 
[{
  title: 'Court training',
  image: 'court.png',
  text: 'This is the time when you can make the difference, track all your shots and access all the stats of your workout!',
  buttons: [
    {
      text: 'Start workout now',
      variant: 'primary',
      action: () => {}
    },
    {
      text: 'Register past workout',
      variant: 'primary',
      action: () => {}
    }
  ]
}]


export default function MediaCard() {
  const classes = useStyles();

  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}