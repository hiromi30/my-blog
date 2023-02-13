import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material";

//MUI Icon----------------------------------------------------------------
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
//--------------------------------------------------------------------------
const Footer = () => {
  return (
    <Paper>
      <Container container maxWidth="lg" displax="flex">
        <Stack spacing={1} align="center" justifyContent="center">
          <Grid container alignItems="center">
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Stack spacing={2} direction="row" justifyContent="center" align="center" >
                <Typography variant="subtitle1"  >Copyright(C) Hiromi Furuya </Typography>
              </Stack>
            </Grid>
{/* -----------------------Icons------------------------------------------ */}

            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography variant="subtitle1" mx={7}>
                Follow me
              </Typography>
              <Stack direction="row" justifyContent="center">
                <IconButton size="medium">
                  <InstagramIcon />
                </IconButton>

                <IconButton size="medium">
                  <FacebookIcon />
                </IconButton>

                <IconButton size="medium">
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Grid>
{/* -----------------------phone------------------------------------------ */}

            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Stack spacing={1} justifyContent="center">
                <Typography variant="subtitle1" mx={2}>
                  Phone No.
                </Typography>
                <Typography variant="subtitle1">
                  +81 {"("}0{")"}90 *******
                </Typography>
              </Stack>
            </Grid>
{/* -----------------------Email------------------------------------------ */}
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Stack spacing={1} justifyContent="center">
                <Typography variant="subtitle1" mx={9}>
                  Email
                </Typography>
                <Typography variant="subtitle1" mx={3}>
                  hiromi-info****.@outlook.jp
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Paper>
  );
};

export default Footer;
