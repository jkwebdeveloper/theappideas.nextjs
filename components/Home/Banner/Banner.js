import React, { useState } from "react";

import bannerImg from "../../../public/assets/images/Banner/theappideassolutions.webp";
import Image from "next/image";
import GetAQuoteModal from "../../GetAQuoteModal";
import bg from "../../../public/assets/images/sec1-background.webp";

const Banner = ({ setOpenModal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: `url(${bg.src})`,
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        paddingTop: "110px",
        paddingBottom: "100px",
      }}
    >
      <div style={{ position: "relative" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-5 col-md-12">
              <div className="slider-img">
                <Image
                  src={bannerImg}
                  alt=""
                  width={512}
                  height={497}
                  style={{
                    width: "100%",
                    // height: "25vw",
                    objectPosition: "center",
                    objectFit: "contain",
                    aspectRatio: "1/1",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <h1 className="slider-heading-dec">
                Web and Mobile App Development Company - The App Ideas
              </h1>
              <p className="slider-dec">
                Are you deciding to make an app or an e-commerce store or even a
                website? We are right here for your service. Our custom mobile
                application development company specializes in crafting
                cutting-edge mobile applications designed for sustained user
                engagement and optimal business conversion. Our proficiency
                extends from the development of intricate enterprise apps to a
                diverse range of on demand app ideas, ensuring that every niche
                and category is met with expertise.
              </p>
              <p className="slider-dec">
                With decades of experience in e-commerce development, we have
                been pivotal in shaping numerous online brands. Our commitment
                lies in constructing well-equipped, customer-centric e-commerce
                stores with features that enhance user experience and contribute
                to consistent business conversion. Additionally, We stay abreast
                of the latest web development technologies, employing our
                expertise to build sophisticated, feature-rich solutions across
                various business-niches. Whether it's app development, website
                development, offshore software development, on demand app
                development, clone application development or other cutting-edge
                technologies. We are well-versed in delivering
                performance-driven solutions that align with your vision and
                goals.
              </p>
              <br />
              <div className="silder-btn">
                <div
                  className="slider-get_btn"
                  onClick={() => setOpenModal(true)}
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
    </section>
  );
};

export default Banner;
