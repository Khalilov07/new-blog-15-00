import React from "react";

import styles from "./header.module.css"; // styles - это некий объект с классами

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const user = useSelector(state => state.user.user)

  console.log(user)


  // styles - объект с классами

  // props = object

  // react-router-dom позволит сделать запрос на JSX

  // <a> - запрашивает новый HTML файл и этот тег не умеет работать с jsx

  return (

    <header className={styles.header}>
      <nav className={styles.nav}>
        
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/create">Create Post</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header; // это нужно для отображение файла в других компонентах
