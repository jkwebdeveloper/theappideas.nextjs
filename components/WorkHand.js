import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import bg1 from "../public/assets/images/Portfolio/work-we-had-bg-one.webp";
import bg2 from "../public/assets/images/Portfolio/work-we-had-bg-two.webp";
import bg3 from "../public/assets/images/Portfolio/work-we-had-bg-three.webp";

const Data = [
  {
    id: 1,
  },
];

const WorkHand = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box"
                style={{
                  backgroundImage: `url(${bg1.src})`,
                  objectFit: "cover",
                  display: "block",
                  width: "100%",
                  height: "400px",
                  backgroundSize: "cover !important",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center !important",
                  boxShadow: "0 10px 6px -6px #000",
                  transition: "0.1s ease",
                }}
              >
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Covid</h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link"> </div>
                          <div className="work_head_item">Android App</div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">IOS</div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image
                        width={492}
                        height={300}
                        data-aos="fade-left"
                        src={require("../public/assets/images/Portfolio/Device-Image-one.webp")}
                        alt="Device-Image-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box work_head_box_one"
                style={{
                  backgroundImage: `url(${bg2.src})`,
                  objectFit: "cover",
                  display: "block",
                  width: "100%",
                  height: "400px",
                  backgroundSize: "cover !important",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center !important",
                  boxShadow: "0 10px 6px -6px #000",
                  transition: "0.1s ease",
                }}
              >
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Paddock </h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link"> </div>
                          <div className="work_head_item">Android App</div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">Flutter</div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">IOS</div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image
                        width={492}
                        height={300}
                        data-aos="fade-left"
                        src={require("../public/assets/images/Portfolio/Device-Image-two.webp")}
                        alt="Device-Image-two"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box"
                style={{
                  backgroundImage: `url(${bg3.src})`,
                  objectFit: "cover",
                  display: "block",
                  width: "100%",
                  height: "400px",
                  backgroundSize: "cover !important",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center !important",
                  boxShadow: "0 10px 6px -6px #000",
                  transition: "0.1s ease",
                }}
              >
                <div className="work_head_box_link"></div>
                <div className="row w-100">
                  <div className="work_head_box_link"></div>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <div className="work_head_box_link"></div>
                    <div className="work_head_lft">
                      <div className="work_head_box_link">
                        <h2>Food Wastage </h2>
                      </div>
                      <ul className="ps-0">
                        <div className="work_head_box_link"></div>
                        <li>
                          <div className="work_head_box_link"> </div>
                          <div className="work_head_item">Android App</div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">IOS</div>
                        </li>
                        <li>
                          {" "}
                          <div className="work_head_item">
                            Mobile Application Development
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <Image
                        width={492}
                        height={300}
                        data-aos="fade-left"
                        src={require("../public/assets/images/Portfolio/Device-Image-three.webp")}
                        alt="Device-Image-three"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkHand;
