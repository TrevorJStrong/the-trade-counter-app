import React from "react";
import axios from "axios";

export const login = () => {
  axios
    .post("/login", {
      name: "",
      email: "",
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
