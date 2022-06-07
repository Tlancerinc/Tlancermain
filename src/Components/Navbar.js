const NavbarMain = () => {
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
              box-shadow: 0px 0px 30px rgba(0,0,0,0.3);  
              background: rgba(255,255,255,1);                 
              z-index: 1000;
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
      <div className="nav navbar navbar-custom fixed-top navbar-expand-md">
        <div className="container-fluid gx-0 align-items-lg-end px-2 py-1 px-md-4 pt-md-3 pb-md-2">
          <a href="/" className="navbar-brand d-flex me-0 logo fw-bold fs-1">
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
            <ul className="nav navbar-nav w-100 justify-content-end">
              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                  href="#hero-target"
                >
                  Home
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                  href="#student-target"
                >
                  Student
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                  href="#tutor-target"
                >
                  Tutor
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                  href="#mission-target"
                >
                  Our Mission
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                  href="#about-target"
                >
                  About Us
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                  href="#testimonials-target"
                >
                  Testimonials
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 fs-xl-1 text-nowrap"
                  href="#contact-target"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
