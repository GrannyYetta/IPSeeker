import React, { useEffect, useState } from "react";
import axios from "axios";

const Request = () => {
  const [request, setRequest] = useState([]);
  
  useEffect(() => {
    axios.get(
      `https://geo.ipify.org/api/v2/country?apiKey=at_QsfJmhZiKJmwXSEGep2avwHQZlHfg`
    );
      .then((response) => {
        setRequest(response.data.ip);
        console.log(response.data.ip)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3> Your IP Address is: </h3>
    </div>
  );
};

export default Request;
