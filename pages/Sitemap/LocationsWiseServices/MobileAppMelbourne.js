import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import HeroSection from '../../../components/HeroSection'
import ContactUs from '../../../components/ContactUs'
import FAQ from '../../../components/FAQ'
import TestiMonial from '../../../components/Testimonial/TestiMonial'

import { Helmet } from 'react-helmet'
import Link from 'next/link';
import Image from 'next/image';
import Company from '../../../public/assets/images/sitemap/sydney/Mobile-App-Development.png'
import Development from '../../../public/assets/images/sitemap/liverpool/Mobile-Apps-Development.png'
import Native from '../../../public/assets/images/sitemap/manchester/Top-Mobile-Game-App-Developers.webp'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'

const MobileAppMelbourne = () => {
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
      <Helmet title="Mobile App Development Company in Melbourne" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="Mobile App Development Melbourne"
        des="Mobile apps are regarded to be the prima facie of mobile presence instead of the mobile web. Actually, without mobile apps, the branding of any business stands incomplete. When it comes to mobile app development Melbourne has offers an array of acclaimed developer talents with a solid portfolio of successful apps. The App Ideas as a frontline development company has offered development services to many niche businesses with value-driven custom apps."
        list1="7+ Years of experience in Mobile App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Mobile App Development Melbourne"
        service2="App Development Company Melbourne"
        service3="App Developer Melbourne"
        image1={Company}
        image2={Development}
        image3={Native}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Mobile App Development Melbourne from the App Ideas</h3>
            <p>
              At App Ideas, we provide a whole range of{' '}
              <b>mobile app development Melbourne</b> businesses can think of.
              We create concept, design, prototype, and develop future-ready,
              most sophisticated, scalable, and unique mobile apps that ensure
              optimum audience-engagement and business conversion.
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
                    <p>Exceptional UI/UX</p>
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
                    <p>QA Testing And Evaluation</p>
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
                      We build uniquely-featured custom mobile apps for a
                      variety of categories and business niches ensure steady
                      and consistent deliver business conversion.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_enterprise' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Exceptional</h3>
                    <p className="Title_para">
                      We build engaging UI/UX and take care of the whole process
                      starting from the design, prototyping and development.
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
                      We build sophisticated cross-platform mobile apps for both
                      iOS and Android platforms while always maintaining fully
                      native user experience.
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
                      We have a fully equipped QA and Beta testing process to
                      detect all the issues and resulting performance glitches
                      and shortcomings.
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
                      We take full responsibility of all the app marketing and
                      promotion tasks and ensure continuous user acquisition,
                      retention, business conversion and steady growth with our
                      apps.
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
                      We offer comprehensive support and maintenance services to
                      take care of the entire app lifecycle and provide updates
                      with crucial enhancements.
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
              Why Choose the App Ideas for Mobile App Development Company in
              Melbourne?
            </h3>
            <p>
              Tn Mobile App Development Company Melbourne provider companies are
              too many. But as the industry leader, we always stand out from the
              rest thanks to our excellent portfolio and track record with a
              host of successful niche apps. Let us briefly mention the key
              reasons to choose us for your mobile app development needs.
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
                    <p>Future-Ready Apps</p>
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
                      src={require('../../../public/assets/images/sitemap/brisbane/transperent-3.png')}
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
                      We hold an unmatched portfolio of most successful and
                      acclaimed mobile apps that businesses and startups in
                      Melbourne preferred time and again.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'robust_protfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Future-ready Apps</h3>
                    <p className="Title_para">
                      With a really talented team of most experienced developers
                      and professionals of high caliber, we build the most
                      sophisticated mobile apps for various business niches.
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
                      We hold exceptional command and state of the art expertise
                      on the cutting-edge technologies and a broad spectrum of
                      development tools for mobile app development.
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
                      We follow an agile development methodology to ensure
                      faster development while ensuring glitch-free app
                      performance by undertaking concurrent testing.
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
                      We offer a truly transparent app development process that
                      allows clients to freely intervene and iterate from time
                      to time with suggestions and value additions.
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
                      We make our services affordable to small businesses and
                      startups with highly competitive pricing for our mobile
                      app development services.
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
      <ContactUs question="Do you want to know more about our mobile app development services in Melbourne? We are eager to tell you about how we can make exceptional value additions to your business with our app development service. Just free to drop us a message." />
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

export default MobileAppMelbourne
