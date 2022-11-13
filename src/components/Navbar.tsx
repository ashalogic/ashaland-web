import React from "react";

function Navbar() {
  const [appVersion, setAppVersion] = React.useState("");
  React.useEffect(() => {
    async function _fetch() {
      let version = await window.api.versions.app();
      setAppVersion(version);
    }
    _fetch();
  }, []);
  return (
    <nav className="navbar fixed-top shadow-lg bg-light border-top border-5 border-warning">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 me-auto">
          {`AshaLand -v${appVersion}`}
        </span>

        <button
          data-bs-toggle="modal"
          data-bs-target="#settingsModal"
          type="button"
          className={`btn btn-light mx-1`}
        >
          <i className="bi bi-sliders"></i>
        </button>
        <button
          onClick={() => {
            window.close();
          }}
          type="button"
          className={`btn btn-light mx-1`}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        {/* <button
          onClick={() => {
            window.close();
          }}
          type="button"
          className="btn-close mx-1"
          aria-label="Close"
        /> */}
      </div>
    </nav>
  );
}
export default Navbar;
