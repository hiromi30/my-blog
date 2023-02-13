import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BorderedBottomBox from "../Wrapper/BorderedBottomBox";
import { Paper } from "@mui/material";
//画像挿入------------------------------------------
import myphoto from "./Img/myphoto.jpg";
import { Box } from "@mui/material";
import SkillsBar from "./SkillsBar/SkillsBar";

const Title = ({ text }) => (
  <Typography
    variant="h3"
    component="h2"
    getterBottom
    sx={{
      textAlign: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      },
    }}
  >
    {text}
  </Typography>
);

const Description = ({ text }) => (
  <Typography
    variant="h5"
    component="h3"
    sx={{
      textAlign: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      },
    }}
  >
    {text}
  </Typography>
);

const Features = () => {
  return (
    <Paper>
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 2 }} >
          <Grid container columnSpacing={6} >
            <Grid item xs={6} sm={7} md={8} lg={9} xl={9} >
              <Box m={1}>
                <Title text="About" />
              </Box>
              <Box m={1}>
                <Description text="FURUYA HIROMI" />
                </Box>
                <Box m={1}>
                <Description text="【経歴】" />
                </Box>
                <Typography variant="h6">
                  駅弁卒業→日本で営業職→インドに語学留学→ハノイで営業→転職しホーチミンで管理職→退職後タイ、アルメニア、ジョージアに滞在しながらプログラミングを学習→現在は転職活動中。JS系統をメインで学習しています。
                </Typography>
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={3} xl={3}>
              <Box
                sx={{
                  backgroundImage: `url(${myphoto})`,
                  backgroundRepeat: "no-repeat",
                  height: "200px",
                  width: "auto",
                  padding: "50px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Title text="Technical Skills" />
              <SkillsBar />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>
    </Paper>
  );
};

export default Features;
