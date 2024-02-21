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
import Image from 'next/image';
// Banner
import Development from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-App-Development1.png'
import Services from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-Appointment-App.png'
import developer from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-App-Development-Company.png'

//  User App
import SignUp from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/signup.svg'
import Signin from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Signin.svg'
import ForgotPassword from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/forgot_password.svg'
import ChangePassword from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/change_password-2.svg'
import Createaprofile from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Create_a_profile.svg'
import Manageprofile from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Manage profile.svg'
import Manage from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Manage-Medical-History-Profile.svg'
import available from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Search available doctors.svg'
import Ratings from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Ratings and reviews.svg'
import Usercanchat from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User can chat.svg'
import UsercanPay from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User-Can-Pay-Via-PayPal.svg'
import Userget from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User-Get-The-Morning-Quotes.svg'

// Doctor-App-Development
import Complaint from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Complaint Management.svg'
import Forgot from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/forgot_password.svg'
import Change from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/change_password.svg'
import profile from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Create_a_profile.svg'
import Managepro from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Manage-Profile.svg'
import Setavailability from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Set-Availability.svg'
import Requestwithdrawal from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Request-For-A-Withdrawal.svg'
import Doctorscan from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Doctors can see the reports.svg'

// Admin-Penal
import UserManagement from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/User management.svg'
import DoctorsManagement from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Doctors-Management.svg'
import Featured from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Featured profile management.svg'
import Payment from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/payment-manage-4.svg'
import Suspend from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Suspend.svg'
import Dispute from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Dispute.svg'
import Reports from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/report management.svg'
import Doctorsget from '../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Doctors-Get-Notification.svg'

import ContactUs from "../../../components/ContactUs";
import HeroSection from '../../../components/HeroSection';
import { Helmet } from 'react-helmet'
import Whatsapp from '../../../components/Whatsapp'
import GetAQuoteModal from '../../../components/GetAQuoteModal'

