import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';

const WorkSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
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
          //   style={{ padding: "2.5rem 0" }}
        >
          <SwiperSlide style={{ cursor: "pointer" }}>
            <div className="row">
              <div className="col-12">
                <Image
                  src={require("../public/assets/images/WebDev/snagpay.webp")}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <div className="row">
              <div className="col-12">
                <Image
                  src={require("../public/assets/images/WebDev/chefsclubcollective.webp")}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <div className="row">
              <div className="col-12">
                <Image
                  src={require("../public/assets/images/WebDev/gogenus.webp")}
                  style={{
                    width: "100%",
                    // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    // borderRadius: "10px",
                    // marginLeft: "10px",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <div className="row">
              <div className="col-12">
                <Image
                  src={require("../public/assets/images/WebDev/humanperformcenter.webp")}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <div className="row">
              <div className="col-12">
                <Image
                  src={require("../public/assets/images/WebDev/scoutnrent.webp")}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default WorkSlider;
