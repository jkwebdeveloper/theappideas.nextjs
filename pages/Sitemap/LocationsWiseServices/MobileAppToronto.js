import { React, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import '../../../components/Workdone/work.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Helmet } from 'react-helmet'

import Company from '../../../public/assets/images/sitemap/toronto/Mobile-App-Development.png'
import Development from '../../../public/assets/images/sitemap/toronto/Mobile-Application-Development-Company (1).png'
import Native from '../../../public/assets/images/sitemap/toronto/Mobile-Application-Development-Company.png'
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../../../components/HeroSection'
import ContactUs from '../../../components/ContactUs'
import FAQ from '../../../components/FAQ'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header/Header'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'
const MobileAppToronto = () => {
  const [activeService, setactiveService] = useState('Innovative_Custom')
  const [activeWhyChoose, setActiveWhyChoose] = useState('Unmatched_Portfolio')
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet title="Top Mobile App Development Company In Toronto" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}

      <HeroSection
        title="Mobile App Development Toronto, Canada"
        des="Mobile apps opened the opportunity of anytime-anywhere access to contents and communication for the users and customers worldwide. The App Ideas is a leading Mobile App Development Toronto, Canada comprising leading brands as well as startups and small businesses. As a development company with a global footprint, we can build the most sophisticated custom apps that perfectly meets your business needs."
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
            <h3>Mobile App Development Company Toronto, Canada</h3>
            <p>
              We at App Ideas provide a comprehensive range of{' '}
              <strong> Mobile App Development Company Toronto </strong>, Canada
              businesses require. We build highly sophisticated, future-ready,
              scalable, and most innovative mobile app solutions for business
              brands across the niches.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Innovative_Custom')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'Innovative_Custom' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/icons8-iphone-x-72-1.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Innovative Custom Mobile Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('Superb_uiux')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'Superb_uiux' &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/mobile-app/Group-235.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>
                      Superb <br />
                      UI/UX
                    </p>
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
                  onClick={() => setactiveService('App_Testing')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'App_Testing' &&
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
                  onClick={() => setactiveService('Support_Maintenance')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeService === 'Support_Maintenance' &&
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
            {activeService === 'Innovative_Custom' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Innovative Custom Mobile Apps
                    </h3>
                    <p className="Title_para">
                      At The App Ideas, we build innovative custom mobile apps
                      for a broad spectrum of business niches to ensure optimum
                      engagement and business conversion.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Superb_uiux' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Superb UI/UX</h3>
                    <p className="Title_para">
                      We design and develop visually appealing and instantly
                      engaging User Interface (UI) and the most rewarding User
                      Experience (UX) for mobile apps.
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
                      We build native mobile apps for all leading mobile OS
                      platforms including iOS and Android and also build
                      cross-platform apps for multiple mobile OS platforms.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'App_Testing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Testing</h3>
                    <p className="Title_para">
                      We at App Ideas undertake QA testing and evaluation for
                      the mobile apps to ensure glitch-free performance.
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
                      At App Ideas, we also undertake continuous promotion and
                      marketing of mobile apps to ensure steady business
                      conversion and growth.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'Support_Maintenance' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance</h3>
                    <p className="Title_para">
                      We provide robust lifecycle support and maintenance
                      service to all our clients and provide them frequent
                      updates with crucial enhancements.
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
                      alt="Mindweel"
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
                      alt="bolt-app"
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
                      alt="service-my-car"
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
              For <strong> Mobile App Development Company Toronto </strong>,
              Canada, service providers are numerous, and but thanks to the
              professionalism and commitment to excellence we stand out as a
              leading development company in the city. Let us have a look at the
              key reasons to choose us for your mobile app development needs in
              Toronto.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('Unmatched_Portfolio')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === `Unmatched_Portfolio` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/robust-portfolio.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Unmatched Portfolio</p>
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
                  onClick={() => setActiveWhyChoose('Latest_Technology')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === `Latest_Technology` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/latest-technology.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Latest Technology</p>
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
                  onClick={() => setActiveWhyChoose('Iterative_Transparent')}
                >
                  <div
                    className={`service__provide_tab ${
                      activeWhyChoose === `Iterative_Transparent` &&
                      `service__provide_tab_active`
                    }`}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/toronto/why-choose/transperent-process.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>Iterative And Transparent Process</p>
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
            {activeWhyChoose === 'Unmatched_Portfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Unmatched Portfolio</h3>
                    <p className="Title_para">
                      We at App Ideas boast an unmatched portfolio of the most
                      successful mobile apps built for Toronto businesses and
                      industries across various niches.
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
                      With a talented pool of expert developers and years of
                      frontline experience in building sophisticated apps, we
                      deliver the most innovative custom solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Latest_Technology' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Latest Technology</h3>
                    <p className="Title_para">
                      At App Ideas, we excel with solid command over the state
                      of the art technologies and tools to deliver cutting-edge
                      features and uncompromising performance.
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
                      We follow agile development methodology to ensure
                      fast-paced development while maintaining optimum quality
                      with concurrent testing.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Iterative_Transparent' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Iterative and Transparent Process
                    </h3>
                    <p className="Title_para">
                      We boast of a truly iterative and transparent development
                      process with a lot of room for our clients to come with
                      value additions while remaining committed to the deadline.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'Competitive_Pricing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      We offer highly competitive pricing for all our
                      development services and make sure our services can be
                      availed of by the leading brands as well as startups.
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
      <ContactUs
        question="Do you want to know more about our Mobile App Development
                  Toronto, Canada? Do you want to know how can we make
                  substantial value additions to your business with unique and
                  innovative mobile apps? Let us explain to you at length. Feel
                  free to drop us a message to help us reach you at the
                  earliest."
      />
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

export default MobileAppToronto
