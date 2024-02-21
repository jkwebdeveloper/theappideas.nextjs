import React from "react";
import { MdLocationPin } from "react-icons/md";
import {
  BsDribbble,
  BsFillTelephoneFill,
  BsInstagram,
  BsSkype,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { RiArrowRightSLine, RiFacebookFill } from "react-icons/ri";

import appdeveloper from "../public/assets/images/Footer/app-development-img.svg";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { AiFillYoutube, AiOutlineBehance } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h5 className="footer_title">Get in Touch</h5>
              <p>
                <i className="location_map" aria-hidden="true">
                  <MdLocationPin />
                </i>
                <span>
                  FO-6, Raspan Arcade, Near Rajhans Cinema, Nikol-Naroda,
                  Ahmedabad-382350.
                </span>
              </p>
              <ul className="ms-2">
                <li>
                  <Link
                    href="mailto:contact@theappideas.com"
                    style={{ color: "black" }}
                  >
                    <i className="get_in_icons">
                      <GoMail style={{ color: "#000" }} />
                    </i>
                    <span>contact@theappideas.com</span>
                  </Link>
                </li>
                <li>
                  <Link href="tel:+918866564279" style={{ color: "black" }}>
                    <i className="get_in_icons">
                      <BsFillTelephoneFill style={{ color: "#000" }} />
                    </i>
                    <span>+91 8866564279</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://api.whatsapp.com/send?phone=918866564279"
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    <i className="get_in_icons">
                      <BsWhatsapp style={{ color: "rgb(36 184 28)" }} />
                    </i>
                    <span>Whats App Me</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="skype:chirag4141"
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    <i className="get_in_icons">
                      <BsSkype style={{ color: "rgb(43 158 255)" }} />
                    </i>
                    <span>Skype</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h5 className="footer_title">Quick Links</h5>
              <ul>
                <Link href="/">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Home
                  </li>
                </Link>
                <Link href="/about-us">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    About Us
                  </li>
                </Link>
                <Link href="/portfolio">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Portfolio
                  </li>
                </Link>
                <Link href="/blog">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Blog
                  </li>
                </Link>
                <Link href="/contact-us">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Contact Us
                  </li>
                </Link>
                <Link href="/testimonial">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Testimonial
                  </li>
                </Link>
                <Link href="/careers">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Careers{" "}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h5 className="footer_title">Services</h5>
              <ul>
                <Link href="/mobile-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Mobile App Development
                  </li>
                </Link>
                <Link href="/iot-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    IOT Development
                  </li>
                </Link>
                <Link href="/web-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Web Design &amp; Development
                  </li>
                </Link>
                <Link href="/e-commerce-website-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    E-commerce Development
                  </li>
                </Link>
                <Link href="/testimonial">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Testimonial
                  </li>
                </Link>
                <Link href="/hire-us">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Hire A Developer
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h5 className="footer_title">Solutions</h5>
              <ul>
                <Link href="/dating-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Dating App
                  </li>
                </Link>
                <Link href="/lawyer-website-solution">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Lawyer Website Solution
                  </li>
                </Link>
                <Link href="/driver-tracking-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Driver Tracking App Solution
                  </li>
                </Link>
                <Link href="/e-commerce-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Ecommerce App Solution
                  </li>
                </Link>
                <Link href="/e-learning-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Elearning Website Solution
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h5 className="footer_title">On Demand Apps</h5>
              <ul>
                <Link href="/taxi-booking-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Taxi Booking App
                  </li>
                </Link>
                <Link href="/security-app-solution">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Security Guard App
                  </li>
                </Link>
                <Link href="/food-delivery-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Food Delivery App
                  </li>
                </Link>
                <Link href="/doctor-hiring-app-solution">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{" "}
                    Doctor Hiring App
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div className="footer__box">
              <h5 className="footer_title">Awards and Accolades</h5>
              <div className="footer__awards">
                <ul>
                  <li>
                    <Link
                      href="https://www.goodfirms.co/company/the-app-ideas"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <Image width={65} height={65}
                        src={appdeveloper}
                        alt="app-development-img"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.freelancer.com/u/Theappideas"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <Image width={65} height={65}
                        src={require("../public/assets/images/Footer/freelancer-logo-1.webp")}
                        alt="freelancer-logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.peopleperhour.com/freelancer/technology-programming/app_ideas_infotech_pvt_ltd-panchal-full-stack-developer-web-app-znjmyqw"
                      target="_blank"
                      className="footer__awards_achor"
                    >
                      <Image width={65} height={65}
                        src={require("../public/assets/images/Footer/pph_new.webp")}
                        alt="pph_new"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.upwork.com/agencies/973127564812582912/"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <Image width={65} height={65}
                        src={require("../public/assets/images/Footer/upwork_new.webp")}
                        alt="upwork_new"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footer__awards_achor"></Link>
                    <div className="d-flex">
                      <Link href="#" className="footer__awards_achor">
                        <div>
                          <Image width={65} height={65}
                            src={require("../public/assets/images/Footer/clutch-logo.png")}
                            alt="app-development-img"
                            className="img-fluid"
                          />
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h5 className="footer_title">Follow us</h5>
              <div className="social__footer">
                <Link href="https://www.facebook.com/Theappideas/" target="_blank">
                  <RiFacebookFill />
                </Link>
                <Link href="https://twitter.com/theappidea" target="_blank">
                  <BsTwitter />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/theappideas/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UC_18zGzO_zpXkKiy1WXi4oA"
                  target="_blank"
                >
                  <AiFillYoutube />
                </Link>
              </div>
              <div className="social__footer social__footer_one">
                <Link href="https://dribbble.com/theappideas" target="_blank">
                  <BsDribbble />
                </Link>
                <Link href="https://www.behance.net/theappidea" target="_blank">
                  <AiOutlineBehance />
                </Link>
                <Link
                  href="https://www.instagram.com/theappideas_appdevelopment/"
                  target="_blank"
                >
                  <BsInstagram />
                </Link>
                <Link href="https://in.pinterest.com/theappidea/" target="_blank">
                  <FaPinterestP />
                </Link>
              </div>
              <div className="footer__sitemap my-3">
                <Link
                  href="/sitemap"
                  className="sitemap_btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
