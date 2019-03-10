import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Platform from "./Platform.js";
import PlatformContext from "./context/PlatformContext";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Cristo",
      username: "cristo",
      password: "test",
      logged: false,
      avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      id: 2,
      name: "Elisa",
      username: "elisa",
      password: "italia",
      logged: false,
      avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ]);

  return <Platform />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
