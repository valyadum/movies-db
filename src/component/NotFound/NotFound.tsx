import React from 'react';
import logo from "/Users/valentynadumbrava/Desktop/movies-db/src/cinema-ico.png";

function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#0c0f21",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 34,
      }}
    >
      <div>
        <img
          src={logo}
          style={{ width: 400, filter: "invert(1)" }}
          alt="logo"
        />
      </div>
      <br />
      <h1>Oops!</h1>
      <p>Sorry, we can't find this page...</p>
    </div>
  );
}

export default NotFound;