import { useState } from "react";
import Modal from "./Modal";
import tutorImg from "../images/instructor.png";

const Tutor = (props) => {
  const [tModalIsOpen, setTModalIsOpen] = useState(false);
  const [tutorIsLoading, setTutorIsLoading] = useState(false);
  const [formToggle, setFormToggle] = useState(false);

  function tutorHandler() {
    setFormToggle(true);
  }

  function disableTutorForm() {
    const inputs = document.querySelectorAll(".t-input");
    inputs.forEach((e) => {
      e.disabled = true;
    });
  }

  const tutorFormHandler = async (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name-tutor");
    const surName = document.getElementById("last-name-tutor");
    const email = document.getElementById("email-tutor");
    const phone = document.getElementById("phone-tutor");
    const subjectTutor = document.getElementById("subject-tutor");
    const requestSettings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `${firstName.value}`,
        surname: `${surName.value}`,
        email: `${email.value}`,
        phone: `${phone.value}`,
        subject: `${subjectTutor.value}`,
        role: "Tutor",
      }),
    };
    try {
      setTModalIsOpen(true);
      setTutorIsLoading(true);
      const formResponse = await fetch(
        "https://formsubmit.co/ajax/tlancerinc@gmail.com",
        requestSettings
      );
      if (!formResponse.ok) {
        throw new Error("Error during form submission");
      } else {
        const data = await formResponse.json();
        setTutorIsLoading(false);
        console.log("***fetch ran tutor " + data);
      }
    } catch (e) {
      console.log("response error: " + e);
    }
  };
  return (
    <>
      <style type="text/css">{`
             
            #tutor-form {
              position: relative;
              transition: .3s;
            }
            #tutor-signup-btn {
              letter-spacing: .8px;
              border: none;
              outline: none;
            }

            .form-cont {
              overflow: hidden;
            }
           
            .bloc-tabs-hide { 
              display: none;
            }

            .fade-in {
              background: transparent;
              animation: fade-in .65s ease-in-out forwards;              
            }

            @keyframes fade-in {
              0% {
                opacity: 0;
                filter: blur(2px);
                transform: scale(1.3) translateY(50px);
              }
              
              75% {
                transform: translateY(0);
              }
              100% {
                opacity: 1;
                filter: blur(0px);
                transform: scale(1);
              }
            }
          
            .tutor-btn {
                background: var(--main-green);
                letter-spacing: .8px;
                border: none;
            }          
            
            
            `}</style>
      <Modal
        isLoading={tutorIsLoading}
        modalIsOpen={tModalIsOpen}
        setModalIsOpen={() => {
          setTModalIsOpen();
        }}
        disableForm={() => {
          disableTutorForm();
        }}
      />
      <section id="tutor" className="px-0 p-md-5 bg-white">
        <div id="tutor-target" className="link-target"></div>
        <div className="container-fluid">
          <div className="container d-flex flex-column flex-lg-row mx-auto text-center text-lg-start form-cont">
            <div className="col-lg-6 px-0 order-2 order-lg-1 ps-lg-3 my-auto">
              {/* Become a Tutor Today */}
              <h2 className={`fw-bold h1`}>
                დარეგისტრირდი როგორც მასწავლებელი
              </h2>
              <p className="body-text fs-4 text-dark my-3">
                {/* Join thousands of other instructors on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love. */}
                შექმენით კურსები და დაიწყეთ მოსწავლეების მიღება ციფრულად
              </p>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble  bubble-red">
                  {/* Group-conversations */}
                  კურსების მენეჯმენტი
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble  bubble-green">
                  {/* Tlancer-powered messenger */}
                  კალენდარი
                </div>
              </div>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble  bubble-blue">
                  {/* Financial management tools */}
                  ფინანსური მენეჯერი
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble  bubble-yellow">
                  {/* Task management tools */}
                  ვირტუალური შეხვედრები
                </div>
              </div>
              <button
                onClick={tutorHandler}
                id="tutor-signup-btn"
                className={
                  formToggle === false
                    ? "mt-5 px-4 btn btn-lg text-nowrap fade-in"
                    : "mt-5 px-4 btn btn-lg text-nowrap bloc-tabs-hide"
                }
                aria-label="Toggle tutor sign-up form"
              >
                რეგისტრაცია
                {/* Sign Up Today */}
              </button>
              <div className="w-100">
                <form
                  id="tutor-form"
                  className={
                    formToggle
                      ? "d-flex flex-column w-50 fade-in"
                      : "bloc-tabs-hide"
                  }
                  onSubmit={tutorFormHandler}
                  encType="text/plain"
                >
                  <input
                    id="first-name-tutor"
                    className="my-3 fs-4 p-1 ps-2 rounded t-input"
                    type={"text"}
                    placeholder="სახელი"
                    name="first-name"
                    required
                  />
                  <input
                    id="last-name-tutor"
                    className="my-3 fs-4 p-1 ps-2 rounded t-input"
                    type={"text"}
                    placeholder="გვარი"
                    name="sur-name"
                    required
                  />
                  <input
                    id="email-tutor"
                    className="my-3 fs-4 p-1 ps-2 rounded t-input"
                    type={"email"}
                    placeholder="ელ-ფოსტა"
                    name="e-mail"
                    required
                  />
                  <input
                    id="phone-tutor"
                    className="my-3 fs-4 p-1 ps-2 rounded t-input"
                    type={"phone"}
                    placeholder="მობილური"
                    name="phone-number"
                    required
                  />
                  <input
                    id="subject-tutor"
                    className="my-3 fs-4 p-1 ps-2 rounded t-input"
                    type={"text"}
                    placeholder="საგანი"
                    name="subject-tutor"
                    required
                  />
                  <button
                    type="submit"
                    className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100 t-input"
                  >
                    გაგზავნა
                  </button>
                  {/* <button
                  type="reset"
                  className="tutor-btn mt-2 px-3 btn btn-primary"
                >
                  Reset
                </button> */}
                </form>
              </div>
            </div>
            <div className="col-lg-6 text-start mt-0 order-1 order-lg-2">
              <img
                className="img-fluid small-img"
                alt="woman holding folders"
                width="1081"
                height="1104"
                src={tutorImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutor;
