import React, { useContext } from "react";
import ThemeContext from "../store/context";
interface PhotoList {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
function PhotoListComponent({ list }: { list: PhotoList[] }) {
  const { theme, setTheme }: { theme: string; setTheme: (theme: string) => void } =
    useContext(ThemeContext);
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
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Enable Night Mode
      </button>
      <ul className={theme} style={theme == "dark" ? dark : light}>
        {list.map(({ title }) => {
          return <li key={title}>{title}</li>;
        })}
      </ul>
    </>
  );
}

export default PhotoListComponent;
