import React, { useEffect, useState } from "react";
import ContactUs from "../../components/ContactUs";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import GetAQuoteModal from "../../components/GetAQuoteModal";

const OurProcess = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="Our Web and Mobile App Development Process" />
      <Header setOpenModal={setModalOpen} />
      <section className="process_banner">
        <div className="banner_contact text-center">
          <h2>Our 6 Steps Process</h2>
          <Image
            width={1045}
            height={204}
            src={require("../../public/assets/images/COMPANY/process/process-banner.png")}
            alt=""
            className="img-fluid"
          />
        </div>
      </section>
      <section className="process_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="road-map-main">
                <div className="road-map-wrapper road-map_one">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image
                        width={90}
                        height={90}
                        src={require("../../public/assets/images/COMPANY/process/REQUIREMENTS.gif")}
                        alt="requirement"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div className="road-map-card">
                    <h4 data-aos="fade-left" className="card-head">
                      REQUIREMENTS GATHERING &amp; ANALYSIS
                    </h4>
                    <p data-aos="fade-left" className="card-text">
                      Our goal is listening to and understanding customers'
                      needs. We start by collecting and analyzing all necessary
                      criteria for a full solution. This holistic approach helps
                      us grasp the difficulties and provide solutions that match
                      our customers' expectations.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_two">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image
                        width={90}
                        height={90}
                        src={require("../../public/assets/images/COMPANY/process/INITIAL.gif")}
                        alt="meeting"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div className="road-map-card">
                    <h4 data-aos="fade-right" className="card-head">
                      INITIAL MEETINGS, QUESTIONS &amp; ANSWERS SESSION
                    </h4>
                    <p data-aos="fade-right" className="card-text">
                      After gathering demands, we brainstorm client solutions.
                      We teach, ask appropriate questions, and promote teamwork.
                      This collaborative approach lets customers choose software
                      product structures that match their needs.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_three">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image
                        width={90}
                        height={90}
                        src={require("../../public/assets/images/COMPANY/process/PROJECT_ESTIMATION.gif")}
                        alt="project-praposal"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div className="road-map-card">
                    <h4 data-aos="fade-left" className="card-head">
                      PROJECT ESTIMATION &amp; PROPOSAL MAKING
                    </h4>
                    <p data-aos="fade-left" className="card-text">
                      After understanding the project's duration, cost, and
                      financial requirements, we thoroughly assess its financial
                      and temporal features. A rigorous research is needed to
                      anticipate resources and schedules. We carefully create a
                      proposal utilizing this information. The timeline,
                      resource allocation, costs, and construction duration are
                      specified in this proposal. We provide detailed proposals
                      to let clients choose project scope and complexity.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_four">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image
                        width={90}
                        height={90}
                        src={require("../../public/assets/images/COMPANY/process/RESOURCE_TEAM.gif")}
                        alt="settings"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div className="road-map-card">
                    <h4 data-aos="fade-right" className="card-head">
                      RESOURCE &amp; TEAM ALLOCATION, PROJECT SETUP
                    </h4>
                    <p data-aos="fade-right" className="card-text">
                      A precise resource allocation and collaboration plan is
                      created after customer approval. This phase is crucial for
                      workflow efficiency. The project begins with a
                      professional project manager. Project managers guide and
                      provide feedback. A collaborative strategy with effective
                      communication and strategic management promotes project
                      customer satisfaction. We value openness and client
                      engagement, and our systematic method encourages
                      cooperation and rigorous execution of each phase for
                      optimum results.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_five">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image
                        width={90}
                        height={90}
                        src={require("../../public/assets/images/COMPANY/process/DAILY_WEEKLY.gif")}
                        alt="update"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div className="road-map-card">
                    <h4 data-aos="fade-left" className="card-head">
                      DAILY/WEEKLY UPDATES &amp; IMPROVEMENTS
                    </h4>
                    <p data-aos="fade-left" className="card-text">
                      As the project progresses, we notify you daily, weekly, or
                      monthly. This systematic method promotes openness and
                      enables a precise strategy to improve the project. Keeping
                      you updated throughout the process shows our attention to
                      project success and surpassing expectations.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_six">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image
                        width={90}
                        height={90}
                        src={require("../../public/assets/images/COMPANY/process/PROJECT_HANDOVER.gif")}
                        alt="support"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div className="road-map-card">
                    <h4 data-aos="fade-right" className="card-head">
                      PROJECT HANDOVER, DEPLOYMENT &amp; SUPPORT
                    </h4>
                    <p data-aos="fade-right" className="card-text">
                      We provide customers the final software after development.
                      We provide significant product implementation help after
                      creation. Our focus on a fully functional and
                      well-supported solution reflects our dedication to
                      customer satisfaction and software success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <ContactUs question="Would you like to know more?" />
      {/* Contact Section End */}
      <Whatsapp />
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />

      <Footer />
    </>
  );
};

export default OurProcess;
