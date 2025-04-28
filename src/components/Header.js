import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";

export default function Header() {
  const tasks = useSelector((state) => state.users);
  console.log(tasks);
  return (
    <div className="header">
      <h2 className="app-subtitle">My sports event calendar</h2>
      <img className="logo" src="calendar.jpg" alt="" />
    </div>
  );
}
