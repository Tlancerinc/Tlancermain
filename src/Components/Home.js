import { useEffect, useState } from "react";
import NavbarMain from "./Navbar";
import Hero from "./Hero";
import Student from "./Student";
import Tutor from "./Tutor";
import Mission from "./Mission";
import About from "./AboutUs";
import Testimonies from "./Testimonies";
import ContactUs from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const [language, setLanguage] = useState(true);

  const toggleLanguageHandler = () => {
    console.log("beforlanguage: " + language);
    setLanguage(!language);
    console.log("afterlanguage: " + language);
  };
  console.log("home screen rendered");
  // const studentFormRef = useRef();
  // const heroRef = useRef();
  // const [studentFormRefIsVisible, setStudentFormRefIsVisible] = useState();
  // const [heroRefIsVisible, setHeroRefIsVisible] = useState();

  useEffect(() => {
    // const tutorObserver = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setTutorRefIsVisible(entry.isIntersecting);
    // });
    // tutorObserver.observe(tutorRef.current);
    // const studentFormObserver = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setStudentFormRefIsVisible(entry.isIntersecting);
    // });
    // studentFormObserver.observe(studentFormRef.current);
    // const heroObserver = new IntersectionObserver((entries) => {
    //   // const entry = entries[0];
    //   entries.forEach((entry) => {
    //     setHeroRefIsVisible(entry.isIntersecting);
    //   });
    // });
    // heroObserver.observe(heroRef.current);
  }, []);

  return (
    <>
      <NavbarMain lang={language} setLang={() => toggleLanguageHandler()} />

      <Hero lang={language} />
      <Student lang={language} />
      <Tutor lang={language} />
      <Mission lang={language} />
      <About lang={language} />
      <Testimonies lang={language} />
      <ContactUs lang={language} />
      <Footer lang={language} />
    </>
  );
};

export default Home;
