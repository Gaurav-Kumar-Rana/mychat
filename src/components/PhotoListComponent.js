import React, { useContext } from "react";
import ThemeContext from "../store/context";
function PhotoListComponent({ list }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const dark = {
    color: "#fff",
    backgroundColor: "#000",
    padding: "20px",
  };

  const light = {
    color: "#000",
    backgroundColor: "#fff",
    padding: "20px",
  };
  return (
    <>
      <button
        onClick={() => {
          setTheme((prevState) => (prevState == "dark" ? "light" : "dark"));
        }}
      >
        Enable Night Mode
      </button>
      <ul className={theme} style={theme == "dark" ? dark : light}>
        {list.map(({ title }) => {
          return <li key={title.split(" ").join("")}>{title}</li>;
        })}
      </ul>
    </>
  );
}

export default PhotoListComponent;
