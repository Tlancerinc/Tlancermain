const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <style type="text/css">
        {`
        .fa-brands {
          transition: .3s ease-out all;  
          cursor: pointer;        
          color: rgba(255,255,255,1);
        }
        .fa-brands:hover {
          transform: scale(1.5);                    
          color: rgba(255,255,255,1);
        }
        .foot-link {
          color: rgba(255,255,255,1);
        } 
        .foot-link:visited {
          color: rgba(255,255,255,.7);
        }
        `}
      </style>
      <footer
        className="container-fluid px-3 foot py-5 p-lg-5 position-relative text-white"
        style={{
          background: "#00832d",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div className="row">
          <div className="row mt-3">
            <div className="col-1"></div>

            <div className="col-10">
              <div className="col ms-0 ps-0 border-bottom border-light">
                <h2 className="fw-bold display-5 text-white">თილანსერი</h2>
                <p className="h6 lh-base fw-normal">საგანმანათლებლო სივრცე</p>
              </div>
              {/* _____ Social Icon Row  */}
              <div className="row pt-4 align-items-center mb-0 mt-2">
                <div className="h6 col-10 px-0 col-lg-5 mx-auto mx-lg-0 text-center text-lg-start fw-light mb-4 mb-lg-0">
                  © {year} თილანსერი ყველა უფლება დაცულია
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                  <div className="row social-icons text-end my-auto">
                    <div className="col">
                      <a
                        target={"_blank"}
                        rel={"noreferrer"}
                        className="foot-link"
                        href="https://twitter.com/"
                      >
                        <i className="fa-brands fa-twitter h2"></i>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        target={"_blank"}
                        rel={"noreferrer"}
                        className="foot-link"
                        href="https://www.linkedin.com/company/tlancer/"
                      >
                        <i className="fa-brands fa-linkedin h2"></i>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        target={"_blank"}
                        rel={"noreferrer"}
                        className="foot-link"
                        href="https://www.facebook.com/tlancer.ge"
                      >
                        <i className="fa-brands fa-facebook h2"></i>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        target={"_blank"}
                        rel={"noreferrer"}
                        className="foot-link"
                        href="https://github.com/Tlancerinc"
                      >
                        <i className="fa-brands fa-github h2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
