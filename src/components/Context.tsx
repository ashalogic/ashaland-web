import { io } from "socket.io-client";

class Context {
  socket = io("http://192.168.0.169:8081");
  userMedia: MediaStream | undefined;
  mediaStreamTrack: MediaStreamTrack | undefined;

  constructor() {}
}

export default Context;
// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io();

// function Context() {
//   const [isConnected, setIsConnected] = useState(socket.connected);
//   const [lastPong, setLastPong] = useState(null);

//   useEffect(() => {
//     socket.on("connect", () => {
//       setIsConnected(true);
//     });

//     socket.on("disconnect", () => {
//       setIsConnected(false);
//     });

//     socket.on("pong", () => {
//       setLastPong(new Date().toISOString());
//     });

//     return () => {
//       socket.off("connect");
//       socket.off("disconnect");
//       socket.off("pong");
//     };
//   }, []);

//   const sendPing = () => {
//     socket.emit("ping");
//   };
// }

// export default Context;
