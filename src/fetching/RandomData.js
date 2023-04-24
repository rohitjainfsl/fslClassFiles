import React, { useState } from "react";
import axios from "axios";

function RandomData() {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  function getRandomData() {
    return axios.get("https://randomuser.me/api").then((result) => {
      console.log(result.data.results[0]);
      setPhoto(result.data.results[0].picture.large);
      setName(
        result.data.results[0].name.first +
          " " +
          result.data.results[0].name.last
      );
      setEmail(result.data.results[0].email);
    });
  }

  return (
    <div>
      <button onClick={getRandomData}>Get Random Data</button>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default RandomData;
