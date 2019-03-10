import React from "react";

export default React.createContext({
  users: [
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
  ]
});
