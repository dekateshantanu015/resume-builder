import React, { useState } from "react";
import Form from "./Form";
import SideBar from "./SideBar";
import "./MainPage.css";

const MainPage = () => {
  const [editingMode, setEditingMode] = useState(0); // 0 - full page, 1 - side-by-side

  return (
    <div className="main-container">
      <SideBar />
      <Form />
    </div>
  );
};

export default MainPage;
