import React from "react";

function Modal(props) {
  return (
    <>
      <button
        type="button"
        style={{
          display: "flex",
          width: "100%",
          border: "2px solid black",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.5rem",
          padding: "2% 0",
          marginTop: "2%",
          whiteSpace: "break-spaces",
        }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {props.text}
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {props.title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{props.description}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={props.onNext()}
              >
                {props.nextText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
