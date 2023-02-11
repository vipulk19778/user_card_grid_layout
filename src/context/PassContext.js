import React, { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [showText, setShowText] = useState(true);

  const url = "https://reqres.in/api/users?page=1";

  const loadGetUsers = async () => {
    setShowText(false);
    return await axios
      .get(url)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  const store = { users, loadGetUsers, showText };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
