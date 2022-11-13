import React from "react";

function Settings(props: { username: string; updateUsername: Function }) {
  const [username, setUsername] = React.useState("");

  return (
    <div
      id="settingsModal"
      className="modal fade"
      tabIndex={-1}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Settings</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={props.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Username</label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
            <button
              onClick={() => {
                props.updateUsername(username);
              }}
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
