import aboutImage from "../images/blueSuitMan.webp";
const About = () => {
  return (
    <>
      <style>{`
            
            #about p {
                font-weight: 400;
                font-family: 'Inter', san-serif;
            }
            
          
            
        `}</style>
      <section id="about" className="container-fluid px-0 p-md-5 bg-white">
        <div id="about-target" className="link-target"></div>
        <div className="container d-flex flex-column-reverse flex-lg-row py-5">
          <div className="col col-lg-6 text-center text-lg-start m-auto px-0 px-lg-5">
            <h2 className="fw-bold display-4 h1">About Us</h2>
            <p className="fs-4 fw-light pb-lg-1 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
              nullam vivamus massa orci eros, adipiscing ut velit. Quis
              scelerisque sit duis ut eget ornare. Id sed porttitor est odio
              quis in egestas. Dignissim nec id amet blandit semper.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="col col-lg-6 text-center mb-5 mx-auto">
            <img
              className="img-fluid"
              src={aboutImage}
              alt="man in blue suit"
              width="862"
              height="777"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
