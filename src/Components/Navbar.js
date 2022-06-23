import { useEffect } from "react";
import eng from "../images/uk.png";
import ge from "../images/ge.png";
const NavbarMain = (props) => {
  useEffect(() => {
    const menuLinks = document.querySelectorAll("nav .nav-link");
    const navBarNav = document.getElementById("responsive-navbar-nav");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const menuLinkHandler = () => {
      console.log("button clicked");
      navBarNav.classList.remove("show");
      hamburgerBtn.classList.add("collapsed");
      hamburgerBtn.ariaExpanded = false;
      console.log("linkHandler finished");
    };
    // document.body.addEventListener("click", menuLinkHandler);

    for (let i = 0; i < menuLinks.length; i++) {
      console.log("added event listener");
      menuLinks[i].addEventListener("click", menuLinkHandler);
    }
  }, []);

  return (
    <>
      <style type="text/css">
        {`        
            

            nav {
              font-family: 'Ubuntu', sans-serif;
            }


            li {
              align-items: left;
            }

            .link-target {
              position: relative;
              bottom: 7rem;
            }

            {/* ######## START LANGUAGE TOGGLER ########*/}

             #language-label {
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
             } 
             
             #language-label:hover {

             }             
             
             #language-label img {
              max-width: 2.5rem;
              max-height: 1.5rem;              
             }  
             .active-flag {
              opacity: 1;
              transform: scale(1.1);              
              box-shadow: 0px 0px 10px var(--main-green-hover);
             }
             .inactive-flag {
              opacity: .2;
              transform: scale(.9);
             }

             @keyframes toggle-animation {
              0%{
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
             }

             #language-toggle {
              margin: 0 .5rem;
              border: 2px solid var(--main-green);
              background: var(--main-green);
              padding: 0 1rem;
              font-weight: bold;
              border-radius: 8px;              
             }

             #language-toggle:hover {
              background: var(--main-green-hover);
             }

             {/* ######## END LANGUAGE TOGGLER ########*/}



            {/* ######## START LOGO ########*/}
            .logo {
               color: var(--main-green);              
               text-decoration: none;
               cursor:pointer;
               outline: none;
            }
            .logo:hover, .logo:focus {
                color: var(--main-green-hover);
            }
            {/* ######## END LOGO ########*/}




            {/* ######## START HAMBURGER MENU ########*/}
            .navbar-toggler-icon {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(14, 205, 136)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
            }

            .navbar-toggler {                 
             color: var(--main-green);  
             border: 2px solid transparent;            
            }

            .navbar-toggler:focus {
              border-color: var(--main-green-hover); 
              outline: none;
              box-shadow: var(--main-green-hover)             
            }

            
            
            {/* ######## END HAMBURGER MENU ######## */}


            .nav-item {              
              margin: 0;
              margin-bottom: .75rem;
              align-items: start;        
            }
            
            {/* ######## START NAVLINKS ########*/}
            .nav-link {
                font-family: 'Ubuntu', sans-serif; 
                font-weight: 400;
                color: #000;               
                transition: .3s ease-out;
                cursor: pointer;
                padding-bottom: 0;
            }
            .nav-link-hover:hover, .nav-link:focus {
              color: var(--main-green-hover);  
            }          
            .nav-link-hover::after {
              content: "";
              width: 0px;
              height: 3px;
              display: block;
              background: var(--main-green-hover); 
              transition: .3s ease-out;             
            }    
            .nav-link-hover:hover::after {
              width: 100%;
            }
            {/* ######## END NAVLINKS ########*/}



            .navbar-custom {
              border-bottom: 3px solid var(--main-green);
              box-shadow: 0px 0px 30px rgba(0,0,0,0.2);  
              background: rgba(255,255,255,1);                 
              z-index: 1000;
              overflow: hidden;
            }   
                     
            #responsive-navbar-nav {
              transition: .3s all ease-in-out;
            }
            
            {/* ######## START MEDIA QUERIES ########*/}
            
           
            @media (min-width: 1024px) {
              .nav-link {
                font-size: 1.5rem;
              }  
            }
          
            @media (max-width: 768px) {                            
              
              .navbar-collapse {
                padding: 1rem;
              }             
              
            }          
           
            {/* ######## END MEDIA QUERIES ########*/}

            
            

            `}
      </style>
      <header>
        <nav className="nav navbar navbar-custom fixed-top navbar-expand-md py-1">
          <div className="container-fluid gx-0 px-2 pt-1 pb-0 px-md-4">
            <a href="/" className="me-0 logo fw-bold fs-1 py-0">
              Tlancer
            </a>

            <button
              id="hamburger-btn"
              aria-controls="responsive-navbar-nav"
              className="navbar-toggler collapsed p-1 my-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#responsive-navbar-nav"
              data-bs-auto-close="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse w-100"
              id="responsive-navbar-nav"
            >
              <ul className="nav navbar-nav w-100 justify-content-end mb-5 mb-md-0">
                <li className="nav-item mb-md-0">
                  {/* HOME */}
                  <a
                    className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                    href="#home"
                  >
                    {props.lang ? "მთავარი" : "Home"}
                  </a>
                </li>

                <li className="nav-item mb-md-0">
                  {/* Student */}
                  <a
                    className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                    href="#student"
                  >
                    {props.lang ? "სტუდენტი" : "Student"}
                  </a>
                </li>

                <li className="nav-item mb-md-0">
                  {/* Tutor */}
                  <a
                    className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                    href="#tutor"
                  >
                    {props.lang ? "მასწავლებელი" : "Tutor"}
                  </a>
                </li>

                <li className="nav-item mb-md-0">
                  {/* Our Mission */}
                  <a
                    className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                    href="#mission"
                  >
                    {props.lang ? "მისია" : "Mission"}
                  </a>
                </li>

                <li className="nav-item mb-md-0">
                  {/* About Us */}
                  <a
                    className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                    href="#about"
                  >
                    {props.lang ? "რატომ ჩვენ?" : "Why us?"}
                  </a>
                </li>

                <li className="nav-item mb-md-0">
                  {/* Testimonials */}
                  <a
                    className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                    href="#testimonials"
                  >
                    {props.lang ? "შეფასება" : "Testimonials"}
                  </a>
                </li>

                <li className="nav-item mb-md-0">
                  {/* Contact Us */}
                  <a
                    className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 fs-xl-1 text-nowrap"
                    href="#contact"
                  >
                    {props.lang ? "პარტნიორები" : "Partners"}
                  </a>
                </li>
              </ul>
              <label id="language-label" className="ms-md-3">
                <img
                  className={props.lang ? "active-flag" : "inactive-flag"}
                  src={ge}
                  alt="georgian flag"
                  width={"120"}
                  height={"60"}
                />
                <button
                  id="language-toggle"
                  onClick={props.setLang}
                  type={"checkbox"}
                >
                  {props.lang ? "GE" : "EN"}
                </button>
                <img
                  className={props.lang ? "inactive-flag" : "active-flag"}
                  src={eng}
                  alt="english flag"
                  width={"120"}
                  height={"60"}
                />
              </label>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarMain;
