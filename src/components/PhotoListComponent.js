import React from "react";
function PhotoListComponent({list}) {
  return (
    <ul>
      {list.map(({ title }) => {
        return <li key={title.split(" ").join("")}>{title}</li>;
      })}
    </ul>
  );
}

export default PhotoListComponent;
