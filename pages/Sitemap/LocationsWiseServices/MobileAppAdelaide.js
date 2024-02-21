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
import Company from '../../../public/assets/images/sitemap/adelaide/Wordpress-Developer.png'
import Development from '../../../public/assets/images/sitemap/adelaide/Build-Taxi-App.png'
import Native from '../../../public/assets/images/sitemap/adelaide/Top-Mobile-Game-App-Developers.webp'
import HeroSection from '../../../components/HeroSection'
import ContactUs from '../../../components/ContactUs'
import FAQ from '../../../components/FAQ'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'

const MobileAppAdelaide = () => {
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
      <Helmet title="Trusted Mobile App Development in Adelaide" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Mobile App Development Adelaide"
        des="The digital footprint for any business brand is not complete without a mobile app. In the Australian city of Adelaide, mobile app development like in every major city enjoys equal focus and priority in the digital landscape pursued by business brands of different niches. The App Ideas is a leading Mobile App Development Adelaide with a worldwide client base and a solid presence in the city of Adelaide as well."
        list1="7+ Years of experience in App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Mobile App Development Adelaide"
        service2="App Development Company Adelaide"
        service3="App Developers Adelaide"
        image1={Company}
        image2={Development}
        image3={Native}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Mobile App Development Company Adelaide from the App Ideas</h3>
            <p>
              We at the App Ideas offer all sought-after and popular{' '}
              <b>Mobile App Development Company Adelaide</b> businesses need. We
              build future-ready, highly sophisticated, tremendously scalable,
              and unique custom mobile apps that are capable to meet a variety
              of business requirements.
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
                    <p>Custom Mobile Apps</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_enterprise')}
                >
                  <div
                    
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
                    <p>
                      Engaging <br />
                      UI/UX
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_wearable')}
                >
                  <div
                    
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
                    <p>Mobile App Testing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_app_redesign')}
                >
                  <div
                    
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
                    <h3 className="Title_heading">Custom Mobile Apps</h3>
                    <p className="Title_para">
                      At App Ideas, we develop innovative custom mobile apps for
                      a variety of business niches and ensure optimum business
                      conversion and steady user engagement.
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
                      We design visually absorbing and instantly engaging user
                      Interface (UI) and frictionless User Experience (UX) for
                      different app categories and niches of mobile apps.
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
                      We build both native and cross-platform mobile apps for
                      both the leading mobile OS platforms like iOS and Android.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_game' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Testing</h3>
                    <p className="Title_para">
                      We provide full-length QA testing and mobile app
                      evaluation services to ensure optimum performance boost
                      for every app.
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
                      At App Ideas, we also undertake all the app promotion and
                      marketing services to ensure continuous user acquisition,
                      user retention, and business growth.
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
                      We provide full support and maintenance service throughout
                      the lifecycle of an app and come with timely updates with
                      crucial enhancements.
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
            <h3>
              Why Choose the App Ideas for Mobile App Development Adelaide?
            </h3>
            <p>
              In Mobile App Development Adelaide service providers are numerous,
              but thanks to our committed approach and robust portfolio of
              successful apps wee always stand out from the rest. Here we
              explain the key reasons to choose us for your mobile app
              development needs in Adelaide and other cities.
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
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'robust_protfolio' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <Image
                      src={require('../../../public/assets/images/sitemap/adelaide/Advanced-Technology-1.png')}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Unique Solutions</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('full_lifestyle_support')}
                >
                  <div
                    
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
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'fast_paced_development' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <Image
                      src={require('../../../public/assets/images/sitemap/sydney/why_choose/transperent-process.png')}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Transparent Process</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('competitive_price')}
                >
                  <div
                    
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
                      We boast of a robust portfolio of the most successful and
                      award-winning mobile apps that we developed for Barcelona
                      businesses from different niches.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'robust_protfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Unique Solutions</h3>
                    <p className="Title_para">
                      We are a development company with a highly talented pool
                      of experienced developers with proven expertise in
                      developing apps for a wide variety of business niches.
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
                      At App Ideas, we boast of exceptional expertise with solid
                      command over the latest technologies and cutting-edge
                      tools for developing user-centric apps.
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
                      We follow an agile development methodology for faster
                      development along with uncompromising performance ensured
                      by concurrent testing.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'fast_paced_development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Transparent Process</h3>
                    <p className="Title_para">
                      We boast of a very iterative and well-informed app
                      development process to accommodate frequent value
                      additions and suggestions on the part of clients.
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
                      We offer highly competitive pricing for all the app
                      development services to ensure affordability for startups
                      and small businesses.
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

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}

      {/* FAQ Section Start */}
      <FAQ />
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <ContactUs
        question="Do you want to know more about our Mobile App Development
                  Adelaide? Let us explain in length how we can make value
                  additions with our apps. Feel free to drop us a message."
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

export default MobileAppAdelaide
