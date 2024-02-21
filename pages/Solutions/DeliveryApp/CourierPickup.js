import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import FAQ from '../../../components/FAQ'
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Link from 'next/link';
import Image from 'next/image';
// Banner
import Development from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier-Pickup-Management-App.png'
import Services from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier-Pickup-Management-App-Development.png'
import developer from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier-App-Development1.png'

//  User App

import search from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/User App/Profile Management.svg'
import Check from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/User App/first_use_checkup_list.svg'
import Orderonline from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/User App/creaate-sector.svg'
import payonline from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/User App/create-order.svg'
import Reviews from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/User App/assign-sector.svg'
import Get from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/User App/Reports management.svg'

// courier boy
import Login from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/Login _ Register.svg'
import Forgot from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/forgot_password.svg'
import Change from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/change_password-2.svg'
import Seethe from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/courier boy see the job list.svg'
import Getthe from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/Get the details.svg'
import Timeline from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/Timeline.svg'
import parcel from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/pickup-parcel.svg'
import person from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/If person was not available.svg'
import courier from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/courier boy see the job list.svg'
import clicked from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/once they clicked on it, it will open the pickup and company details.svg'
import They from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Courier Boy App/Timeline.svg'

//  Admin penal
import UserManagement from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Admin Panel/user_manage-1.svg'
import CourierBoyManagement from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Admin Panel/Courier Boy Management.svg'
import CourierManagement from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Admin Panel/Courier Management.svg'
import PaymentManagement from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Admin Panel/Payment-Management-1.svg'
import ReportsManagement from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Admin Panel/Reports management.svg'
import Contentmanagement from '../../../public/assets/images/SOLUTIONS/Delivery App/Courier-app/Admin Panel/content-management.svg'

import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from 'react-helmet'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'

