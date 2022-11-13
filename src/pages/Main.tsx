import React from "react";

import User from "../components/User";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ChatBox from "../components/ChatBox";
import Context from "../components/Context";
import Notification from "../components/Notification";
import Settings from "../components/Settings";

const _context = new Context();

function Main() {
  const [isConnected, setIsConnected] = React.useState(false);

  const [connectedUsers, setConnectedUsers] = React.useState([]);
  const [username, setUsername] = React.useState("");

  const [data, setData] = React.useState<{
    title: string;
    message: string;
  }>();

  React.useLayoutEffect(() => {
    _context.socket.on("connect", async () => {
      setIsConnected(true);
      const username = await window.api.user.getUsername();
      setUsername(username);
      _context.socket.emit("updateUsername", username);
    });
    _context.socket.on("disconnect", () => {
      setIsConnected(false);
    });
    _context.socket.on("onlineUsers", (users: any[]) => {
      console.log(users);
      setConnectedUsers(users);
    });

    _context.socket.io.on("error", (error) => {
      // ...
    });
    _context.socket.io.on("reconnect", (attempt) => {
      // ...
    });
    _context.socket.io.on("reconnect_failed", () => {
      // ...
    });

    return () => {
      _context.socket.off("connect");
      _context.socket.off("disconnect");
      _context.socket.off("onlineUsers");

      _context.socket.io.off("error");
      _context.socket.io.off("reconnect");
      _context.socket.io.off("reconnect_failed");
    };
  }, []);

  return (
    <div className="container-fluid h-100" style={{ paddingTop: "64px" }}>
      <Navbar />
      <div className={`d-flex flex-row h-100`}>
        <div
          className="d-flex flex-column h-100 overflow-auto"
          style={{ minWidth: "18rem", width: "18rem" }}
        >
          {connectedUsers.map((x) => (
            <User name={x} talking={false} mute={false} />
          ))}
          {/* <User name="miss ashalogic" talking={false} mute={false} />
          <User name="siavash" talking={false} mute={false} />
          <User name="kaveh" talking={true} mute={false} />
          <User name="tada" talking={false} mute={true} /> */}
        </div>
        <div className="d-flex flex-column h-100 flex-fill ms-2">
          <Profile
            name={username}
            talking={true}
            mute={false}
            connected={isConnected}
            toggleConnection={() => {
              if (_context.socket.connected) _context.socket.disconnect();
              else _context.socket.connect();
            }}
          />
          <ChatBox messages={[]} />
        </div>
      </div>
      <Settings
        username={username}
        updateUsername={async (newUsername: string) => {
          await window.api.user.setUsername(newUsername);
          setUsername(newUsername);
          _context.socket.emit("updateUsername", newUsername);
        }}
      />
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <Notification data={data} />
      </div>
    </div>
  );
}

export default Main;
