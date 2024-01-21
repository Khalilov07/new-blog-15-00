import React from "react";

import styles from "./header.module.css"; // styles - это некий объект с классами

import { Link } from "react-router-dom";

const Header = ({ user }) => {

  // styles - объект с классами

  // props = object

  // react-router-dom позволит сделать запрос на JSX

  // <a> - запрашивает новый HTML файл и этот тег не умеет работать с jsx

  return (
    
    <header className={styles.header}>
      <nav className={styles.nav}>
        {user.status === "admin" ? (
          <>
            <button onClick={() => user = {}}>exit</button>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/create">Create Post</Link>
            <Link>{user.name}</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header; // это нужно для отображение файла в других компонентах
