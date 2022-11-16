import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Signup() {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo] = useState("");

  const SignupUser = () => {
    //To create the new user in our firebase authentication
    //Then update the user data to save the user photoURL
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        const user = authUser.user;
        updateProfile(user, {
          displayName: name,
          photoURL:
            photo ||
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        }).catch((error) => {
          alert(error.message);
        });
        //To send the user information in our database
        try {
          setDoc(doc(db, "Users", name), {
            name: name,
            street: street,
            city: city,
            province: province,
            contactNumber: contactNumber,
            email: email,
            admin: false,
            photoURL:
              photo ||
              "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Full Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Street"
                value={street}
                onChange={(event) => {
                  setStreet(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="City"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Province"
                value={province}
                onChange={(event) => {
                  setProvince(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Contact Number"
                value={contactNumber}
                onChange={(event) => {
                  setContactNumber(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={SignupUser}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
