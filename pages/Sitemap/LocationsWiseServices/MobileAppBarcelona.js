import { React, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import '../../../components/Workdone/work.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import { Helmet } from 'react-helmet'
import Company from '../../../public/assets/images/sitemap/adelaide/Wordpress-Developer.png'
import Development from '../../../public/assets/images/sitemap/adelaide/Build-Taxi-App.png'
import Native from '../../../public/assets/images/sitemap/adelaide/Top-Mobile-Game-App-Developers.webp'
import HeroSection from '../../../components/HeroSection'
import ContactUs from '../../../components/ContactUs'
import FAQ from '../../../components/FAQ'
import TestiMonial from '../../../components/Testimonial/TestiMonial'

import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header/Header'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'
const MobileAppBarcelona = () => {
  const [activeService, setactiveService] = useState('Barcelona_mobile')
  const [activeWhyChoose, setActiveWhyChoose] = useState('Robust_Portfolio')
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet title="Best Mobile App Development Company Barcelona" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Mobile App Development Barcelona"
        des="The digital presence for any business brand is incomplete without a mobile app. As for Mobile App Development Barcelona proudly boasts of many of the most acclaimed developer talents who built several successful apps for different business brands. The App Ideas as the leading mobile app development company enjoys a robust client base in Barcelona and several leading business brands and small startups consider the apps built by us as key components of their business."
        list1="7+ Years of experience in Mobile App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="App Development Barcelona"
        service2="Mobile App Development Barcelona"
        service3="App Development Company Barcelona"
        image1={Company}
        image2={Development}
        image3={Native}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Mobile App Development Company Barcelona, Spain</h3>
            <p>
              We at App Ideas offer a comprehensive array of{' '}
              <strong> Mobile App Development Company Barcelona </strong>, Spain
              businesses need. We develop future-ready, cutting-edge scalable,
              and most innovative mobile apps that meet the requirements of
              different business brands across the niches.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Barcelona_mobile')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Barcelona_mobile' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/icons8-iphone-x-72-1.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Unique Custom Mobile Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Unmatched')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Unmatched' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Group-235.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>Unmatched UI/UX</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Cross_Platform')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Cross_Platform' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Cross-platform-Mobile-Apps.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Cross-Platform Mobile Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Mobile_testing')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Mobile_testing' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/mobile-app-testing.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>Mobile App Testing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('App_Promotion')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'App_Promotion' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Branding-And-Marketing.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>App Promotion And Marketing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Support_maintenance')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeService === 'Support_maintenance' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Mask-Group.png')}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === 'Barcelona_mobile' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Unique Custom Mobile Apps</h3>
                    <p className="Title_para">
                      At the App Ideas we develop unique custom mobile apps for
                      variety of business niches and guarantee optimum business
                      conversion and user engagement.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Unmatched' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Unmatched UI/UX</h3>
                    <p className="Title_para">
                      We design visually stunning and exceptionally engaging
                      user Interface (UI) and smooth User Experience (UX) for
                      different categories and types of mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Cross_Platform' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Cross-Platform Mobile Apps
                    </h3>
                    <p className="Title_para">
                      We build native and cross-platform mobile apps for all
                      leading mobile OS platforms including iOS and Android.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Mobile_testing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Testing</h3>
                    <p className="Title_para">
                      We also undertake QA testing and mobile app evaluation
                      processes to ensure glitch free performance and audience
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'App_Promotion' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      App Promotion and Marketing
                    </h3>
                    <p className="Title_para">
                      At the App Ideas we take care of all the app promotion and
                      marketing responsibilities for continuous acquisition,
                      retention and growth.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Support_maintenance' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance</h3>
                    <p className="Title_para">
                      We provide support and maintenance service throughout the
                      app lifecycle and provide all necessary updates with key
                      enhancements.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* <!-- Work Slider Start --> */}
      <section className="work_slider_section py-5">
        <div className="container">
          <div className="work-heading">
            <h2>Work we had done</h2>
          </div>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            direction={'horizontal'}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current

                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            style={{ padding: '2.5rem 0' }}
          >
            <SwiperSlide>
              <Link
                href="https://play.google.com/store/apps/details?id=com.app.mindwheel"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <Image
                      src={require('../../../public/assets/images/work/2.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">
                      Mindweel - On Demand Psychologist Hiring App
                    </div>
                    <p>
                      It’s an On Demand Psychologist OR Doctor Hiring App. It
                      has been very useful app in the current scenario of the
                      world where everyone is facing depression, anxiety and
                      mental health issues.
                    </p>
                    <p>
                      This project has three main modules, Patient App,
                      Psychologist / Doctor App, and Admin Panel.
                    </p>

                    <p>
                      Patient can able to create and manage their medical
                      profile, find the best available Psychologist / Doctors,
                      Check their profiles, availability, ratings and reviews,
                      Book them online, make a payment, give ratings and
                      reviews.
                    </p>
                    <p>
                      Psychologist OR Doctor can able to register themselves,
                      create their specialist profile, manage availability,
                      patient, booking, payment and other stuffs.
                    </p>
                    <p>
                      Admin can able to manage Patients, Doctors, Payment,
                      Reports, Content and other stuffs.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="https://play.google.com/store/apps/details?id=com.app.boltdriverapp"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <Image
                      src={require('../../../public/assets/images/work/bolt-app.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">Bold Delivery</div>
                    <p>
                      It’s a Food Ordering & Food Delivery App. We have created
                      a User app, Restaurant App, Driver App, and Admin panel.
                    </p>
                    <p>
                      User can able to search, filter, check food details, place
                      an online order, make payment, track their orders, give
                      ratings and reviews.
                    </p>

                    <p>
                      Restaurant can able to register themselves, list and
                      manage their food items, manage orders, track drivers and
                      orders.
                    </p>
                    <p>
                      Driver can able to register, manage their availabilities,
                      deliver the food items to the users.
                    </p>
                    <p>
                      Admin can able to manage users, food category & sub
                      category, restaurants, drivers, payment and other things.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href="https://play.google.com/store/apps/details?id=com.servicemycar.android"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <Image
                      src={require('../../../public/assets/images/work/service-my-car.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">Service my car</div>
                    <p>
                      It’s an On Demand Car Servicing App, It has 2 main
                      modules.
                    </p>
                    <p>
                      1) User App <br />
                      2) Admin Web Backend
                    </p>

                    <p>
                      User can able to check out all the services packages
                      offered by a service center, check in details and compare
                      them, choose the service package and book online, pay
                      online, they can also choose pickup and drop off point,
                      check and approve extra repair cost, check their car 360°
                      inspections on their app, provide ratings and reviews of
                      the services.
                    </p>
                    <p>
                      Admin can able to list down all the services packages,
                      manage booking, extra repair services, payment, content of
                      an app, offers and other stuffs
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* <!-- Work Slider End --> */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose The App Ideas?</h3>
            <p>
              <strong> Mobile App Development Company Barcelona</strong>{' '}
              providers are too many, but due to our committed approach and
              industry-acclaimed professional output we always stand out from
              the rest. Here we explain the principal reasons to choose us for
              your mobile app development requirements in Barcelona.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Robust_Portfolio')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === `Robust_Portfolio` &&
                      `service__provide_tab_active`
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/robust-portfolio.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>
                      Robust <br />
                      Portfolio
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Innovative_Solutions')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === `Innovative_Solutions` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/Advanced-Technology-1.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>Innovative Solutions</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Art_Technology')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === `Art_Technology` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/latest-technology.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>State Of The Art Technology</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Agile_Development')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === `Agile_Development` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/Agile-Development-1.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('transparent_process')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === `transparent_process` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/transperent-process.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>Transparent Development Process</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Competitive_Pricing')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === `Competitive_Pricing` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/competitive-pricing.png')}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === 'Robust_Portfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      We boast of a robust portfolio of the most successful and
                      award-winning mobile apps that we developed for Barcelona
                      businesses from different niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Innovative_Solutions' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Innovative Solutions</h3>
                    <p className="Title_para">
                      We boast of a talented pool of most experienced developers
                      with years of experience in building most challenging
                      niche business apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Art_Technology' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      State of the Art Technology
                    </h3>
                    <p className="Title_para">
                      At the App Ideas we are proud of our exceptional expertise
                      with the latest technologies and cutting-edge tools to
                      build most advanced apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Agile_Development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      We follow agile development process to ensure quick
                      development time while ensuring uncompromising performance
                      with concurrent testing.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'transparent_process' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Transparent Development Process
                    </h3>
                    <p className="Title_para">
                      We offer a truly iterative and transparent app development
                      process that creates a lot of opportunities for the
                      clients to intervene and make value additions during the
                      project.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Competitive_Pricing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      We boast of highly competitive pricing for all the
                      development services to ensure affordability for
                      businesses of all sizes and capacities.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Do you want to know in more details about our Mobile App Development Barcelona? Let us explain how our development output can make substantial value addition to your business. Feel free to drop us a message and let us reach you at the earliest." />
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

export default MobileAppBarcelona
