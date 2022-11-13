import React from "react";
import Toast from "bootstrap/js/dist/toast";

function Notification(props: {
  data: { title: string; message: string } | undefined;
}) {
  React.useLayoutEffect(() => {
    if (props.data) {
      const toastLiveExample = document.getElementById("liveToast");
      const toast = new Toast(toastLiveExample!);
      toast.show();
    }
  }, [props.data]);
  return (
    <div
      id="liveToast"
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        {/* <img src="..." className="rounded me-2" alt="..." /> */}
        <strong className="me-auto">{props.data?.title}</strong>
        <small>{Date.now()}</small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{props.data?.message}</div>
    </div>
  );
}

export default Notification;
