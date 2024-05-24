import { useState, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = useMemo(() => io("http://localhost:5000"), []);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket", socket.id);
    });
  }, []);

  return (
    <>
      <h1>Client Side Web Socket</h1>
    </>
  );
}

export default App;
