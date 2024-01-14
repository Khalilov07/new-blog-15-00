import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import styles from "./login.module.css";
import axios from "axios";
import Header from "../../components/Header/Header";

const LoginPage = ({ changeUserState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const postUser = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    axios.post(`http://localhost:3001/login`, user).then((res) => {
      alert("вы успешно вошли в аккаунт");
      setEmail("");
      setPassword("");
      changeUserState(res.data.user)
    });

    // сделайте уведомление после регистрации, snackBar
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={postUser}>
        <h1>LOGIN FORM</h1>
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
        <Button variant="contained" color="success" type="submit">
          LOGIN
        </Button>
      </form>
    </div>
    // 1. вам нужно добавить дополнительное поле при регистрации (NAME)
    // 2. при авторизации получать данные то есть (res) и сохранять их в
    // состояние к примеру (user, setUser)
  );
};

// отобразить страницу Register Page, возможность переход по ней

export default LoginPage;
