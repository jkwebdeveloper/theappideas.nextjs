import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import GetAQuoteModal from "../../components/GetAQuoteModal";

function LifeTAI() {
  const [modalOpen, setModalOpen] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="Life at TAI - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen} />
      <section className="life_tai_banner">
        <div className="container">
          <div className="life_tai_content">
            <h1>Life at @App Ideas</h1>
            <p>
              Web and mobile app developer App Ideas pioneers innovative
              solutions in several fields. As the leading online and mobile app
              developer, we provide innovative and engaging solutions that
              enhance business. Our mobile app, internet, graphic design,
              e-commerce platform, Internet of Things application, and video
              game development services include cutting-edge user interfaces and
              immersive experiences. We adapt to the changing technological
              landscape and provide unrivaled solutions that place our clients
              at the forefront of digital innovation.
            </p>
          </div>
        </div>
      </section>
      <section className="life_section">
        <div className="container">
          <div className="life__title">
            <h1>Life at App Ideas</h1>
          </div>
          <div data-aos="fade-up" className="life_content_img text-center">
            <h1>LIFE @</h1>
            <Image
              src={require("../../public/assets/images/COMPANY/lifeAtTai/life-tai.png")}
              alt="life-tai"
              className="img-fluid my-4"
            />
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-5 col-sm-12 col-12">
              <div className="life_content_lft text-right">
                <h1>2022</h1>
                <h2>Ganesh Chaturthi</h2>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-5 col-md-7 col-sm-12 col-12"
            >
              <div className="life_img_rht">
                <Image
                  src={require("../../public/assets/images/COMPANY/lifeAtTai/Ganesh Chaturthi.gif")}
                  alt="ganesh-chaturthi"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              data-aos="fade-right"
              className="col-lg-5 col-md-7 col-sm-12 col-12 order-2 order-md-1 order-sm-2 order-xs-2"
            >
              <div className="life_img_rht life_img_rht_shift">
                <Image
                  src={require("../../public/assets/images/COMPANY/lifeAtTai/Christmas.gif")}
                  alt="christmas"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 col-12 order-1 order-md-2 order-sm-1 ">
              <div className="life_content_lft life_content_lft_shift">
                <h1>2022</h1>
                <h2>Christmas Day</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-5 col-sm-12 col-12">
              <div className="life_content_lft text-right">
                <h1>2022</h1>
                <h2>Diwali</h2>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-5 col-md-7 col-sm-12 col-12"
            >
              <div className="life_img_rht">
                <Image
                  src={require("../../public/assets/images/COMPANY/lifeAtTai/Diwali.gif")}
                  alt="diwali"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work_slider_section py-5">
        <div className="container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            direction={"horizontal"}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            style={{ padding: "2.5rem 0px 7.2rem" }}
          >
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img1-400x267.webp")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img10-400x267.png")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img2-400x267.webp")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img3-400x267.webp")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img4-400x267.webp")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img5-400x267.png")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img6-400x267.png")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img7-400x267.webp")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img8-400x267.png")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <Image
                    src={require("../../public/assets/images/COMPANY/lifeAtTai/slider/life_img9-400x267.png")}
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "7px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Would you like to build your career with us?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link href="/contact-us" className="text-decoration-none">
                  <div className="contact_btn" style={{ color: "#000" }}>
                    Contact us{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Whatsapp />
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer />
      {/* Contact Section End */}
    </>
  );
}

export default LifeTAI;
