import missionImage from "../images/manHoldingRedFolder.webp";
const Mission = () => {
  return (
    <>
      <style>{`
            
            #mission p {
              font-weight: 400;
              font-family: 'Inter', san-serif;
            }

            
            
        `}</style>
      <section id="mission" className="container-fluid px-0 p-md-5 bg-white">
        <div id="mission-target" className="link-target"></div>
        <div className="container d-flex flex-column flex-lg-row py-5 mt-5">
          <div className="col col-lg-6 text-center mb-5 mx-auto">
            <img
              className="img-fluid"
              src={missionImage}
              alt="man with red folder"
              width="862"
              height="777"
            />
          </div>
          <div className="col col-lg-6 text-center text-lg-start m-auto px-0 px-lg-5">
            <h2 className="fw-bold display-4 h1">Our Mission</h2>
            <p className="fs-4 fw-light pb-lg-1 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
              nullam vivamus massa orci eros, adipiscing ut velit. Quis
              scelerisque sit duis ut eget ornare. Id sed porttitor est odio
              quis in egestas. Dignissim nec id amet blandit semper.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Mauris, nullam
              vivamus massa orci eros, adipiscing ut velit. Quis scelerisque sit
              duis ut eget ornare. Id sed porttitor est odio quis in egestas.
              Dignissim nec id amet blandit semper.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
