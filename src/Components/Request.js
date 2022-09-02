import React, { useEffect, useState } from "react";
import axios from "axios";

const Request = () => {
  const [request, setRequest] = useState([]);
  const getWithAxios = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_QsfJmhZiKJmwXSEGep2avwHQZlHfg&ipAddress=8.8.8.8`
      )
      .then((response) => {
        setRequest(response.data.ip);
        console.log(response.data.ip);
      })
      .catch((err) => console.log(err));
  };
};
