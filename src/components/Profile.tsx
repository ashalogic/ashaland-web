import React from "react";

function Profile(props: {
  name: string;
  mute: boolean;
  talking: boolean;
  connected: boolean;
  toggleConnection: Function;
}) {
  return (
    <div className={`card shadow border-0 mt-2 mb-3 me-2 audiowide`}>
      <div className="card-body d-flex flex-row align-items-center justify-content-start">
        {/* <Wave speed={1} amplitude={1} /> */}
        <img
          width="80px"
          height="80px"
          className={`border rounded-circle border-2 p-1 me-4 ${
            props.mute
              ? "border-danger"
              : props.talking
              ? "border-success"
              : "border-0"
          }`}
          src={`https://avatars.dicebear.com/api/croodles/${props.name}.svg`}
        />
        <h4 className="fw-bold text-nowrap text-truncate text-uppercase flex-grow-1 mb-0">
          {props.name}
        </h4>
        <button
          onClick={() => {
            props.toggleConnection();
          }}
          type="button"
          className={`btn ${
            props.connected ? "btn-success" : "btn-danger"
          } mx-2 text-uppercase`}
        >
          {props.connected ? "Connected" : "Disconnected"}
        </button>
      </div>
    </div>
  );
}

export default Profile;
