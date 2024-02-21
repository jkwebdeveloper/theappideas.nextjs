import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import TestiMonial from '../components/Testimonial/TestiMonial'
import FAQ from '../components/FAQ'
import { Helmet } from 'react-helmet'
import Image from 'next/image';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
import GetAQuoteModal from '../components/GetAQuoteModal'
import Link from 'next/link'
//  Customer App
// import search from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/search foods online.svg";
// import Check from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check details.svg";
// import Orderonline from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Order online.svg";
// import payonline from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Pay online.svg";
// import Reviews from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Reviews and ratings.svg";
// import Get from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Get cashback.svg";
// import Avail from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Avail offers view offers.svg";
// import Checkorder from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check order history.svg";
// import Live from "../../../public/assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Live tracking.svg";

const LawyerWeb = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <>
      <Helmet title="Best Lawyer Website Design Company India - The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* common Banner start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Best Lawyer Website Design</h2>
                <p>
                  Like all the other fields, Law firms and agencies are also
                  implementing digitalization. This can be very helpful as they
                  can easily showcase their expertise in front of the customers.
                  Along with that, individuals are also investing in creating a
                  successful website.
                </p>
                <p>
                  While having a web presence has become a must for modern-day
                  legal practitioners and lawyers, we at App Ideas build
                  sophisticated, professional-looking websites that suit their
                  legal practice. Over the years we have built a whole array of
                  most advanced lawyer websites for individual advocates and law
                  firms. Our websites have helped countless advocates in both
                  civil and criminal proceedings prosper and grow consistently
                  and spread their reputation far and wide.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>Request a FREE Quote</h4>
                  <p>Guaranteed Response within One Business Day!</p>
                </div>
                <div className="contact__body">
                  <div className="contact__form">
                    <form action="">
                      <div className="row g-3">
                        <div className="col-sm-12 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name*"
                            aria-label="Name*"
                          />
                        </div>
                        <div className="col-sm-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email*
                                    "
                            aria-label="Email"
                          />
                        </div>
                        <div className="col-sm-12 h-100 select__country my-3">
                          <select className="select2 w-100 h-100">
                            <option value={1}>Country*</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                            <option value={5}>Option 5</option>
                            <option value={6}>Option 6</option>
                            <option value={7}>Option 7</option>
                            <option value={8}>Option 8</option>
                          </select>
                        </div>
                        <div className="col-sm-12 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number*
                                    "
                            aria-label="Phone Number"
                          />
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Project Requirement*"
                            defaultValue={''}
                          />
                        </div>
                        <div className="col-sm-12 text-center py-5">
                          <button type="submit" className="request__btn">
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="contact__footer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* common banner end  */}
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
                  <Image
                    src={require('../public/assets/images/Footer/lawyer-web/slider/lawyer_bg1.png')}
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
                  <Image
                    src={require('../public/assets/images/Footer/lawyer-web/slider/lawyer_bg.png')}
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
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of On-Demand Food Delivery App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Customer-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="Customer-App"
                  aria-selected="true"
                >
                  User App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Restaurent-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Restaurent-App"
                  type="button"
                  role="tab"
                  aria-controls="Restaurent-App"
                  aria-selected="false"
                >
                  Law Agency &amp; Firm panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Driver-Tracking-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Driver-Tracking"
                  type="button"
                  role="tab"
                  aria-controls="Driver-Tracking"
                  aria-selected="false"
                >
                  individual Attorney
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
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={search}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: '20%' }}
                      />
                      <h4>User login module</h4>
                      <p>
                        Users can easily log in and create their profile easily
                        to the website. Users can also access the forget
                        password, edit their profile, save the details of the
                        lawyer and more.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={Check}
                        alt="Check-Details-icons"
                        className="img-fluid"
                        style={{ width: '20%' }}
                      />
                      <h4>Find a Lawyer</h4>
                      <p>
                        Users can check for the different types of lawyers based
                        on their requirements as there are different types of
                        lawyers for the different services. Users can search
                        from the search bar and find the lawyer according.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={Orderonline}
                        alt="Order-Online-icon"
                        className="img-fluid"
                        style={{ width: '25%' }}
                      />
                      <h4>Check the details about the services</h4>
                      <p>
                        Users can check the services easily on the website and
                        also check the details along with the services.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={payonline}
                        alt="Pay-Online-icons"
                        className="img-fluid"
                        style={{ width: '20%' }}
                      />
                      <h4>Check the testimonials</h4>
                      <p>
                        Users can easily check the client’s testimonials on the
                        website of the lawyers and get to know their expertise
                        in the particular field.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={Reviews}
                        alt="Reviews-And-Ratings-icons "
                        className="img-fluid"
                        style={{ width: '20%' }}
                      />
                      <h4>Hire a Lawyer</h4>
                      <p>
                        After checking the details of the services and the
                        profile of the lawyer, the user can easily hire a lawyer
                        for the specific kinds of services.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={Get}
                        alt="Get-Cashback-icons"
                        className="img-fluid"
                        style={{ width: '20%' }}
                      />
                      <h4>Check the case studies</h4>
                      <p>
                        Users can easily check the case studies of the firms and
                        agencies for a better understanding of your process and
                        working methods of the agency.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: '20%' }}
                      />
                      <h4>Chat with the experts</h4>
                      <p>
                        A chat module is integrated into the website through
                        which users can easily connect with the person and clear
                        the doubts for the general inquiry.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={Checkorder}
                        alt="Check-Order-History-icons"
                        className="img-fluid"
                        style={{ width: '20%' }}
                      />
                      <h4>Book a consultation</h4>
                      <p>
                        Users can also have access to easily check and book a
                        consultation for a particular service with a popular
                        lawyer or an individual lawyer.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={Live}
                        alt="Live-Tracking-icons"
                        className="img-fluid"
                        style={{ width: '13%' }}
                      />
                      <h4>Add ratings and reviews</h4>
                      <p>
                        After accessing the services, users can add their
                        reviews and feedback on the website easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Restaurent-App"
                role="tabpanel"
                aria-labelledby="Restaurent-App-Tab"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={require("../public/assets/images/Profile-Management-icons.png")}
                        alt="Profile-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Profile Management</h4>
                      <p>
                        The food ordering app allows restaurants to create their
                        profile with details like addresses, food images, and a
                        host of other necessary details.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src={require("../public/assets/images/Food-Category-Management-icons.png")}
                        alt="Food-Category-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Food Category Management</h4>
                      <p>
                        The app also allows the participating restaurants to
                        create a food menu comprising both all categories such
                        as starter, main course, beverages, desserts veg,
                        non-veg, etc.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Food-Listing-Management-icons.png"
                        alt="Food-Listing-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Food Listing Management</h4>
                      <p>
                        The seller panel allows creating product categories and
                        denominations to help easy search and viewing.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Order-Management-icons.png"
                        alt="Order-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Order Management</h4>
                      <p>
                        Restaurants can also enjoy a very robust order
                        management system that allows communication through push
                        notifications, email, and messaging.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Driver-Management-icons.png"
                        alt="Order-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Driver Management</h4>
                      <p>
                        Restaurants can also provide the rider details, track
                        the availability of the driver in real-time, and
                        accordingly assign delivery jobs to riders.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/User-Management-icons.png"
                        alt="User-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>User management</h4>
                      <p>
                        Restaurants through the app can deal with the order
                        history, preferred dishes of individual users and can
                        send customers various offers.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Driver-Tracking-icons.png"
                        alt="Driver-Tracking-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Driver Tracking</h4>
                      <p>
                        Restaurants after assigning jobs to drivers can actually
                        guide the drivers about the best and time-saving
                        delivery route and do live tracking of driver movement.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Review-Management-icons.png"
                        alt="Review-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Review management</h4>
                      <p>
                        As and when customers drop reviews, restaurants can see
                        and respond to them and take measures to improve the
                        quality of service.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Loyalty-Management-icons.png"
                        alt="Loyalty-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Loyalty management</h4>
                      <p>
                        Restaurants can also provide offers and promo codes to
                        both new and existing customers and can boost loyalty
                        through discounts and special offers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Driver-Tracking"
                role="tabpanel"
                aria-labelledby="Driver-Tracking-Tab"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Profile-Management-icons.png"
                        alt="Profile-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Profile Management</h4>
                      <p>
                        The driver tracking app will furnish the driver profile
                        with all driver information, get admin approval of the
                        driver, and help to integrate as a driver for the
                        service.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Set-Availability.png"
                        alt="Set-Availability"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Set availability</h4>
                      <p>
                        Drivers can show their availability on the basis of
                        which restaurants can actually assign delivery jobs to
                        them.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Get-The-Pickup-Notification.png"
                        alt="Get-The-Pickup-Notification"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Get the pickup notification</h4>
                      <p>
                        Driver through the app receives push notifications,
                        email, or SMS whenever a new delivery job is assigned to
                        them. The same notification will allow them to accept or
                        rejecting the order.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Route-_-Customer-Details-icon.png"
                        alt="Route-_-Customer-Details-icon"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Route &amp; Customer Details</h4>
                      <p>
                        Driver through the app becomes informed about the food
                        pickup and drop location, customer details, and GPS
                        based route to reach customer’s place at the earliest.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Track-The-Route.png"
                        alt="Track-The-Route"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Track the route</h4>
                      <p>
                        On the way to the customer’s place, the drivers can
                        track the route on a live map and after delivery, the
                        real-time information is sent back to the admin.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Get-A-Customer-Feedback.png"
                        alt="Get-A-Customer-Feedback"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Get a customer feedback</h4>
                      <p>
                        Users through these apps can also opt for a variety of
                        offers, discounts, and cashback options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Super-Admin"
                role="tabpanel"
                aria-labelledby="Super-Admin-Tab"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Profile-Management-icons.png"
                        alt="Profile-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Profile Management</h4>
                      <p>
                        Admin of the app can easily see user listing, number of
                        users, specific user details, order history, payment
                        details, and other important information.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Driver-Management-icons.png"
                        alt="Driver-Management-icons"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Driver Management</h4>
                      <p>
                        The admin panel can check out driver profiles,
                        individual driver information and can drop drivers from
                        the list based on complaints.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Subscription-Management.png"
                        alt="Subscription-Management"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Subscription Management</h4>
                      <p>
                        The admin also manages all the restaurant subscriptions
                        on the basis of which the listing of the restaurants is
                        decided.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Payment-Management.png"
                        alt="Payment-Management"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Payment Management</h4>
                      <p>
                        The Admin panel also allows total control over payment
                        management and taking care of restaurant withdrawal
                        requests, customer payment dispute requests, etc.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Restaurant-Management.png"
                        alt="Restaurant-Management"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Restaurant Management</h4>
                      <p>
                        The admin panel can track the restaurants in the list
                        and various listed food items based on different
                        categories and various details including price.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <Image
                        // src="../public/assets/images/Reports.png"
                        alt="Reports"
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                      <h4>Reports</h4>
                      <p>
                        Admin panel will provide access to different reports
                        corresponding to orders, sales, purchases, and users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Delivery App Section End */}
      <section className="food_ordering_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why should you create a Best Lawyer website?</h3>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="swiper-container work_swiper-container food_delivery_swiper food_ordering_swiper">
                {/* swiper slides */}
                <div className="swiper-wrapper h-auto">
                  <div
                    className="swiper-slide d-block"
                    href="#"
                    target="_blank"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div
                          className="service__provide_tab service__provide_tab_active"
                        >
                          <Image
                            // src="../public/assets/images/positive_customer.png"
                            alt="positive_customer"
                            className="img-fluid"
                            width={50}
                            height={50}
                          />
                          <p>Made For Legal Practice</p>
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div className="service__provide_tab">
                          <Image
                            // src="../public/assets/images/high_order.png"
                            alt="high_order"
                            className="img-fluid"
                            width={50}
                            height={50}
                          />
                          <p>Online Consultation</p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div className="service__provide_tab">
                          <Image
                            // src="../public/assets/images/fast_quick.png"
                            alt="fast_quick"
                            className="img-fluid"
                            width={50}
                            height={50}
                          />
                          <p>Building Reputation</p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div className="service__provide_tab">
                          <Image
                            // src="../public/assets/images/offer_deal.png"
                            alt="offer-deal"
                            className="img-fluid"
                            width={50}
                            height={50}
                          />
                          <p>Maintaining Documents</p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div  className="service__provide_tab">
                          <Image
                            // src="../public/assets/images/gps.png"
                            alt="gps"
                            className="img-fluid"
                            width={50}
                            height={50}
                          />
                          <p>Level Playing Field</p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div  className="service__provide_tab">
                          <Image
                            // src="../public/assets/images/customer_food.png"
                            alt="customer_food"
                            className="img-fluid"
                            width={50}
                            height={50}
                          />
                          <p>
                            Wider <br />
                            Exposure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Customers can order food online with just one click
                  </h3>
                  <p className="Title_para">
                    Since these apps allow customers to make precise choices of
                    foods and customize the orders, there is no chance of any
                    dispute about incorrect orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestiMonial />

      <FAQ />

      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: 'left' }}>
                  Would you like to launch a successful Lawyer website in the
                  market?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link href="/contact-us" className="contact_btn">
                  Contact us{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default LawyerWeb
