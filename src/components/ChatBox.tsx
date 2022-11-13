import React from "react";

function ChatBox(props: { messages: any[] }) {
  return (
    <div
      className={`card shadow-sm border-0 mb-3 me-2 flex-fill`}
    >
      <div className="card-body d-flex flex-column overflow-auto">
        <div className="d-flex flex-column flex-fill overflow-auto">
          {props.messages.map((mesagge) => (
            <div>{mesagge}</div>
          ))}
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
