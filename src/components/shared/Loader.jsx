import React from "react";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <h2>Loading...</h2>
    </div>
  );
}

export default Loader;
