import './App.css';
import "./tailwind.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Ex from "./pages/Ex";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";

const App: React.FC = () => (
  <div className='font-font'>
    <Router>

      <nav className='w-full flex font-font'>
        <ul className='w-full flex justify-start gap-4 font-font'>
          <li className=''>
            <Link to="/" style={{ color: "#4d443c", textDecoration: "none", fontWeight: "500" }}>首頁</Link>
          </li>
          <li className=''>
            <Link to="/about" style={{ color: "#4d443c", textDecoration: "none", fontWeight: "500" }}>關於我</Link>
          </li>
          <li className=''>
            <Link to="/ex" style={{ color: "#4d443c", textDecoration: "none", fontWeight: "500" }}>個人經歷</Link>
          </li>
          <li className=''>
            <Link to="/board" style={{ color: "#4d443c", textDecoration: "none", fontWeight: "500" }}>留言板</Link>
          </li>
        </ul>
        <ul className=''>
          <li className='w-full'>
            <Link to="/login" style={{ color: "#4d443c", textDecoration: "none", fontWeight: "500" }}>登入</Link>
          </li>
          <li className='w-full'>
            <Link to="/register" style={{ color: "#4d443c", textDecoration: "none", fontWeight: "500" }}>註冊</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/ex" element={<Ex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/board" element={<Board />} />

      </Routes>
    </Router>
  </div>

);

export default App;