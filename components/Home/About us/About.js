import React, { useEffect } from "react";
import "./About.module.css";
import Link from "next/link";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div data-aos="fade-right" className="col-lg-6 col-md-12">
            <div className="about-heading">
              <h2>About us</h2>
            </div>
            <p className="about-text">WEB AND MOBILE APP DEVELOPMENT COMPANY</p>
            <p style={{ textAlign: "justify" }}>
              The App Ideas, a leading Web and Mobile App Development Company,
              helps businesses thrive with unique and engaging solutions. Our
              strategy is to quickly create cutting-edge digital solutions with
              engaging user interfaces and seamless user experiences. We have
              competent Web and Mobile App Developers and Designers that
              understand and evaluate consumer needs. Agile online and mobile
              app development shows our customer-centricity. We manage
              complexity using iterative and collaborative project management.
              We set achievable goals and create a customer-satisfying approach.
              This method encourages transparency and happiness by obtaining
              customer agreement and affirmation throughout. We recommend
              user-friendly Web and Mobile app development for a pleasant
              experience. Our client-centric approach recognizes that every
              organization is unique and requires customized solutions.
              Technological expertise, innovation, and customer service make us
              competitive. The App Ideas is a trusted partner helping
              organizations prosper by improving user experience, streamlining
              processes, and creating cost-effective digital solutions that
              reach the target audience.
            </p>
            <Link
              href="/about-us"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="find_more_btn">Find out More</div>
            </Link>
          </div>
          <div data-aos="fade-left" className="col-lg-6 col-md-12">
            <div className="About-left-heading">
              <h3>Our Achievements</h3>
            </div>

            <section
              className="Portfolio_section_wrapper"
              style={{ paddingTop: "50px" }}
            >
              <div className="achievements__section">
                <div className="achievements_box">
                  <p>Our Team</p>

                  <h4>
                    <CountUp start={1} end={50} duration={3} />+
                  </h4>
                </div>
                <div className="achievements_box achievements_box_top">
                  <p>Completed Projects</p>
                  <h4>
                    <CountUp start={1} end={350} duration={3} />+
                  </h4>
                </div>
                <div className="achievements_box">
                  <p>Mobile Apps</p>
                  <h4>
                    <CountUp start={1} end={150} duration={3} />+
                  </h4>
                </div>
                <div className="achievements_box achievements_box_top">
                  <p>Worked With Clients</p>
                  <h4>
                    {" "}
                    <CountUp start={1} end={200} duration={3} /> +
                  </h4>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
