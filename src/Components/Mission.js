import missionImage from "../images/manHoldingRedFolder.png";
const Mission = (props) => {
  console.log("Mission Rendered");
  return (
    <>
      <style>{`
            
            #mission-section p {
              font-weight: 400;
              font-family: 'Inter', san-serif;
            }

            
            
        `}</style>
      <section
        id="mission-section"
        className="container-fluid px-0 p-md-5 bg-white"
      >
        <div id="mission" className="link-target"></div>
        <div className="container d-flex flex-column flex-lg-row py-5 mt-5">
          <div className="col col-lg-6 text-center mb-5 mx-auto">
            <img
              className="img-fluid"
              src={missionImage}
              alt="man with red folder"
              width="893"
              height="703"
            />
          </div>
          <div className="col col-lg-6 text-center text-lg-start m-auto px-0 px-lg-5">
            {/* Our Mission */}
            <h2 className="fw-bold display-4 h1">
              {props.lang ? "მისია" : "Mission"}
            </h2>
            <p className="fs-4 fw-light pb-lg-1 pt-2">
              {props.lang
                ? "თილანსერი მიზნად ისახავს, შექმნას ულიმიტო საგანმანათლებლო სივრცე მოტივირებული ადამიანებისთვის გლობალური მასშტაბით, სადაც მათ საშუალება ექნებათ, შეისწავლონ მათთვის საინტერესო კურსები, სახლიდან გაუსვლელად."
                : "Tlancer aims to create an unlimited educational space for motivated people on a global scale, where they will be able to explore courses that interest them, without ever leaving home."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
