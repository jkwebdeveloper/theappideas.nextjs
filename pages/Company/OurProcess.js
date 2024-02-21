import React, { useEffect, useState } from 'react'
import ContactUs from '../../components/ContactUs'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import Whatsapp from '../../components/Whatsapp'
import GetAQuoteModal from '../../components/GetAQuoteModal'

const OurProcess = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Our Web and Mobile App Development Process" />
      <Header setOpenModal={setModalOpen}/>
      <section className="process_banner">
        <div className="banner_contact text-center">
          <h2>Our 6 Steps Process</h2>
          <Image  width={1045} height={204}
            src={require('../../public/assets/images/COMPANY/process/process-banner.png')}
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
                      <Image width={90} height={90}
                        src={require('../../public/assets/images/COMPANY/process/REQUIREMENTS.gif')}
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
                      We attentively listen to our clients and understand the
                      problems that we need to address with a comprehensive
                      solution. We start by gathering all the requirements and
                      analyzing them.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_two">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image width={90} height={90}
                        src={require('../../public/assets/images/COMPANY/process/INITIAL.gif')}
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
                      After gathering requirements we do a lot of brainstorming
                      to understand the scope of the solution for specific
                      customer problems. For this, we conduct team meetings,
                      questions, and sessions to decide the particular
                      trajectory we need to follow for building the software
                      product.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_three">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image width={90} height={90}
                        src={require('../../public/assets/images/COMPANY/process/PROJECT_ESTIMATION.gif')}
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
                      At this stage, we have a total picture of the project
                      requirements, time limit, and cost. Accordingly, we
                      estimate the project cost and required time and resources.
                      Finally, we create a proposal mentioning all the details
                      corresponding to cost, development time, project deadline,
                      schedule, and resources.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_four">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image width={90} height={90}
                        src={require('../../public/assets/images/COMPANY/process/RESOURCE_TEAM.gif')}
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
                      After getting the final nod from the client we create a
                      detailed plan of resource and team allocation. Following
                      this, we create the setup and give responsibility to a
                      project manager with specific recommendations for the
                      entire project.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_five">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image width={90} height={90}
                        src={require('../../public/assets/images/COMPANY/process/DAILY_WEEKLY.gif')}
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
                      As the project continues rolling, we come with project
                      updates at regular intervals ranging from weekly to
                      monthly updates. Accordingly, we come with a specific plan
                      if value addition and improvements for the project.
                    </p>
                  </div>
                </div>
                <div className="road-map-wrapper road-map_six">
                  <div className="road-map-circle">
                    <span className="road-map-circle-text d-flex align-items-center justify-content-center">
                      <Image width={90} height={90}
                        src={require('../../public/assets/images/COMPANY/process/PROJECT_HANDOVER.gif')}
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
                      When the development is finished and the software
                      application is ready for deployment, we handover the
                      application to the client. We offer continuous
                      post-development support and take responsibility for the
                      successful deployment.
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
      <Whatsapp/>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />

      <Footer/>
    </>
  )
}

export default OurProcess
