import React from "react";

import styles from "./courseitem.module.css";

import { Button } from "@mui/material";

const CourseItem = ({ course, deletePost, changeImportant }) => {
  return (
    <div className={styles.course}>
      <div className={`${styles.statusRound} ${course.important === true ? styles.green : styles.gray}`}></div>
      <div className={styles.course__info}>
        <h2>
          Название Курса: <span>{course.title}</span>
        </h2>
        <h3>
          Продолжительность курса: <span>{course.duration}</span>
        </h3>
      </div>
      <div className={styles.course__buttons}>
        <Button variant="contained" color="error" onClick={() => deletePost()}>DELETE</Button>
        <Button variant="contained" color="success" onClick={() => changeImportant()}>CHANGE IMPORTANT</Button>
      </div>
    </div>
  );
};

// почитать про axios и понять где его нужно применить

export default CourseItem;

// rsc
