import React, { useEffect } from "react";
import "./About.module.css";
import Link from 'next/link';
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
              The App Ideas is a forefront Web and Mobile App Development
              Company, we propel business growth through innovative solutions.
              Crafting cutting-edge digital solutions with swift, engaging user
              interfaces and experiences is our forte.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our adept team of experienced Web and Mobile App Developers and
              designers prioritizes understanding and analyzing client
              requirements. This comprehensive approach ensures delivering the
              best solutions for your on demand business and services success at
              the most competitive prices. Following strict adherence to agile
              methodology, we meticulously divide projects into small
              milestones, achieving each with client approval and confirmation.
              This commitment defines our path to excellence in web and mobile
              app development and on-demand business solutions.
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
