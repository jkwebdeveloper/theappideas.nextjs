import React, { useEffect, useState } from "react";

import ContactUs from "../../components/ContactUs";
import { Helmet } from "react-helmet";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import GetAQuoteModal from "../../components/GetAQuoteModal";
import background from "../../public/assets/images/COMPANY/aboutUs/life.png";
import missonbg from "../../public/assets/images/COMPANY/aboutUs/missin-banner.webp";
import skillbg from "../../public/assets/images/COMPANY/aboutUs/about-bg.png";
import ourprocessbg from "../../public/assets/images/COMPANY/aboutUs/about-bg.png";

const ABoutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="About Us | Company Overview | App Ides Infotech Pvt Ltd" />
      <Header setOpenModal={setModalOpen} />
      {/* Banner Section Start */}
      <section
        className="about_banner"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <h1>Company Overview</h1>
        <p>
          App Ideas, innovation leaders, creates mobile and internet
          applications for diverse needs. Leading web and &amp;{" "}
          <Link
            href="/mobile-app-development"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Mobile App Development
          </Link>{" "}
          we provide unique solutions to help your business succeed. Our digital
          goods include innovative interfaces and engaging user experiences. We
          provide unique solutions that surpass expectations and promote digital
          success in mobile app development, web development, web and graphic
          design, e-commerce platform development, Internet of Things
          application development, and video game production.
        </p>
      </section>
      {/* Banner Section End */}
      {/* About Video Section Start */}
      <section className="about_video">
        <div className="about_video_box">
          <span />
          <span />
          <span />
          <span />
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9tOqqOLoI2M"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>
      </section>
      {/* About Video Section End */}
      {/* Missin & Visin Section Start */}
      <section
        className="missin_section"
        style={{ backgroundImage: `url(${missonbg.src})` }}
      >
        <div className="container">
          <div className="missin_title">
            <h2>Our vision &amp; mission</h2>
          </div>
          <div className="row ">
            <div
              data-aos="fade-right"
              className="col-12 col-sm-12 col-md-6 card_bottom"
            >
              <div className="missin_card">
                <div className="missin_card_img">
                  <Image
                    src={require("../../public/assets/images/COMPANY/aboutUs/Our Vision.gif")}
                    alt="visson"
                    className="img-fluid"
                  />
                </div>
                <div className="missin_card_content">
                  <h2>Our Vision</h2>
                  <p>
                    We work together to develop innovative, comprehensive,
                    high-performing, and cost-effective solutions for businesses
                    in many industries. Our team leverages cutting-edge
                    technology, design and development skills, and strategic
                    decision-making to produce innovative, future-ready
                    solutions for our clients. Our solutions surpass
                    expectations, equipping organizations for long-term success
                    in their niches as we master the changing digital world.
                  </p>
                </div>
                <div className="card-border">
                  <span className="top" />
                  <span className="right" />
                  <span className="bottom" />
                  <span className="left" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-12 col-sm-12 col-md-6 card_bottom"
            >
              <div className="missin_card">
                <div className="missin_card_img">
                  <Image
                    src={require("../../public/assets/images/COMPANY/aboutUs/Our Mission.gif")}
                    alt="Our-Mission"
                    className="img-fluid"
                  />
                </div>
                <div className="missin_card_content">
                  <h2>Our Mission</h2>
                  <p>
                    Our designers, developers, and strategists want to provide
                    cutting-edge business solutions. We leverage cutting-edge
                    technology, talents, and knowledge to innovate. We provide
                    contemporary, effective solutions to help clients achieve
                    their business objectives owing to this proactive approach.
                    Our crew stays current on industry advancements to provide
                    consumers the best information. We solve immediate problems
                    and position businesses for long-term success in the
                    ever-changing technology and design environment via our
                    dedication.
                  </p>
                </div>
                <div className="card-border">
                  <span className="top" />
                  <span className="right" />
                  <span className="bottom" />
                  <span className="left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Missin & Visin Section End */}
      {/* Our Skill Section Start */}
      <section
        className="skill_section"
        style={{ backgroundImage: `url(${skillbg.src})` }}
      >
        <div className="missin_title mb-0">
          <h2>Our Skill</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="skill_box">
                <Image
                  src={require("../../public/assets/images/COMPANY/aboutUs/website-dev-icon-1.png")}
                  alt="website-dev-icon-1"
                  className="img-fluid"
                />
                <h6>Website Development</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="skill_box">
                <Image
                  src={require("../../public/assets/images/COMPANY/aboutUs/Ecommerce-dev-icon-2.png")}
                  alt="website-dev-icon-1"
                  className="img-fluid"
                />
                <h6>Ecommerce Development</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="skill_box">
                <Image
                  src={require("../../public/assets/images/COMPANY/aboutUs/mobile-dev.png")}
                  alt="mobile-dev"
                  className="img-fluid"
                />
                <h6>Mobile Development</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="skill_box">
                <Image
                  src={require("../../public/assets/images/COMPANY/aboutUs/IOT-Dev.png")}
                  alt="IOT-Dev"
                  className="img-fluid"
                />
                <h6>IOT Development</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="skill_box">
                <Image
                  src={require("../../public/assets/images/COMPANY/aboutUs/Game-Development.png")}
                  alt="Game-Development"
                  className="img-fluid"
                />
                <h6>Game Development</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="skill_box">
                <Image
                  src={require("../../public/assets/images/COMPANY/aboutUs/Digital-Marketing.png")}
                  alt="Digital-Marketing"
                  className="img-fluid"
                />
                <h6>Digital Marketing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Skill Section End */}
      {/* Achievement Section Start */}
      <section className="achievement_section">
        <div className="achievement_title">
          <h2>Our Achievements</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={7} duration={5} />+
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Years Of Establishment</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={50} duration={3} />+
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Our Team</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={200} duration={3} />+
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Our Happy Clients</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={120} duration={3} />+
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Clients Testimonials</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={200} duration={3} /> +
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Websites Developed</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={150} duration={3} />+
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Mobile App Developed</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={60} duration={3} />+
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Ecommerce Stores Developed</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 margin_bottom">
              <div className="progress" data-percentage={100}>
                <span className="progress-left">
                  <span className="progress-bar" />
                </span>
                <span className="progress-right">
                  <span className="progress-bar" />
                </span>
                <div className="progress-value">
                  <div>
                    <span>
                      <CountUp start={1} end={12} duration={3} />+
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress__content">
                <h6>Games Developed</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievement Section End */}
      {/* Our Process Section Start */}
      <section
        className="our_process"
        style={{ backgroundImage: `url(${ourprocessbg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="process_box">
                <Image
                  src={require("../../public/assets/images/COMPANY/aboutUs/process.png")}
                  alt="process-svg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="join_rht process_rht">
                <h2>Our Process</h2>
                <p>
                  We meticulously develop, build, deploy, and evaluate solutions
                  for numerous areas. Develop informed solution choices with
                  time and effort. A disciplined design technique ensures
                  objectives are fulfilled. The last phase is a cautious
                  deployment to assure solution functionality. Our solutions are
                  extensively tested and strategically developed to meet firms'
                  present needs and ensure long-term industry success.
                </p>
                <Link
                  href="/our-process"
                  className="check_out_btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Check Out Our Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Process Section End */}
      {/* Join Us Section Start */}
      <section className="join_us_sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="join_lft">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="team_box">
                      <Image
                        src={require("../../public/assets/images/COMPANY/aboutUs/chirag.png")}
                        alt="chirag"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="team_box">
                      <Image
                        src={require("../../public/assets/images/COMPANY/aboutUs/Ankita.webp")}
                        alt="Ankita"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="team_box">
                      <Image
                        src={require("../../public/assets/images/COMPANY/aboutUs/Payal.jpg")}
                        alt="Payal"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="team_box">
                      <Image
                        src={require("../../public/assets/images/COMPANY/aboutUs/Mansi-Shah.jpg")}
                        alt="Mansi"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="join_rht">
                <h2>Join </h2>
                <p>
                  Web and app development by App Ideas is efficient for
                  businesses and startups. Our professional engineers, creative
                  designers, and imaginative thinkers produce cutting-edge
                  mobile and internet applications across domains. Starting a
                  tech career with App Ideas is sensible. Join our dynamic team
                  and innovate web and app development. Contact us.
                </p>
                <Link
                  href="/our-team"
                  className="join-team-btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Us Section End */}
      {/* Our Client Section Start */}
      <section
        className="client_section"
        style={{ backgroundImage: `url(${ourprocessbg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="client_title">
                <h2>Our Clients</h2>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 margin_bottom">
                  <div className="client_lft_box">
                    <Image
                      src={require("../../public/assets/images/COMPANY/aboutUs/bolt_new.png")}
                      alt="bolt_new"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 margin_bottom">
                  <div className="client_lft_box">
                    <Image
                      src={require("../../public/assets/images/COMPANY/aboutUs/footnote_new.png")}
                      alt="footnote_new"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 margin_bottom">
                  <div className="client_lft_box">
                    <Image
                      src={require("../../public/assets/images/COMPANY/aboutUs/mindweel_new.png")}
                      alt="mindweel_new"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 margin_bottom">
                  <div className="client_lft_box">
                    <Image
                      src={require("../../public/assets/images/COMPANY/aboutUs/bravura_new.webp")}
                      alt="bravura_new"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 margin_bottom">
                  <div className="client_lft_box">
                    <Image
                      src={require("../../public/assets/images/COMPANY/aboutUs/chef_club_new1.png")}
                      alt="chef_club_new1"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 margin_bottom">
                  <div className="client_lft_box">
                    <Image
                      src={require("../../public/assets/images/COMPANY/aboutUs/snagpay_new.png")}
                      alt="snagpay_new"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="join_rht process_rht">
                <h2>Work With Us</h2>
                <p>
                  App Ideas is a prominent internet, mobile, and e-commerce app
                  developer. Our talented engineers and designers build
                  affordable, high-quality software. Our development approach
                  begins with a thorough client analysis. We divide projects
                  into manageable chunks and involve clients using agile
                  approaches. Iterative development assures customer approval
                  and on-time completion. Our bespoke software solutions
                  work—see our customers and testimonials.
                </p>
                <Link href="/contact-us" className="check_out_btn">
                  Start a PRoject
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Client Section End */}
      {/* Contact Section Start */}
      <ContactUs question="Would you like to execute any project?" />
      {/* Contact Section End */}
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer />
    </>
  );
};

export default ABoutUs;
