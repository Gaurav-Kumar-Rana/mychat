import React, { useState, useEffect } from "react";
import PhotoListComponent from "./PhotoListComponent";
function ClientApp() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchPhoto() {
      const photo = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await photo.json();
      setList(result);
    }

    fetchPhoto();
  }, []);
  return (
    <div>
      <h1>My Client App</h1>
      <PhotoListComponent list={list} />
      <PhotoListComponent list={list} />
      <PhotoListComponent list={list} />
    </div>
  );
}

export default ClientApp;
