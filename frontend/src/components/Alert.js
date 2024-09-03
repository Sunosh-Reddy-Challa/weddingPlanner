import { useState } from "react";

function Alert(props) {
  const setDefault = () => {
    props.setclickEvent(false);
  };

  return (
    <div>
      {props.clickEvent && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <h3>
            <strong>Success:</strong> Your message has been sent, our team will contact you soon.
          </h3>
          <button type="button" onClick={setDefault} className="btn-close" data-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
