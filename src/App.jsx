import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/AboutMe/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import CreatePost from "./pages/CreatePost/CreatePost";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from "react";

// Reactjs code snippet

const App = () => {

  const [user, setUser] = useState({})

  const changeUserState = (data) => {
    setUser(data)
  }

  console.log(user)

  return (
    <div className="App">
      
      <Header user={user} /> 
      {/* header - должен быть на всех страницах  */}

      {/* Routes - позволяет создать коллекцию маршрутов */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/create" element={<CreatePost />} /> 
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage changeUserState={changeUserState} />} />
      </Routes>

    </div>
  );
};

export default App;

// jsx = java script + HTML

// npx create-react-app .
