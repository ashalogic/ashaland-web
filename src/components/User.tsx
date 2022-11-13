import React from "react";

function User(props: { name: string; mute: boolean; talking: boolean }) {
  return (
    <div
      className={`card shadow border-0 m-2 user-select-none audiowide`}
      
    >
      <div className="card-body d-flex flex-row align-items-center justify-content-start">
        <img
          width="80px"
          height="80px"
          className={`border rounded-circle border-2 p-1 ${
            props.mute
              ? "border-danger"
              : props.talking
              ? "border-success"
              : "border-0"
          }`}
          src={`https://avatars.dicebear.com/api/croodles/${props.name}.svg`}
        />
        <h6 className="text-nowrap text-truncate text-uppercase flex-grow-1 ms-2 mb-0">
          {props.name}
        </h6>
      </div>
    </div>
  );
}

export default User;
