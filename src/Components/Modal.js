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
          <div className="col-lg-2"></div>
          <div className="col col-lg-8 bg-white p-5 rounded text-center">
            <h1 className="fw-bold lh-lg">
              თქვენი მონაცემები გაგზავნილია! აპლიკაციის საბოლოო ჩაშვებისთანავე
              თქვენ მიიღებთ დამატებით ინფორმაციას მეილზე
            </h1>

            <button
              onClick={() => {
                props.setModalIsOpen(false);
                props.disableForm();
              }}
              className="btn btn-lg mt-3"
            >
              დახურვა
            </button>
          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
