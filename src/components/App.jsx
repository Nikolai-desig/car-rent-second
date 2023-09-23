import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import css from './App.module.css'
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import Favorite from "./Pages/Favorite";

export default function App() {
  return (
    <div className={css.app}>
      <header>
        <nav className={css.navigation}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="/cars" className={css.link}>
            Cars
          </Link>
          <Link to="/favorite" className={css.link}>
            Favorite
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}
