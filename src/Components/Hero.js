import heroImg from "../images/hero-img.png";
import vector from "../images/GiantGreen.svg";
const Hero = () => {
  console.log("hero rendered");
  return (
    <>
      <style>{`
        #hero-blob {
            left: 0;            
            top: 0;
        }

        #hero {
          overflowX: hidden;
        }

        #cta {
          z-index: 100;
        }
     
        .hero-container-deco {
          position: absolute;
          bottom: 6rem;
          right: 10rem; 
          z-index: -1;         
          width: 40rem;          
          opacity: .13;
          animation: spin linear 40s infinite;
          {/* transform-origin: -29rem 0; */}
        }

        .deco-2 {
          width: 43rem;
          bottom: 8rem;
          right: 13rem;
          z-index: -2;
          opacity: .09;
          animation: spin2 linear 53s infinite;
        }

        @keyframes spin2 {
          0% {
            transform: rotate(0deg);                        
          }          
          100% {
            transform: rotate(360deg);            
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);                        
          }          
          100% {
            transform: rotate(360deg);            
          }
        }

        @media (min-width: 515px) {
          .hero-container-deco {
            bottom: 6rem;
            right: 22rem;
          }
          .deco-2 {
            bottom: 8rem;
            right: 15rem;
          }
        }

        @media (min-width: 768px) {
          .hero-container-deco {
            display: none;
          }
        }

        @media (min-width: 768px) {
          #hero-container-deco {
            display: none;
          }
        }
        
        
      `}</style>
      <section className="position-relative" id="hero">
        <div id="hero-target" className="link-target mb-5"></div>
        <img
          className="display-md-none hero-container-deco"
          src={vector}
          alt="green decorative blob"
        />
        <img
          className="display-md-none hero-container-deco deco-2"
          src={vector}
          alt="green decorative blob"
        />
        <div
          style={{ zIndex: "2" }}
          className="container-fluid d-flex flex-column flex-md-row align-items-start text-center text-md-start pt-4 px-2 mx-0 mt-5"
        >
          <div className="col-md-1"></div>
          <div className="col-md-6 col-lg-5 px-lg-0 mb-0 py-5 my-xl-5 text-xl-start">
            <h1 className="display-6 display-md-1 fw-bold lh-base">
              {/* Learn from <br /> certified and experienced tutors */}
              ისწავლე გამოცდილი მასწავლებლებისგან
            </h1>
            <p className="h5 fw-normal my-5 pb-2">
              დაუკავშირდი მასწავლებლებს და ციფრულად მართე სწავლის პროცესი
              ჩვენთან ერთად
            </p>
            {/* Get Started */}
            <a
              id="cta"
              href="#hero-btn-target"
              className="btn px-5 btn-lg text-white"
            >
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
