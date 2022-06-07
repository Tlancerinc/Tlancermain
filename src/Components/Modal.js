const Modal = (props) => {
  return (
    <>
      <style>{`
            .thank-you {
                position: fixed;
                left-0;
                top: 0;
                background: rgba(0,0,0,.5);
                z-index: 100;
                height: 100%!important;
                width: 100vw!important;
                align-items: center;
                justify-content: center;
            }
        `}</style>
      <div
        style={{
          display: `${props.modalIsOpen ? "flex" : "none"}`,
          fontFamily: "'Ubuntu', sans-serif",
        }}
        className="thank-you container-fluid m-0 p-5"
      >
        <div className="row">
          {props.isLoading ? (
            <div className="col bg-white p-5 rounded text-center">
              <h1>Submitting...</h1>
            </div>
          ) : (
            <div className="col bg-white p-5 rounded text-center">
              <p>Submission received</p>
              <h1 className="fw-bold">Thank You For Signing Up</h1>

              <button
                onClick={() => {
                  props.setModalIsOpen(false);
                  props.disableForm();
                }}
                className="btn mt-3"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
