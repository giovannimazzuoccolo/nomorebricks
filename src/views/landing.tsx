import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Button
} from "@material-ui/core";
import DiscoverMore from "../../components/discovermore";

import { styled } from "@material-ui/styles";

const Landing: React.FC = () => {
  const [openDiscoverMore, triggerDiscoverMore] = React.useState(false);

  const triggerDialog = (value: boolean) => {
    triggerDiscoverMore(value);
  };

  return (
    <StyledContainer>
      <Grid container>
        <StyledGrid
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignContent="center"
        >
          <TypographyText variant="h4">Improve your shots!</TypographyText>
          <TypographyText variant="body1">
            <strong>No More Bricks</strong> will guide you to improve your
            basketball shots. <br /> It contains exercises to do at the court
            and at home and it will track all your progress.
          </TypographyText>

          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
          >
            <Button variant="contained" color="primary" size="large">
              Begin your journey
            </Button>
            <Button
              onClick={() => {
                triggerDialog(true);
              }}
            >
              Discover more
            </Button>
          </Grid>
        </StyledGrid>
      </Grid>
      {openDiscoverMore && (
        <DiscoverMore open={openDiscoverMore} closeRequest={triggerDialog} />
      )}
    </StyledContainer>
  );
};

export default Landing;

//styles

const StyledGrid = styled(Grid)({
  background:
    "linear-gradient(120deg, rgba(246, 211, 101, 0.7), rgba(253, 160, 133, 0.8) 100%), url(/landing-nomorebricks.jpg) center center no-repeat",
  backgroundSize: "cover",
  height: "calc(100vh - 74px)"
});

const StyledContainer = styled(Container)({
  padding: 0
});

const TypographyText = styled(Typography)({
  textAlign: "center",
  padding: "0px 20px 20px"
});
