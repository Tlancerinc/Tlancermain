import missionImage from "../images/manHoldingRedFolder.png";
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
            {/* Our Mission */}
            <h2 className="fw-bold display-4 h1">მისია</h2>
            <p className="fs-4 fw-light pb-lg-1 pt-2">
              თილანსერი მიზნად ისახავს, შექმნას ულიმიტო საგანმანათლებლო სივრცე
              მოტივირებული ადამიანებისთვის გლობალური მასშტაბით, სადაც მათ
              საშუალება ექნებათ, შეისწავლონ მათთვის საინტერესო კურსები, სახლიდან
              გაუსვლელად.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
