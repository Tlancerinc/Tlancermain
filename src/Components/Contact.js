import microsoft from "../images/MicrosoftLogo.webp";
import tecklink from "../images/techLink.webp";
import tbc from "../images/tbcBank.webp";
import bankOfGeorgia from "../images/bankOfGeorgia.webp";
const ContactUs = () => {
  return (
    <>
      <style>{`
        .tl-logo {
          width: 25%;
        }
        .partner {
          width: 75%;
        }

    `}</style>
      <section id="contact" className="px-0 mb-5 px-md-5 bg-white">
        <div id="contact-target" className="link-target"></div>
        <div className="container-fluid py-5 px-md-5 pb-3">
          <div className="col text-center">
            {/* Contact Us */}
            <h2 className="h1 fw-bold">პარტნიორები</h2>
          </div>
          <div className="text-center container-fluid my-5 px-4">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-3">
                <img
                  className="img-fluid tl-logo my-3"
                  src={tecklink}
                  alt="tecklink logo"
                  width={"512"}
                  height={"512"}
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid partner my-3"
                  src={tbc}
                  alt="tbc logo"
                  width={"500"}
                  height={"250"}
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid partner my-3"
                  src={bankOfGeorgia}
                  alt="bank of Georgia logo"
                  width={"415"}
                  height={"121"}
                />
              </div>
              <div className="col-lg-3">
                <img
                  className="img-fluid partner my-5"
                  src={microsoft}
                  alt="microsoft logo"
                  width={"512"}
                  height={"109"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
