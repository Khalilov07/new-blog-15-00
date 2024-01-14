import React, { useEffect, useState } from "react";
import "./homepage.css";
import CourseItem from "../../components/CourseItem/CourseItem";
import axios from "axios";

// создать новую страницу, назвать её CreatePost.jsx создать в этой странице разметку
// и сделать для неё роут

const getData = () => {
  return axios("http://localhost:3001/courses");
};

const HomePage = () => {

  const [courses, setCourses] = useState([]); // состояние нужно для получение данных с ответа
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    getData().then((res) => setCourses(res.data));
    // promise = {resolve, reject}
  }, []); // пустой массив в виде второго параметра, позволяет выполнить функцию одина раза

  // если состояние ShowALL = true то тогда отображать все элемент в массиве, если false то тогда выполнять
  // фильтрацию

  const filteredCourses = showAll
    ? courses
    : courses.filter((course) => course.important == true);

  // json-server --watch db.json --port 3001

  const changeState = () => {
    setShowAll(!showAll); // !true = false, !false = true
  };

  // в случае успешного удаления поста добавлять уведомление так как в createPost
  // добавить кнопку EDIT (редактирование)
  // выбрать тему проекта и макет для проекта

  const deletePost = (id) => {
    // id = 5
    axios.delete(`http://localhost:3001/courses/${id}`).then((res) => {
      setCourses(
        courses.filter((course) => {
          return course.id !== id;
          // { id: 5 }, {id : 4}, {id : 6}
        })
      );
    }); // promise

    // id который есть в функции это id удаленного курса
  };

  const changeImportant = (id) => {
    const course = courses.find((course) => course.id === id);

    const changedCourse = {
      ...course,
      important: !course.important,
    };
    axios
      .put(`http://localhost:3001/courses/${id}`, changedCourse)
      .then((res) =>
        setCourses(
          courses.map((course) => (course.id === id ? res.data : course))
        )
      );
  };

  // useEffect() - позволяет выполнить какой-то эффект на странице

  // console.log(courses);

  // const arr = [10, 20, 30, 40, 50]

  // const newArr = arr.filter(num => {
  //   return num > 30
  // })

  // console.log(newArr);

  // filter - выполняет проверку для каждого элемента массива и если этот элемент проходит проверку
  // он добавляется в новый массив

  return (
    <div className="wrapper">
      {/* 
        использовать метод перебора массива (map) и отобразить три карточки
        с информацией о курсах
    */}

      <button onClick={changeState} className="button">
        {showAll == true ? "Show Important Course" : "Show All Course"}
      </button>

      <div className="course-wrapper">
        {filteredCourses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            deletePost={() => deletePost(course.id)}
            changeImportant={() => changeImportant(course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// rsc - стартовая разметка
