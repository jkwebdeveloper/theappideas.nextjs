import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import { Helmet } from 'react-helmet'
import Link from 'next/link';
import Image from 'next/image';
import Company from '../../../public/assets/images/sitemap/london/Mobile-Application-Design.png'
import Development from '../../../public/assets/images/sitemap/sydney/Mobile-App-Development.png'
import Native from '../../../public/assets/images/sitemap/london/Android-App-Development.png'
import HeroSection from '../../../components/HeroSection'
import ContactUs from '../../../components/ContactUs'
import FAQ from '../../../components/FAQ'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'

const MobileAppLondon = () => {
  const [activeService, setactiveService] = useState('custom_mobile')
  const [activeWhyChoose, setActiveWhyChoose] = useState('experience_expertise')
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Best Mobile App Development Company London" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Mobile App Development London"
        des="Since mobile apps play the invincible role of completing the digital presence for all business brands, every company now makes it a priority to build apps that pushes business conversion. When it comes to Mobile App Development London as a city has some of the best developer talents and development companies with amazing track record and development output. The App Ideas as a global development company has a great presence in the app development scene of London and over the years built several industry-leading and successful apps across the niches."
        list1="7+ Years of experience in Mobile App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Mobile App Development London"
        service2="App Development Company London"
        service3="App Development Companies London"
        image1={Company}
        image2={Development}
        image3={Native}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Mobile App Development London Services from the App Ideas</h3>
            <p>
              At App Ideas, we provide all types of{' '}
              <b>Mobile App Development London</b> companies and businesses
              need. We built mobile apps with future-optimized, advanced, and
              innovative features that modern businesses easily reckon with. We
              build mobile apps that address the varying business needs of
              different niches and categories.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('custom_mobile')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'custom_mobile' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/mobile_app/icons8-iphone-x-72-1.png')}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom Apps Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_enterprise')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_enterprise' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/mobile_app/Group-235.png')}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Engaging UI/UX</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_wearable')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_wearable' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/adelaide/Cross-platform-Mobile-Apps.png')}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Cross-Platform Mobile Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_game')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_game' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/mobile_app/mobile-app-testing.png')}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>App Testing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_app_redesign')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_app_redesign' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/mobile_app/Branding-And-Marketing.png')}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>
                      App <br /> Marketing
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_support')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_support' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/mobile_app/Mask-Group.png')}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            {activeService === 'custom_mobile' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom Apps Development</h3>
                    <p className="Title_para">
                      We at the App Ideas build most sophisticated custom mobile
                      apps for a wide range of niches and categories while
                      ensuring steady user engagement and business conversion.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_enterprise' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Engaging UI/UX</h3>
                    <p className="Title_para">
                      We build and design visually appealing and thoroughly
                      engaging user Interface (UI) and deliver frictionless User
                      Experience (UX) for various app categories and mobile app
                      niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_wearable' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Cross-Platform Mobile Apps
                    </h3>
                    <p className="Title_para">
                      We develop both native and cross-platform mobile apps for
                      all major mobile OS platforms.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_game' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading"> App Testing</h3>
                    <p className="Title_para">
                      We also do user testing, QA testing and mobile app
                      automation testing to make sure the app doesn’t suffer
                      from performance issues and lack of engagement.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_app_redesign' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">App Marketing </h3>
                    <p className="Title_para">
                      At App Ideas, we also do app promotion and marketing to
                      give the newly built app a boost in terms of user
                      acquisition, user retention and continuous growth.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_support' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance </h3>
                    <p className="Title_para">
                      We offer full lifecycle support and maintenance services
                      to mobile apps of all niches and take care of timely
                      updates with crucial value additions and fixes.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Work Head Section Start */}
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

      {/* Work Head Section End */}

      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose the App Ideas for Mobile App Development London?</h3>
            <p>
              In the city of London mobile app development service provider
              companies have an intensive and thriving presence. There are
              literally too many of them. We stand out from the rest thanks to
              our acclaimed professional focus and commitment to excel with
              innovations. Here we are going to explain the key reasons to
              choose the App Ideas for all your mobile app development needs in
              London.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('experience_expertise')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'experience_expertise' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/why_choose/robust-portfolio.png')}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('robust_protfolio')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'robust_protfolio' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/london/expert-4.png')}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Expert Developers</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('full_lifestyle_support')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'full_lifestyle_support' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap//adelaide/latest-technology.png')}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Cutting-Edge Technology</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('agile_development')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'agile_development' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/why_choose/Agile-Development-1.png')}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('fast_paced_development')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'fast_paced_development' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <Image
                      src={require('../../../public/assets/images/sitemap/london/integration.png')}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Smooth Iteration</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('competitive_price')}
                >
                  <div
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'competitive_price' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/why_choose/competitive-pricing.png')}
                      alt="Competitive-Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === 'experience_expertise' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      We have an unmatched portfolio of an array of successful
                      and industry-leading mobile apps built for a variety of
                      businesses across the niches.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'robust_protfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Expert Developers</h3>
                    <p className="Title_para">
                      We proudly boast of an expert pool of experienced and
                      talented app developers with proven excellence in
                      delivering most challenging app projects.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'full_lifestyle_support' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Cutting-edge Technology</h3>
                    <p className="Title_para">
                      We at App Ideas, boast of our skills and expertise with
                      the latest and most advanced technologies and tools for
                      building the most sophisticated custom mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'agile_development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      We always follow agile development method to ensure
                      faster, efficient and performance-focused app development
                      while keeping the errors at bay.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'fast_paced_development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Iterative Development Process
                    </h3>
                    <p className="Title_para">
                      At the App Ideas we allow iteration from the clients
                      throughout the development process and ensure optimum
                      transparency for all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'competitive_price' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      We offer development solutions that can be scaled over
                      time as your business grows. This allows you to keep the
                      initial development cost at minimum.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}

      {/* FAQ Section Start */}
      <FAQ />
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <ContactUs question="Do you need expert Mobile App Development London? Let us explain our strengths in more detail and the ways we can add value to your business. Just feel free to call us or drop a message." />
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

export default MobileAppLondon
