const Testimonies = (props) => {
  console.log("Testimonials rendered");
  return (
    <>
      <style>{`
    .red-quote {
        font-size: 2rem;
        color: #B00000;
    }

    #card1 {
      box-shadow: 0px 0px 30px 5px rgba(253, 78, 93,0.2);
      transition: .4s all ease-in-out;
    }
    #card1:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 0px 3px rgba(253, 78, 93,1);
    }

    #card2 {
      box-shadow: 0px 0px 30px 5px rgba(14, 205, 136, 0.2);
      transition: .4s all ease-in-out;
    }
    #card2:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 0px 3px rgba(14, 205, 136, 1);
    }

    #card3 {
      box-shadow: 0px 0px 30px 5px rgba(49, 126, 246, 0.2);
      transition: .4s all ease-in-out;
    }
    #card3:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 0px 3px rgba(49, 126, 246, 1);
    }

    #card4 {
      box-shadow: 0px 0px 30px 5px rgba(255, 215, 0, 0.2);
      transition: .4s all ease-in-out;
    }
    #card4:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 0px 3px rgba(255, 215, 0, 1);
    }


    
    .blue-quote {
        position: relative;
        top: 1rem;
        right: 1.25rem;
        color: #2EC5CE;
        opacity: .5;
    }
   
    .card-title.h5 {
      width: 60%;
    }

    @media (min-width: 768px) {
      .red-quote {
        font-size: 3rem;
      }
    }

    @media (min-width: 1024px) {
      .red-quote {
        font-size: 4rem;
    }

    
    
    }

    `}</style>
      <section
        id="testimonials-section"
        className="container-fluid bg-white p-md-5"
      >
        <div id="testimonials" className="link-target"></div>
        <div className="container p-md-5 bg-white">
          {/* ______ Heading Row */}
          <div className="row mb-5">
            <div className="col text-center col-md-10 mx-auto mb-5 d-flex align-items-center justify-content-evenly">
              <i className="fa-solid fa-quote-left red-quote"></i>
              {/* Testimonies from Our Customers */}
              <h2 className="h1 fw-bold">
                {props.lang
                  ? "მომხმარებელთა შეფასება"
                  : "Customer Testimonials"}
              </h2>
              <i className="fa-solid fa-quote-right red-quote"></i>
            </div>
          </div>
          {/* ______ Top Quote Row*/}
          <div className="row justify-content-evenly g-5">
            {/* ______ Card 1*/}
            <div className="col col-lg-4 my-5">
              <div id="card1" className="border-0 mx-1 py-5 ps-5 pe-4 card ">
                <i className="fa-solid fa-quote-left blue-quote mt-5"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    {props.lang
                      ? "სწრაფი, მოსახერხებელი და კომფორტული საშუალებაა ონლაინ კურსების შესასწავლად. თილანსერის სივრცე ძალიან დამეხმარა მარტივად შემესწავლა ქოფირაითინგი სულ რაღაც 3 თვეში."
                      : "A fast and convenient way to study online courses. The Tlancer space has helped me a lot to easily learn copying in just 3 months."}
                  </p>
                </div>
                <div className="fw-bold card-title h5">
                  {props.lang ? "ლუკა ბასილაძე" : "Luka Basiladze"}
                </div>
                <div className="text-secondary card-subtitle h6 mb-5">
                  {props.lang
                    ? "აღმასრულებელი დირექტორი, თექლინქი"
                    : "CEO, Theklink"}
                </div>
              </div>
            </div>
            {/* ______ Card 2*/}
            <div className="col col-lg-5 mt-lg-auto my-5">
              <div
                id="card2"
                className="border-0 mx-1 py-5 ps-5 pe-4 my-lg-3 card "
              >
                <i className="fa-solid fa-quote-left blue-quote"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    {props.lang
                      ? "თილანსერი დამეხმარა მასწავლებლის შერჩევაში და სტუდენტური მუშაობის გამარტივებაში. მარტივად ვიპოვე მათემატიკის მასწავლებელი და ახლა უკვე ციფრულად ვახერხებ საგაკვეთილო პროცესზე დასწრებას!"
                      : "Tlancer helped me select a teacher and simplify student work. I easily found a math teacher and now I can digitally attend the lessons!"}
                  </p>
                </div>
                <div className="fw-bold card-title h5">
                  {props.lang
                    ? "გიორგი ასლამაზიშვილი"
                    : "Giorgi Aslamazishvili"}
                </div>
                <div className="text-secondary card-subtitle h6">
                  {props.lang ? "სტუდენტი" : "Student"}
                </div>
              </div>
            </div>
          </div>

          {/* ______ Bottom Quote Row*/}
          <div className="row justify-content-evenly g-5 mt-0">
            {/* ______ Card 3*/}
            <div className="col col-lg-5 my-5 order-2 order-md-1">
              <div
                id="card3"
                className="border-0 mx-1 py-5 ps-5 pe-4 my-lg-3 card"
              >
                <i className="fa-solid fa-quote-left blue-quote"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    {props.lang
                      ? "მარტივად გავიარე რეგისტრაცია და დავიწყე ჯგუფების შექმნა. თილანსერთან ერთად მიმარტივდება სალექციო პროცესების მართვა"
                      : "I simply went through the registration and started creating groups. Learning processes are simplified with Tlancer."}
                  </p>
                </div>
                <div className="fw-bold card-title h5">
                  {props.lang ? "ელზა ფულაძე" : "Elza Fuladze"}
                </div>
                <div className="text-secondary card-subtitle h6">
                  {props.lang ? "ფიზიკის მასწავლებელი" : "Physics teacher"}
                </div>
              </div>
            </div>
            {/* ______ Card 4*/}
            <div className="col col-lg-4 order-1 order-md-2 my-5">
              <div id="card4" className="border-0 mx-1 py-5 ps-5 pe-4 card ">
                <i className="fa-solid fa-quote-left blue-quote mt-5"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    {props.lang
                      ? "თილანსერი მართლაც, რომ მიგნებაა ჩემთვის. ფუნქციონალი მეხმარება კალენდარით ვმართო თავისუფალი დრო და უპრობლემოდ ჩავატარო ჯგუფური მეცადინეობები. მადლობა გუნდს ამ ტექნოლოგიისთვის!"
                      : "Tlancer is really that finding for me. It's functionality helps me manage my free time with the calander and conduct group lessons without any problems. Thanks to the team for this technology!"}
                  </p>
                </div>
                <div className="fw-bold card-title h5">
                  {props.lang ? "ანზორ ქევხიშვილი" : "Anzor Kevkhishvili"}
                </div>
                <div className="text-secondary card-subtitle h6 mb-5">
                  {props.lang
                    ? "ლექტორი, პროგრამირება"
                    : "Lecturer, Programming"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonies;
