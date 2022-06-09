import heroImg from "../images/hero-img.png";
import vector from "../images/smallVector.svg";
const Hero = () => {
  return (
    <>
      <style>{`
        #hero-blob {
            left: 0;            
            top: 0;
        }
     
      #hero-container-deco stop {
        color: black
      }

      @media (min-width: 768px) {
        #hero-container-deco {
          background: white!important;
        }
      }
        
        
      `}</style>
      <section id="hero">
        <div id="hero-target" className="link-target mb-5"></div>
        <div
          id="hero-container-deco"
          style={{
            background: `url(${vector})`,
            backgroundSize: "80vw",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 20%",
          }}
          className="container-fluid d-flex flex-column flex-md-row align-items-start text-center text-md-start pt-5 mb-lg-5 px-2 mx-0 mt-5"
        >
          <div className="col-lg-1"></div>
          <div className="col-md-6 col-lg-5 px-lg-0 mb-0 py-5 my-xl-5 text-xl-start">
            <h1 className="display-5 display-md-1 fw-bold lh-base">
              {/* Learn from <br /> certified and experienced tutors */}
              ისწავლე გამოცდილი მასწავლებლებისგან
            </h1>
            <p className="h4 fw-normal my-5 pb-2">
              დაუკავშირდი მასწავლებლებს და ციფრულად მართე სწავლის პროცესი
              ჩვენთან ერთად
            </p>
            {/* Get Started */}
            <a href="#student-target" className="btn px-5 btn-lg">
              დაიწყე
            </a>
          </div>

          <div className="col-md-6 d-none d-md-block container-fluid px-0 text-md-end position-relative top-0 end-0">
            <img
              id="hero-blob"
              className="img-fluid position-absolute d-none d-xl-block"
              src={vector}
              alt="green blob"
              width="117"
              height="134"
            />

            <img
              id="hero-img"
              className="img-fluid me-0"
              src={heroImg}
              alt="man pointing upwards"
              width="684"
              height="1027"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
