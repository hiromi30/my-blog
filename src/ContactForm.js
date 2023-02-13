import React, { useState } from "react";
import MuiNavbar from "./components/MuiNavbar";
import { Card, Grid, CardContent, Typography, Button } from "@mui/material";
import BorderedBottomBox from "./Wrapper/BorderedBottomBox";
import TextField from "@mui/material/TextField";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch.post("http://loaclhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <MuiNavbar />
      <BorderedBottomBox />
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h3">
            Contact Page
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="body2" component="p"> Fill up the form and I will get back to you within 48 hours.</Typography>

          <Grid container>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="name"
                  htmlFor="name"
                  tytpe="text"
                  id="name"
                  required
                  fullWidth
                  variant="outlined"
                  placeholder="name"
                >
                </TextField>
                <TextField
                  label="email"
                  htmlFor="email"
                  type="email"
                  id="email"
                  required
                  variant="outlined"
                  fullWidth
                  placeholder="Enter email"
                >
                </TextField>
                  <TextField
                    label="message"
                    htmlFor="message"
                    type="message"
                    id="message"
                    required
                    variant="outlined"
                    fullWidth
                    placeholder="type your message"
                    multiline
                    rows={4}
                  >
                  </TextField>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ height: 50 }}
                >
                  {status}
                </Button>
              </form>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
