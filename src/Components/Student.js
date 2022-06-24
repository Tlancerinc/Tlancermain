import { useState } from "react";
import Modal from "./Modal";
import studentImg from "../images/student-img.png";

const Student = (props) => {
  console.log("Student Rendered");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  function studentHandler() {
    setToggleState(1);
  }

  function disableStudentForm() {
    const inputs = document.querySelectorAll(".s-input");
    inputs.forEach((e) => {
      e.disabled = true;
    });
  }

  const formHandler = async (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name-student");
    const surName = document.getElementById("last-name-student");
    const email = document.getElementById("email-student");
    const phone = document.getElementById("phone-student");
    const data = {
      lang: `${props.lang ? "ge" : "en"}`,
      type: "Student",
      name: `${firstName.value} ${surName.value}`,
      email: `${email.value}`,
      mobile: `${phone.value}`,
    };
    const requestSettings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      setModalIsOpen(true);
      const formResponse = await fetch(
        "https://tlancer.herokuapp.com/api/registration/",
        requestSettings
      );
      if (!formResponse.ok) {
        throw new Error("Error during form submission");
      } else {
        const data = await formResponse.json();
        console.log("***fetch ran " + data);
      }
    } catch (e) {
      console.log("response error: " + e);
    }
  };

  const parentFormHandler = async (e) => {
    e.preventDefault();
    const parentFirstName = document.getElementById("first-name-parent");
    const parentSurName = document.getElementById("last-name-parent");
    const childFirstName = document.getElementById("child-first-name");
    const childSurName = document.getElementById("child-surname");
    const parentEmail = document.getElementById("email-parent");
    const parentPhone = document.getElementById("phone-parent");

    const parentRequestSettings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: `${props.lang ? "ge" : "en"}`,
        type: "Parent",
        name: `${parentFirstName.value} ${parentSurName.value}`,
        child_name: `${childFirstName.value} ${childSurName.value}`,
        email: `${parentEmail.value}`,
        mobile: `${parentPhone.value}`,
      }),
    };
    //
    try {
      setModalIsOpen(true);
      setIsLoading(true);
      const formResponse = await fetch(
        "https://tlancer.herokuapp.com/api/registration",
        parentRequestSettings
      );
      if (!formResponse.ok) {
        throw new Error("Error during form submission");
      } else {
        const data = await formResponse.json();
        setIsLoading(false);
        console.log("***fetch ran " + data);
      }
    } catch (e) {
      console.log("response error: " + e);
    }
  };

  return (
    <>
      <style type="text/css">{`
            
                       
            #student-green-deco {
              left: 3rem;
              bottom: -4rem;
            }
            
            #student-form, #parent-form {
              position: relative;  
            }

            #student-signup-btn {
                letter-spacing: .8px;
                border: none;
                outline: none;
            }

            .bloc-tabs { 
              display: flex;              
            }

            .bloc-tabs-hide { 
              display: none;
            }

            .tabs {
              padding: 8px 15px;
              text-align: center;
              width: 50%;
              background: white;
              cursor: pointer;
              border: 1px solid rgba(0, 0, 0, 0.274);              
              position: relative;
              outline: none;
              color: rgba(0, 0, 0, 0.474);
              border-radius: 30px;
              margin: 0 0.5rem;
            }
            
           

            .active-tabs  {
              background: var(--main-green);
              color: rgba(0, 0, 0, 0.74);
              font-weight: bold;
              box-shadow: none;
              border: 3px solid rgba(0, 0, 0, 0.274);
            }

            
            .content {
              background: white;
              padding: 20px 0;
              width: 100%;
              height: 100%;
              display: none;              
            }

            .active-content {
              display: flex;
            }

            `}</style>

      <Modal
        isLoading={isLoading}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={() => {
          setModalIsOpen();
        }}
        disableForm={() => {
          disableStudentForm();
        }}
      />
      <section id="student-section" className="px-0 pb-md-5 bg-white">
        <div id="student" className="link-target"></div>

        <div className="container-fluid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="163"
            viewBox="0 0 123 133"
            fill="none"
            id="student-green-deco"
            className="d-none d-lg-block position-absolute"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6841 26.6923C30.1218 -3.79913 71.2314 -6.52834 101.724 11.9104C127.121 27.2673 127.159 61.838 111.803 87.233C93.8942 116.85 62.0057 144.487 32.3872 126.577C-1.70247 105.963 -8.92843 60.7802 11.6841 26.6923Z"
              fill="url(#paint0_linear_2422_7587)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2422_7587"
                x1="7.66859"
                y1="33.3329"
                x2="107.788"
                y2="93.8736"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0ECD88" />
                <stop offset="1" stopColor="#23C68B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container d-flex flex-column-reverse flex-lg-row-reverse mx-auto text-center text-lg-start form-cont">
            <div className="col-lg-6 px-0 ps-lg-3 my-auto">
              <h2 className={`fw-bold h1`}>
                {props.lang
                  ? "დარეგისტრირდი როგორც სტუდენტი"
                  : "Register as a Student"}
              </h2>
              <p id="hero-btn-target" className="body-text fs-4 text-dark my-3">
                {props.lang
                  ? "ჩვენ გიმარტივებთ მასწავლებლების პოვნისა და მათთან დაკავშირების საშუალებას სრულიად უფასოდ"
                  : "We make it easy for you to find and connect with teachers for free"}
              </p>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start mt-lg-5">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-red">
                  {props.lang ? "ონლაინ ინტერაქციები" : "Online Interactions"}
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-green">
                  {props.lang
                    ? "გამოცდილი მასწავლებლები"
                    : "Experienced teachers"}
                </div>
              </div>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-blue">
                  {props.lang ? "ურისკო გადახდები" : "Risk payments"}
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-yellow">
                  {props.lang ? "დავალებების მენეჯმენტი" : "Manage assignments"}
                </div>
              </div>
              <button
                onClick={studentHandler}
                id="student-signup-btn"
                className={
                  toggleState === 0
                    ? "mt-5 px-4 btn btn-lg text-nowrap"
                    : "mt-5 px-4 btn btn-lg text-nowrap bloc-tabs-hide"
                }
                aria-label="Toggle tutor sign-up form"
              >
                {props.lang ? "რეგისტრაცია" : "Registration"}
              </button>
              <div className="col col-lg-7 d-flex flex-column align-items-center">
                <div
                  className={
                    toggleState === 0
                      ? "bloc-tabs-hide"
                      : "bloc-tabs mt-5 w-100 fade-in"
                  }
                >
                  <button
                    className={
                      toggleState === 1
                        ? "tabs active-tabs s-input"
                        : "tabs s-input"
                    }
                    onClick={() => {
                      toggleTab(1);
                    }}
                  >
                    {props.lang ? "სტუდენტი" : "Student"}
                  </button>
                  <button
                    className={
                      toggleState === 2
                        ? "tabs active-tabs s-input"
                        : "tabs s-input"
                    }
                    onClick={() => {
                      toggleTab(2);
                    }}
                  >
                    {props.lang ? "მშობელი" : "Parent"}
                  </button>
                </div>
                <div className="content-tabs w-100">
                  {/* Student Form */}
                  <form
                    id="student-form"
                    className={
                      toggleState === 1
                        ? "flex-column content active-content fade-in"
                        : "flex-column content"
                    }
                    onSubmit={formHandler}
                    encType="text/plain"
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                    />

                    <input
                      id="first-name-student"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder={props.lang ? "სახელი" : "First Name"}
                      name="name"
                      required
                    />
                    <input
                      id="last-name-student"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder={props.lang ? "გვარი" : "Last Name"}
                      name="surname"
                      required
                    />
                    <input
                      id="email-student"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"email"}
                      placeholder={props.lang ? "ელ-ფოსტა" : "E-mail"}
                      name="email"
                      required
                    />
                    <input
                      id="phone-student"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"phone"}
                      placeholder={props.lang ? "მობილური" : "Phone"}
                      name="phone"
                      required
                    />

                    <button
                      type="submit"
                      className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100 s-input"
                    >
                      {props.lang ? "გაგზავნა" : "Parent"}
                    </button>
                  </form>

                  {/* Parent Form */}
                  <form
                    id="parent-form"
                    className={
                      toggleState === 2
                        ? "flex-column ms-auto content active-content fade-in"
                        : "flex-column content"
                    }
                    onSubmit={parentFormHandler}
                    encType="text/plain"
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                    />

                    <input
                      id="first-name-parent"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder={
                        props.lang ? "მშობლის სახელი" : "Parent First Name"
                      }
                      name="name"
                      required
                    />
                    <input
                      id="last-name-parent"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder={
                        props.lang ? "მშობლის გვარი" : "Parent Last Name"
                      }
                      name="surname"
                      required
                    />
                    <input
                      id="child-first-name"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder={
                        props.lang ? "ბავშვის სახელი" : "Child's First Name"
                      }
                      name="child-first-name"
                      required
                    />
                    <input
                      id="child-surname"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder={
                        props.lang ? "ბავშვის გვარი" : "Child's Last Name"
                      }
                      name="child-surname"
                      required
                    />
                    <input
                      id="email-parent"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"email"}
                      placeholder={
                        props.lang ? "მშობლის ელ-ფოსტა" : "Parent E-mail"
                      }
                      name="parent-email"
                      required
                    />
                    <input
                      id="phone-parent"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"phone"}
                      placeholder={props.lang ? "მობილური" : "Parent Phone"}
                      name="parent-phone"
                      required
                    />

                    <button
                      type="submit"
                      className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100 s-input"
                    >
                      {props.lang ? "გაგზავნა" : "Send"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-start mt-0">
              <img
                className="img-fluid small-img"
                alt="woman holding folders holding pencil"
                width="958"
                height="1104"
                src={studentImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