const DoctorHiring = () => {
  const [activeSection, setActiveSection] = useState('user_app')
  const [data, setData] = useState([])
  const [modalOpen, setModalOpen] = useState(false);


  const DoctorData = [
    {
      id: 1,
      category: 'user_app',
      image: SignUp,
      title: 'Sign Up',
      des:
        'This feature of the user interface will allow you signup as a new user with all the credentials and required details.',
    },
    {
      id: 2,
      category: 'user_app',
      image: Signin,
      title: 'Signin',
      des:
        'After being registered users need to sign in to the app by providing their signup credentials.',
    },
    {
      id: 3,
      category: 'user_app',
      image: ForgotPassword,
      title: 'Forgot Password',
      des:
        'n case the user forgets password, this user app feature will allow him to retrieve the password by following some easy steps.',
    },
    {
      id: 4,
      category: 'user_app',
      image: ChangePassword,
      title: 'Change Password',
      des:
        'The user can change his password from time to time in order to strengthen the security of the login credentials.',
    },
    {
      id: 5,
      category: 'user_app',
      image: Createaprofile,
      title: 'Create a profile',
      des:
        'Users is allowed to chat with the drivers or the admin whenever needed.',
    },
    {
      id: 6,
      category: 'user_app',
      image: Manageprofile,
      title: 'Manage profile',
      des:
        'Users can manage their profiles and edit them at ease by changing the profile information.',
    },
    {
      id: 7,
      category: 'user_app',
      image: Manage,
      title: 'Manage medical history profile',
      des:
        'The users can also manage, edit, change and add new information to their medical history profile.',
    },
    {
      id: 8,
      category: 'user_app',
      image: available,
      title: 'Search available doctors',
      des:
        'The users can search for specialist doctors from a variety of specialties through the search function and an array of filters.',
    },
    {
      id: 9,
      category: 'user_app',
      image: Ratings,
      title: 'Ratings and reviews',
      des:
        'Users can provide feedback about the doctors and the app by giving ratings and publishing reviews about them.',
    },
    {
      id: 10,
      category: 'user_app',
      image: Usercanchat,
      title: 'User can chat',
      des:
        'User can engage in real-time chat with the therapists and service-provider doctors and can explain their health issues.',
    },
    {
      id: 11,
      category: 'user_app',
      image: UsercanPay,
      title: 'User can Pay via PayPal',
      des:
        'User can make payment to the doctors and therapists for their required medical services by using PayPal and an array of other payment gateways.',
    },
    {
      id: 12,
      category: 'user_app',
      image: Userget,
      title: 'User get the Morning Quotes',
      des:
        'User also get lucrative quote from the service provider doctors in the beginning of the day as promotional offers.',
    },
    {
      id: 13,
      category: 'doctor_app_development',
      image: SignUp,
      title: 'SignUp',
      des:
        'Doctors and therapists also need to signup by creating a fresh new account with the app.',
    },
    {
      id: 14,
      category: 'doctor_app_development',
      image: Complaint,
      title: 'Complaint Management',
      des:
        'The doctors for using the app need to sign in by using the login credentials.',
    },
    {
      id: 15,
      category: 'doctor_app_development',
      image: Forgot,
      title: 'Forgot Password',
      des:
        'Doctors can retrieve their password or create new password in case they have forgotten their password or login credentials.',
    },
    {
      id: 16,
      category: 'doctor_app_development',
      image: Change,
      title: 'Change Password',
      des:
        'Doctors can change or create new password from time to time for the sake of safeguarding their account.',
    },
    {
      id: 17,
      category: 'doctor_app_development',
      image: profile,
      title: 'Create a profile',
      des:
        'Doctors can create or manage their own profiles by providing all the professional details.',
    },
    {
      id: 18,
      category: 'doctor_app_development',
      image: Managepro,
      title: 'Manage profile',
      des:
        'Doctors can manage their profiles by maintaining all their professional credentials and information in a discoverable manner.',
    },
    {
      id: 19,
      category: 'doctor_app_development',
      image: Setavailability,
      title: 'Set availability',
      des:
        'Doctors can set availability of their services to opt for or opt out of requested services from patients.',
    },
    {
      id: 20,
      category: 'doctor_app_development',
      image: Requestwithdrawal,
      title: 'Request for a withdrawal',
      des:
        'Doctors can also request for withdrawing from a previously opted service.',
    },
    {
      id: 21,
      category: 'doctor_app_development',
      image: Doctorscan,
      title: 'Doctors can see the reports',
      des:
        'Doctors can withdrawing from a service can also choose to see the medical reports of the concerned patients.',
    },
    {
      id: 22,
      category: 'admin_penal',
      image: UserManagement,
      title: 'User Management',
      des:
        'The admin panel of the app allows the app admin to manage different users.',
    },
    {
      id: 23,
      category: 'admin_penal',
      image: DoctorsManagement,
      title: 'Doctors Management',
      des:
        'The doctors management section of the admin panel allows the app admin to manage the registered therapists and doctors.',
    },
    {
      id: 24,
      category: 'admin_penal',
      image: Featured,
      title: 'Featured profile management',
      des:
        'The admin panel can also allow creating a list of featured profiles and managing them separately.',
    },
    {
      id: 25,
      category: 'admin_penal',
      image: Payment,
      title: 'Payment Management',
      des:
        'The admin panel allows managing the payment methods, gateways and the actual payment made by the users.',
    },
    {
      id: 26,
      category: 'admin_penal',
      image: Suspend,
      title: 'Suspend account management',
      des:
        'The admin panel can also suspend certain accounts and can evaluate the accounts for disciplinary actions.',
    },
    {
      id: 27,
      category: 'admin_penal',
      image: Dispute,
      title: 'Dispute management',
      des:
        'The admin panel also helps sorting out any dispute between the service provider doctors and the patients.',
    },
    {
      id: 28,
      category: 'admin_penal',
      image: Reports,
      title: 'Reports Management',
      des:
        'The admin panel also offers a report management feature to keep track of the doctor’s services and the patient’s feedback.',
    },
    {
      id: 29,
      category: 'admin_penal',
      image: Doctorsget,
      title: 'Doctors get notification',
      des:
        'The admin panel also helps sending doctors and therapists notification messages with latest service update.',
    },
  ]

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const filterItem = (cateItem) => {
    const updateItems = DoctorData.filter((curElem) => {
      return curElem.category === activeSection
    })
    setData(updateItems)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  // run when activesection changes
  useEffect(() => {
    filterItem()
  }, [activeSection])

  return (
    <>
      <Helmet title="On Demand Doctor App Development In India | The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <HeroSection
        title="On Demand Doctor App"
        des="Like many other On Demand Doctor App Development in the market today, the demand for on-demand therapist or On Demand Doctor App Development is also increasing at a rapid speed. In fact, these on-demand apps for calling medical care providers can really transform the healthcare services beyond recognition. We at the App Ideas build most future-ready, sophisticated and user-centric on-demand healthcare and doctor-hiring apps."
        list1="7+ Years of experience in App Development"
        list2="Best Doctor App Development Company"
        list3="Dedicated team for your Doctor App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="On-Demand Doctor App Development"
        service2="Doctor Appointment App Development"
        service3="On-Demand Doctor App Development Company"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}

      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of On Demand Doctor App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'user_app' && 'active'
                  }`}
                  id="User-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User App"
                  type="button"
                  role="tab"
                  aria-controls="User App"
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
                    activeSection === 'doctor_app_development' && 'active'
                  }`}
                  id="Doctor-App-Development-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Doctor-App-Development"
                  type="button"
                  role="tab"
                  aria-controls="Doctor-App-Development"
                  aria-selected="false"
                  onClick={() => setActiveSection('doctor_app_development')}
                  style={{ cursor: 'pointer' }}
                >
                  On Demand Doctor App Development
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'admin_penal' && 'active'
                  }`}
                  id="Admin-Penal-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-Penal"
                  type="button"
                  role="tab"
                  aria-controls="Admin-Penal"
                  aria-selected="false"
                  onClick={() => setActiveSection('admin_penal')}
                  style={{ cursor: 'pointer' }}
                >
                  Admin Penal
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
                    src={require('../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/slider/mindweel.webp')}
                    alt='mindweel'
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
                    src={require('../../../public/assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/slider/godr.webp')}
                    alt='godr'
                    style={{
                      width: '100%',
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
      <ContactUs question="Would you like to create an On Demand Doctor App?" />
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

export default DoctorHiring
