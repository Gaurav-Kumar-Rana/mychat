import React, { useState, useEffect } from "react";
import PhotoListComponent from "./PhotoListComponent";
import ErrorBoundry from "./ErrorBoundry";
import ThemeContext from "../store/context";
import TodoApp from "./TodoApp.tsx";
function App() {
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    async function fetchPhoto() {
      const photo = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await photo.json();
      setList(result);
    }

    fetchPhoto();
  }, []);
  const todoLists = [{title: "My First todo", completed: false, id: +new Date()}];
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ErrorBoundry>
        <div className={theme}>
          <h1>My Client App</h1>
          {/* <PhotoListComponent list={list} /> */}
          <TodoApp lists={todoLists} />
        </div>
      </ErrorBoundry>
    </ThemeContext.Provider>
  );
}

export default App;
