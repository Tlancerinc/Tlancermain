import { useState } from "react";
import Modal from "./Modal";
import studentImg from "../images/student-img.png";

const Student = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  function studentHandler() {
    document.getElementById("student-signup-btn").style.display = "none";
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
        role: "Student",
      }),
    };

    try {
      setModalIsOpen(true);
      setIsLoading(true);
      const formResponse = await fetch(
        "https://formsubmit.co/ajax/tlancerinc@gmail.com",
        requestSettings
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
        Accept: "application/json",
      },
      body: JSON.stringify({
        parentName: `${parentFirstName.value}`,
        parentSurname: `${parentSurName.value}`,
        childName: `${childFirstName.value}`,
        childSurName: `${childSurName.value}`,
        parentEmail: `${parentEmail.value}`,
        parentPhone: `${parentPhone.value}`,
        role: "Parent",
      }),
    };
    //
    try {
      setModalIsOpen(true);
      setIsLoading(true);
      const formResponse = await fetch(
        "https://formsubmit.co/ajax/tlancerinc@gmail.com",
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


            .content-tabs {
              flex-grow : 1;
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
      <section id="student" className="px-0 pb-md-5 bg-white">
        <div id="student-target" className="link-target"></div>

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

          <div className="container d-flex flex-column-reverse flex-lg-row-reverse mx-auto text-center text-lg-start">
            <div className="col-lg-6 px-0 ps-lg-3 my-auto">
              {/* Register and join other students */}
              <h2 className={`fw-bold h1`}>დარეგისტრირდი როგორც სტუდენტი</h2>
              <p id="hero-btn-target" className="body-text fs-4 text-dark my-3">
                {/* Join thousands of other students on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love. */}
                ჩვენ გიმარტივებთ მასწავლებლების პოვნისა და მათთან დაკავშირების
                საშუალებას სრულიად უფასოდ
              </p>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start mt-lg-5">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-red">
                  {/* AI-powered matching */}
                  ონლაინ ინტერაქციები
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-green">
                  {/* 100% free matching */}
                  გამოცდილი მასწავლებლები
                </div>
              </div>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-blue">
                  {/* NFT Certtificatons */}
                  ურისკო გადახდები
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2 bubble bubble-yellow">
                  {/* Offline interactions */}
                  დავალებების მენეჯმენტი
                </div>
              </div>
              <button
                onClick={studentHandler}
                id="student-signup-btn"
                className="mt-5 px-4 btn btn-lg text-nowrap"
                aria-label="Toggle tutor sign-up form"
              >
                {/* Sign Up Today */}
                რეგისტრაცია
              </button>
              <div className="forms-container col col-lg-7 d-flex flex-column align-items-center">
                <div
                  className={
                    toggleState === 0
                      ? "bloc-tabs-hide"
                      : "bloc-tabs mt-5 w-100"
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
                    სტუდენტი
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
                    მშობელი
                  </button>
                </div>
                <div className="content-tabs w-100">
                  {/* Student Form */}
                  <form
                    id="student-form"
                    className={
                      toggleState === 1
                        ? "flex-column content active-content"
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
                      placeholder="სახელი"
                      name="name"
                      required
                    />
                    <input
                      id="last-name-student"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder="გვარი"
                      name="surname"
                      required
                    />
                    <input
                      id="email-student"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"email"}
                      placeholder="ელ-ფოსტა"
                      name="email"
                      required
                    />
                    <input
                      id="phone-student"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"phone"}
                      placeholder="მობილური"
                      name="phone"
                      required
                    />

                    <button
                      type="submit"
                      className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100 s-input"
                    >
                      გაგზავნა
                    </button>
                    {/* <button
                    type="reset"
                    className="tutor-btn mt-3 px-2 btn btn-lg"
                  >
                    Reset
                  </button> */}
                  </form>

                  {/* Parent Form */}
                  <form
                    id="parent-form"
                    className={
                      toggleState === 2
                        ? "flex-column ms-auto content active-content"
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
                      placeholder="მშობლის სახელი"
                      name="name"
                      required
                    />
                    <input
                      id="last-name-parent"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder="მშობლის გვარი"
                      name="surname"
                      required
                    />
                    <input
                      id="child-first-name"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder="ბავშვის სახელი"
                      name="child-first-name"
                      required
                    />
                    <input
                      id="child-surname"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type="text"
                      placeholder="ბავშვის გვარი"
                      name="child-surname"
                      required
                    />
                    <input
                      id="email-parent"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"email"}
                      placeholder="მშობლის ელ-ფოსტა"
                      name="parent-email"
                      required
                    />
                    <input
                      id="phone-parent"
                      className="my-3 fs-4 p-1 ps-2 rounded s-input"
                      type={"phone"}
                      placeholder="მობილური"
                      name="parent-phone"
                      required
                    />

                    <button
                      type="submit"
                      className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100 s-input"
                    >
                      გაგზავნა
                    </button>
                    {/* <button type="reset" className="tutor-btn mt-3 px-2 btn btn-lg">
                  Reset
                </button> */}
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
