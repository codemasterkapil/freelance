import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./page/StudentPage/Student";
import Teacher from "./page/Teacher/Teacher.jsx"
import Quiz from './page/Quiz/Quiz';
import { useState } from "react";
import Login from './page/Login/Login.jsx';
import Signup from './page/Login/Signup';
import AccountProvider from './Context/AccountProvider.jsx';


function App() {
  return (
    <AccountProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Student />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ AccountProvider>
  );
}

export default App;
