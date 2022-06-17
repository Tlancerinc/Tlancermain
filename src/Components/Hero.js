import heroImg from "../images/hero-img.png";
import vector from "../images/GiantGreen.svg";
const Hero = () => {
  return (
    <>
      <style>{`
        #hero-blob {
            left: 0;            
            top: 0;
        }
     
        #hero-container-deco {
          position: absolute;
          top: -90%;
          right: 40%;
          width: 80rem;
          opacity: .15;
          animation: spin linear 43s infinite;
          overflow: hidden;  
          z-index: 0;        
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);            
          }
          
          100% {
            transform: rotate(360deg);            
          }
        }

        @media (min-width: 768px) {
          #hero-container-deco {
            display: none;
          }
        }

        @media (min-width: 768px) {
          #hero-container-deco {
            display: none;
          }
        }
        
        
      `}</style>
      <section id="hero">
        <div id="hero-target" className="link-target mb-5"></div>
        <div className="container-fluid d-flex flex-column flex-md-row align-items-start text-center text-md-start pt-4 px-2 mx-0 mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-6 col-lg-5 px-lg-0 mb-0 py-5 my-xl-5 text-xl-start">
            {/* <img
              id="hero-container-deco"
              src={vector}
              alt="green decorative blob"
            /> */}
            <h1 className="display-6 display-md-1 fw-bold lh-base">
              {/* Learn from <br /> certified and experienced tutors */}
              ისწავლე გამოცდილი მასწავლებლებისგან
            </h1>
            <p className="h5 fw-normal my-5 pb-2">
              დაუკავშირდი მასწავლებლებს და ციფრულად მართე სწავლის პროცესი
              ჩვენთან ერთად
            </p>
            {/* Get Started */}
            <a href="#hero-btn-target" className="btn px-5 btn-lg text-white">
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
              width="875"
              height="1046"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
