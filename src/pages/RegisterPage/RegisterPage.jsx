import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import styles from "./register.module.css";
import axios from "axios";

const RegisterPage = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const postUser = (e) => {
    e.preventDefault()
    
    const newUser = {
      email,
      password,
      name
    }

    axios.post(`http://localhost:3001/register`, newUser)
      .then(res => console.log(res))
      
    // сделайте уведомление после регистрации, snackBar

  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={postUser}>
        <h1>REGISTER FORM</h1>
        <TextField
          id="standard-basic"
          type="email"
          value={email}
          label="Email..."
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          type="password"
          value={password}
          label="Password..."
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="standard-basic"
          type="password"
          value={password}
          label="Password..."
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" color="success" type="submit">
          REGISTER
        </Button>
      </form>
    </div>
  );
};

// отобразить страницу Register Page, возможность переход по ней

export default RegisterPage;
