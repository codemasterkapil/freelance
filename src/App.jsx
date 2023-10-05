import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./page/StudentPage/Student";
import Teacher from "./page/Teacher/Teacher.jsx"
import Quiz from './page/Quiz/Quiz';
import {useState} from "react";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Student />} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/teacher" element={<Teacher/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
