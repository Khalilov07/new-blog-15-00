import React, { useState } from "react";

import "./aboutpage.css";

const AboutPage = () => {
  // useState - помогает создать некое состояние которое можно изменить изменить с течением
  // времени

  //   const [allTurns, setAllTurns] = useState({
  //     left: 0,
  //     right: 0
  //   })

  const [likes, setLikes] = useState(0); // мы поместили примитивный тип данных

  const [allTurns, setAllTurns] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAllClicks] = useState([]);

  // concat() - но он работает с копией массива

  // array[], object{}

  // сделать так чтобы подчитывалось нажатии на кнопки и выводить количество нажатии
  // click LEFT: 1, click RIGHT: 1

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDisLike = () => {
    setLikes(likes - 1);
  };

  const handleLeft = () => {
    const newAllTurns = {
      ...allTurns, // ...название объекта это - spread operator
      left: allTurns.left + 1,
    };
    setAllTurns(newAllTurns);
    setAllClicks(allClicks.concat("L"))
  };

  const handleRight = () => {
    const newAllTurns = {
      ...allTurns,
      right: allTurns.right + 1,
    };
    setAllTurns(newAllTurns);
    setAllClicks(allClicks.concat("R"))
  };

  const handleZeroLike = () => {
    setLikes(0);
  };

  // Почитать как добавить что-то в конец массив
  // создать состояние которое будет содержать массив с строками: L, R
  // при нажатии на кнопку LEFT, добавлять к концу массива букву L,
  // в случае если кликам на RIGHT, то добавлять к концу массива букву R

  return (
    <div className="about-wrapper">
      <h1>About Page</h1>

      <h3>{likes}</h3>

      <button onClick={handleLike}>like</button>
      <button onClick={handleDisLike}>dislike</button>
      <button onClick={handleZeroLike}>Zero</button>

      <h3>LEFT: {allTurns.left}</h3>
      <h3>RIGHT: {allTurns.right}</h3>
      <h3>{allClicks.join(", ")}</h3>

      <button onClick={handleLeft}>LEFT</button>
      <button onClick={handleRight}>RIGHT</button>
    </div>
  );
};

export default AboutPage;
