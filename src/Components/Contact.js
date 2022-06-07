import contactImage from "../images/contact-img.webp";
const ContactUs = () => {
  return (
    <>
      <style>{`
        
        .map {
          border: 2px solid var(--main-green);
          border-radius: 16px;
        }

    `}</style>
      <section id="contact" className="px-0 mb-5 px-md-5 bg-white">
        <div id="contact-target" className="link-target"></div>
        <div className="container-fluid py-5 px-md-5 pb-3">
          <div className="col text-center">
            <h2 className="h1 fw-bold">Contact Us</h2>
            <p className="fs-4 lh-lg py-4 px-1 px-md-2 mb-4 text-lg-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
              nullam vivamus massa orci eros, adipiscing ut velit. Quis
              scelerisque sit duis ut eget ornare. Id sed porttitor est odio
              quis in egestas. Dignissim nec id amet blandit semper.
            </p>
          </div>

          <div className="text-center container-fluid my-5 px-4">
            <img
              src={contactImage}
              alt="map location"
              width="1474"
              height="539"
              className="img-fluid map"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
