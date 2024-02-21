import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { BsPlayCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialModal from "./TestimonialModal";

const TestiMonial = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => setOpenModal(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="testi-bg">
      <div className="container">
        <div className="testi-heading">
          <h4>Clients Testimonial</h4>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              data-aos="fade-right"
              className="box my-5"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/IBYadSoVF3c");
              }}
            >
              <BsPlayCircleFill
                size={60}
                color="white"
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "997",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "fit-content",
                }}
              />
              <div className="imgbox">
                <Image
                  src={require("../../public/assets/images/Testimonial/maxresdefault.webp")}
                  alt=""
                  width={300}
                  height={168}
                />
              </div>
              <h5>
                <span>Lloyd Medley</span>
              </h5>
              <br />
              
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12"
            onClick={() => {
              setOpenModal("https://www.youtube.com/embed/8IXVtVkGNl8");
            }}
          >
            <div
              data-aos="fade-left"
              className="box my-5"
              style={{ cursor: "pointer" }}
            >
              <BsPlayCircleFill
                size={60}
                color="white"
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "997",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "fit-content",
                }}
              />
              <div className="imgbox">
                <Image
                  src={require("../../public/assets/images/Testimonial/testimonial-2.webp")}
                  alt=""
                  width={300}
                  height={168}
                />
              </div>
              <h5>
                <span>Roberto Valdovinos</span>
              </h5>
              <br />
              
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12"
            onClick={() => {
              setOpenModal("https://www.youtube.com/embed/8IXVtVkGNl8");
            }}
          >
            <div
              data-aos="fade-left"
              className="box my-5"
              style={{ cursor: "pointer" }}
            >
              <BsPlayCircleFill
                size={60}
                color="white"
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "997",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "fit-content",
                }}
              />
              <div className="imgbox">
                <Image
                  src={require("../../public/assets/images/Testimonial/testimonial-2.webp")}
                  alt=""
                  width={300}
                  height={168}
                />
              </div>
              <h5>
                <span>Roberto Valdovinos</span>
              </h5>
              <br />
              
            </div>
          </div>
        </div>
        <div className="row">
          <div
            data-aos="fade-up"
            className="col-12"
            style={{ textAlign: "center" }}
          >
            <Link
              href="/testimonial"
              style={{ display: "inline-block" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="testi-btn">
                <button
                  type="button"
                  className="view-more-btn"
                  style={{
                    cursor: "pointer",
                    padding: "1rem 3rem",
                    fontWeight: "bold",
                  }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <TestimonialModal onClose={handleOnClose} visible={openModal} />
    </section>
  );
};

export default TestiMonial;
