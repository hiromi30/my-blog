import MuiNavbar from "../components/MuiNavbar";
import BorderedBottomBox from "../Wrapper/BorderedBottomBox";

import React from "react";
import { Card, CardContent, Grid, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const Contact = function () {
  
  return (
    <>
    <MuiNavbar/>
    <BorderedBottomBox/>
      <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h3">Contact Page</Typography>
          <Typography gutterBottom color="textSecondary" variant="body2" component="p"> Fill up the form and I will get back to you within 48 hours.</Typography>
          <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item mt={1}>
              <TextField
                label="First Name"
                placeholder="Enter first name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item mt={1}>
              <TextField
                label="Last Name"
                placeholder="Enter last name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Grid xs={12} item mt={2} md={2}>
            <TextField
              type="email"
              label="Email"
              placeholder="Enter email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item mt={2} md={2}>
            <TextField
              type="number"
              label="Phone Number"
              placeholder="Enter Phone Number"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          <Grid xs={12} item mt={2} md={2}>
            <TextField
              label="Message"
              multiline
              rows={4}
              placeholder="type your message"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item md={1} mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: 50 }}
            >
              Submit
            </Button>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Contact;