const CourierPickup = () => {
  const [activeSection, setActiveSection] = useState('user_app')
  const [data, setData] = useState([])
  const [modalOpen, setModalOpen] = useState(false);


  const CourierData = [
    {
      id: 1,
      category: 'user_app',
      image: search,
      title: 'Profile Management',
      des: 'Create/Maintain profile for every courier boy.',
    },
    {
      id: 2,
      category: 'user_app',
      image: Check,
      title: 'Create/Maintain clients list',
      des:
        'Where operator enter the details of the client like name, Email id, Phone number.',
    },
    {
      id: 3,
      category: 'user_app',
      image: Orderonline,
      title: 'Create/Manage Sectors',
      des: 'based on the zip codes.',
    },
    {
      id: 4,
      category: 'user_app',
      image: payonline,
      title: 'Create/ Update orders',
      des:
        'Operator will create the customer order by filling up name, email id, phone number, zip code, address, parcel type, approx. weight.',
    },
    {
      id: 5,
      category: 'user_app',
      image: Reviews,
      title: 'Assign the Sectors to courier boys',
      des:
        'We need to create the zip code table where operator will enter the zip code.',
    },
    {
      id: 6,
      category: 'user_app',
      image: Get,
      title: 'Reports Management',
      des:
        'View the list of the assigned jobs on a particular day for the courier boy.',
    },
    {
      id: 7,
      category: 'courier_boy_app',
      image: Login,
      title: 'Login',
      des:
        'The courier boy needs to create login credentials and log in for use.',
    },
    {
      id: 8,
      category: 'courier_boy_app',
      image: Forgot,
      title: 'Forgot Password',
      des:
        'In case of forgetting password the courier boy can follow the instructions to create a new password.',
    },
    {
      id: 9,
      category: 'courier_boy_app',
      image: Change,
      title: 'Change Password',
      des: 'Courier boy can change the password at any point of time.',
    },
    {
      id: 10,
      category: 'courier_boy_app',
      image: Seethe,
      title: 'See the assigned jobs list',
      des: 'Courier boy can see the list of all jobs assigned for him.',
    },
    {
      id: 11,
      category: 'courier_boy_app',
      image: Getthe,
      title: 'Get the details',
      des:
        'Courier boy can access details about each and every job assigned to him.',
    },
    {
      id: 12,
      category: 'courier_boy_app',
      image: Timeline,
      title: 'Timeline',
      des: '20 Working Days',
    },
    {
      id: 13,
      category: 'courier_boy_app',
      image: parcel,
      title: 'Picked up the parcel',
      des: 'They need to click on a Button Called “Parcel Picked up”.',
    },
    {
      id: 14,
      category: 'courier_boy_app',
      image: person,
      title: 'If person was not available',
      des:
        'Courier boy click on Create a note button and generate a note and submit it.',
    },
    {
      id: 15,
      category: 'courier_boy_app',
      image: courier,
      title: 'courier boy see the job list.',
      des: '',
    },
    {
      id: 16,
      category: 'courier_boy_app',
      image: clicked,
      title:
        'once they clicked on it, it will open the pickup and company details',
      des: '',
    },
    {
      id: 17,
      category: 'courier_boy_app',
      image: They,
      title:
        'They click on start journey button, live tracking will be started',
      des: '',
    },
    {
      id: 18,
      category: 'admin_panel',
      image: UserManagement,
      title: 'User Management',
      des: '',
    },
    {
      id: 19,
      category: 'admin_panel',
      image: CourierBoyManagement,
      title: 'Courier Boy Management',
      des: '',
    },
    {
      id: 20,
      category: 'admin_panel',
      image: CourierManagement,
      title: 'Courier Management',
      des: '',
    },
    {
      id: 21,
      category: 'admin_panel',
      image: PaymentManagement,
      title: 'Payment Management',
      des: '',
    },
    {
      id: 22,
      category: 'admin_panel',
      image: ReportsManagement,
      title: 'Reports Management',
      des: '',
    },
    {
      id: 23,
      category: 'admin_panel',
      image: Contentmanagement,
      title: 'Content management',
      des: '',
    },
  ]

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    AOS.init()
  }, [])

  const filterItem = (cateItem) => {
    const updateItems = CourierData.filter((curElem) => {
      return curElem.category === activeSection
    })
    setData(updateItems)
  }

  // run when activesection changes
  useEffect(() => {
    filterItem()
  }, [activeSection])
  return (
    <>
      <Helmet title="Courier Pickup Management Software Solution - The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="Courier Pickup Management App"
        des="Mobile app can play a great role in managing courier service professionals on the field. An app for courier pickup management can boost efficiency and help streamline the process. We at the App Ideas build highly sophisticated and feature-rich apps for courier pickup management."
        list1="7+ Years of experience in App Development"
        list2="Best Courier Pickup Management App Development Company"
        list3="Dedicated team for your Courier Pickup Management App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Courier Pickup Management App"
        service2="Courier Pickup Management App Development"
        service3="Courier App Development"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}

      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of Courier Pickup Management App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'user_app' && 'active'
                  }`}
                  id="User-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="User-App"
                  aria-selected="true"
                  onClick={() => setActiveSection('user_app')}
                  style={{ cursor: 'pointer' }}
                >
                  User App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'courier_boy_app' && 'active'
                  }`}
                  id="Courier-Boy-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Courier-Boy-App"
                  type="button"
                  role="tab"
                  aria-controls="Courier-Boy-App"
                  aria-selected="false"
                  onClick={() => setActiveSection('courier_boy_app')}
                  style={{ cursor: 'pointer' }}
                >
                  Courier Boy App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'admin_panel' && 'active'
                  }`}
                  id="Admin-panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-panel"
                  type="button"
                  role="tab"
                  aria-controls="Admin-panel"
                  aria-selected="false"
                  onClick={() => setActiveSection('admin_panel')}
                  style={{ cursor: 'pointer' }}
                >
                  Admin Panel
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="Customer-App"
                role="tabpanel"
                aria-labelledby="Customer-App-Tab"
              >
                <div className="row">
                  {data.map((elem) => {
                    const { id, image, des, title } = elem
                    return (
                      <div
                        key={id}
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4"
                      >
                        <div className="food__delivery__box">
                          <Image width={70} height={70}
                            src={image}
                            alt="search-food-icon"
                            className="img-fluid"
                            style={{ height: '70px' }}
                          />
                          <h4>{title}</h4>
                          <p>{des}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Delivery App Section End */}

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
            //   style={{ padding: "2.5rem 0" }}
          >
            <SwiperSlide style={{ cursor: 'pointer' }}>
              <div className="row">
                <div className="col-12">
                  <Image width={1110} height={628}
                    alt="food-1"
                    src={require('../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/food1.webp')}
                    style={{
                      width: '100%',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: 'pointer' }}>
              <div className="row">
                <div className="col-12">
                  <Image width={1110} height={628}
                  alt='food-2'
                    src={require('../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Food-2.webp')}
                    style={{
                      width: '100%',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: 'pointer' }}>
              <div className="row">
                <div className="col-12">
                  <Image width={1110} height={628}
                  alt='food-3'
                    src={require('../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Food-3.webp')}
                    style={{
                      width: '100%',
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Would you like to create a Courier Pickup Management App?" />
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

export default CourierPickup
