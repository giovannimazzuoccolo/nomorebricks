import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { MdMenu } from 'react-icons/md';
import { GiBasketballBasket } from 'react-icons/gi';


import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    toolbar: {
      justifyContent: "space-between"
    },
    media: {
      height: 140
    }
  })
);

const Header:React.FC = () => {

    const classes = useStyles();


    return(
        <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <MdMenu size="30" />
          <Typography variant="h6">NO MORE BRICKS!</Typography>
          <GiBasketballBasket size="30" />
        </Toolbar>
      </AppBar>
    )
}

export default Header;