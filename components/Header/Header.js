import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowRightSLine, RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Header = ({ setOpenModal }) => {
  const [sticky, setSticky] = useState("");
  const [openmenu, setOpenMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(false);

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 80 ? "sticked" : "";
    setSticky(stickyClass);
  };
  return (
    <header
      className={`header__section fixed-top ${sticky}`}
      data-scrollto-offset={0}
    >
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link
              href="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Image
                width={180}
                height={67}
                src={require("../../public/assets/images/Header/logo.png")}
                alt="logo"
                className="img-fluid"
                // style={{ height: '60px ' }}
              />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            {/* company */}
            <li>
              <Link href="/" className="desktop-item">
                Company <MdKeyboardArrowDown />
              </Link>

              <input type="checkbox" id="showMega" />

              <label
                htmlFor="showMega"
                className="mobile-item"
                style={{ paddingLeft: "10px" }}
              >
                Company <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <Link href="/about-us/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <Image
                            src={require("../../public/assets/images/Header/Company/About Us.gif")}
                            width={36}
                            height={36}
                            alt="About-us"
                            className="img-fluid"
                          />{" "}
                          About Us
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link href="/our-process/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <Image
                            src={require("../../public/assets/images/Header/Company/Our Process.gif")}
                            width={36}
                            height={36}
                            alt="Our-Team"
                            className="img-fluid"
                          />{" "}
                          Our Process
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link href="/our-team/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <Image
                            src={require("../../public/assets/images/Header/Company/Our Team.gif")}
                            width={36}
                            height={36}
                            alt="Our-Team"
                            className="img-fluid"
                          />{" "}
                          Our Team
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <Link href="/testimonial/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <Image
                            src={require("../../public/assets/images/Header/Company/Testimonial.gif")}
                            width={36}
                            height={36}
                            alt="Testamonials"
                            className="img-fluid"
                          />
                          Testimonial
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link href="/careers/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <Image
                            src={require("../../public/assets/images/Header/Company/Careers.gif")}
                            width={36}
                            height={36}
                            alt="Carrers"
                            className="img-fluid"
                          />{" "}
                          Careers
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link href="/life-at-tai/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <Image
                            src={require("../../public/assets/images/Header/Company/Life at TAI.gif")}
                            width={36}
                            height={36}
                            alt="Life-at-TAI"
                            className="img-fluid"
                          />{" "}
                          Life at TAI
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <Link
                          href="/careers/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Join Our Team</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* services */}
            <li>
              <Link href="/">
                <div className="desktop-item">
                  Services <MdKeyboardArrowDown />{" "}
                </div>
              </Link>
              <input type="checkbox" id="showMega1" />
              <label
                htmlFor="showMega1"
                className="mobile-item"
                style={{ paddingLeft: "10px" }}
              >
                Services <MdKeyboardArrowDown />{" "}
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <Link
                      href="/mobile-app-development/"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          className="img-fluid"
                          src={require("../../public/assets/images/Header/Services/Mobile App Development.gif")}
                          alt="Mobile-App-Development"
                        />
                        Mobile App Development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link href="/android-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Android App Development
                        </li>
                      </Link>
                      <Link href="/iphone-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IPhone App Development
                        </li>
                      </Link>
                      <Link href="/ipad-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IPad App Development
                        </li>
                      </Link>
                      <Link href="/react-native-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          React Native Development
                        </li>
                      </Link>

                      <Link href="/iot-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IOT App Development
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="row">
                    <Link
                      href="/digital-marketing-agency/"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          src={require("../../public/assets/images/Header/Services/Digital Marketing Agency.gif")}
                          alt="Digital-Marketing-Agency"
                          className="img-fluid"
                        />{" "}
                        Digital Marketing Agency
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link href="/seo/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Search Engine Optimization
                        </li>
                      </Link>
                      <Link href="/social-media-marketing/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Social Media Marketing
                        </li>
                      </Link>
                      <Link href="/aso/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          App Store Optimization
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link
                      href="/e-commerce-website-development/"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          className="img-fluid"
                          src={require("../../public/assets/images/Header/Services/E-commerce website Development.gif")}
                          alt="E-commerce-website-Development"
                        />{" "}
                        E-commerce Development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link href="/shopify-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Shopify Development
                        </li>
                      </Link>
                      <Link href="/magento-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Magento Development
                        </li>
                      </Link>
                      <Link href="/joomla-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Joomla Development{" "}
                        </li>
                      </Link>
                      <Link href="/drupal-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Drupal Development{" "}
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link
                      href="/web-development/"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          className="img-fluid"
                          src={require("../../public/assets/images/Header/Services/Web Development.gif")}
                          alt="Web-Development"
                        />{" "}
                        Web Development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link href="/wordpress-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          WordPress Development
                        </li>
                      </Link>
                      <Link href="/php-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          PHP Development
                        </li>
                      </Link>
                      <Link href="/angular-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Angular Development
                        </li>
                      </Link>
                      <Link href="/webflow-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Webflow Development
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div
                  className="content_last content "
                  style={{
                    justifyContent: "flex-start",
                    padding: "10px 13px",
                  }}
                >
                  <div
                    className="row responsive_width"
                    style={{ width: "29%" }}
                  >
                    <Link
                      href="/software-development/"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          className="img-fluid"
                          src={require("../../public/assets/images/Header/Services/Software Development.gif")}
                          alt="Software-Development"
                        />
                        software development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link href="/asp-net-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Asp.Net Development
                        </li>
                      </Link>
                      <Link href="/dotnetnuke-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          DotNetNuke Development
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "28%" }}
                  >
                    <Link
                      href="/designing-services/"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          className="img-fluid"
                          src={require("../../public/assets/images/Header/Services/Designing Services.gif")}
                          alt="Designing-Services"
                        />
                        Designing services
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link href="/graphics-design/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Graphics Design
                        </li>
                      </Link>
                      <Link href="/mobile-app-design/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Mobile App Design
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "28%" }}
                  >
                    <div>
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          className="img-fluid"
                          src={require("../../public/assets/images/Header/Services/Other Services.gif")}
                          alt="Other-Services"
                        />
                        Other Services
                      </h4>
                    </div>
                    <ul className="mega-links">
                      <Link href="/startup-services/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Startup Services
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <Link
                          href="/contact-us/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* hire us */}
            <li>
              <Link
                href="/hire-us/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="desktop-item">
                  Hire Us <MdKeyboardArrowDown />{" "}
                </div>
              </Link>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                <Link
                  href="/hire-us/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div>Hire Us</div>
                </Link>{" "}
                <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <Image
                        width={36}
                        height={36}
                        className="img-fluid"
                        src={require("../../public/assets/images/Header/Hire Us/Hire Mobile App Developer.gif")}
                        alt="Hire-Mobile-App-Development"
                      />
                      Hire Mobile App Development
                    </h4>
                    <ul className="mega-links">
                      <Link href="/hire-ios-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire IOS Developer
                        </li>
                      </Link>
                      <Link href="/hire-android-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Android Developer
                        </li>
                      </Link>
                      <Link href="/hire-react-native-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire React Native Developer
                        </li>
                      </Link>
                      <Link href="/hire-flutter-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Flutter Developer
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <Image
                        width={36}
                        height={36}
                        className="img-fluid"
                        src={require("../../public/assets/images/Header/Hire Us/Hire Web Developer.gif")}
                        alt="Hire-Web-Development"
                      />
                      Hire Web Developer
                    </h4>
                    <ul className="mega-links">
                      <Link href="/hire-laravel-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Laravel Developer
                        </li>
                      </Link>
                      <Link href="/hire-wordpress-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire WordPress Developer
                        </li>
                      </Link>
                      <Link href="/hire-nodejs-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Node.js Developer
                        </li>
                      </Link>
                      <Link href="/hire-codeigniter-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire CodeIgniter Developer
                        </li>
                      </Link>
                      <Link href="/hire-php-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire PHP Developers
                        </li>
                      </Link>
                      <Link href="/hire-python-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Python Developer
                        </li>
                      </Link>
                      <Link href="/hire-reactjs-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire React JS Developer
                        </li>
                      </Link>
                      <Link href="/hire-angular-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Angular 2 Developer
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <Image
                        width={36}
                        height={36}
                        className="img-fluid"
                        src={require("../../public/assets/images/Header/Hire Us/Hire E-commerce Developer.gif")}
                        alt="Hire-Ecommerce-Developer"
                      />
                      Hire E-commerce Developer
                    </h4>
                    <ul className="mega-links">
                      <Link href="/hire-shopify-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Shopify Development
                        </li>
                      </Link>
                      <Link href="/hire-magento-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Magento 2 Development
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <Image
                        width={36}
                        height={36}
                        className="img-fluid"
                        src={require("../../public/assets/images/Header/Hire Us/Hire Designer.gif")}
                        alt="Hire-Designer"
                      />
                      Hire Designer
                    </h4>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>
                          Are you looking for an experience resource for your
                          project?
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <Link
                          href="/hire-us/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">
                            Hire Our Developer{" "}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* solutions */}
            <li>
              <Link href="/solutions/">
                <div className="desktop-item">
                  Solutions <MdKeyboardArrowDown />{" "}
                </div>
              </Link>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                <Link
                  href="/solutions/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div>Solutions</div>
                </Link>{" "}
                <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div
                    className="row responsive_width"
                    style={{ width: "32%" }}
                  >
                    <Link href="/">
                      <h4>
                        {" "}
                        <Image
                          width={36}
                          height={36}
                          className="img-fluid"
                          src={require("../../public/assets/images/Header/Solutions/Delivery App.gif")}
                          alt="Delivery-App"
                        />
                        Delivery Apps
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link href="/food-delivery-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          {/* <IoMdArrowDropright /> */}
                          Food Delivery App Development
                        </li>
                      </Link>
                      <Link href="/courier-pickup-management-solution/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Courier Pickup Management Solution
                        </li>
                      </Link>
                      <Link href="/grocery-app-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Grocery App Development
                        </li>
                      </Link>{" "}
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "32%" }}
                  >
                    <h4>
                      {" "}
                      <Image
                        width={36}
                        height={36}
                        className="img-fluid"
                        src={require("../../public/assets/images/Header/Solutions/On Demand Apps.gif")}
                        alt="On-Demand-Apps"
                      />
                      On-Demand Apps
                    </h4>
                    <ul className="mega-links">
                      <Link href="/taxi-booking-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Taxi Booking App Development
                        </li>
                      </Link>
                      <Link href="/doctor-hiring-app-solution/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Doctor Hiring App Solution
                        </li>
                      </Link>
                      <Link href="/security-app-solution/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Security App Solution
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "32%" }}
                  >
                    <h4>
                      {" "}
                      <Image
                        width={36}
                        height={36}
                        className="img-fluid"
                        src={require("../../public/assets/images/Header/Solutions/Popular Solutions.gif")}
                        alt="Popular-Solutions"
                      />
                      Popular Solutions
                    </h4>
                    <ul className="mega-links">
                      <Link href="/e-commerce-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          eCommerce App Development
                        </li>
                      </Link>
                      <Link href="/e-learning-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          E-learning App Development
                        </li>
                      </Link>
                      <Link href="/dating-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Dating App Development
                        </li>
                      </Link>
                      <Link href="/driver-tracking-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Driver Tracking App Development
                        </li>
                      </Link>
                      <Link href="/salon-service-app/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Salon Service App
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>
                          Would you like to know more about our ready made
                          solution?
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <Link
                          href="/contact-us/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* portoflio */}
            <li>
              <Link
                href="/portfolio/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Portfolio
              </Link>
            </li>
            {/* contact us */}
            <li>
              <Link
                href="/contact-us/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Link>
            </li>
            {/* blog */}
            <li>
              <Link
                href="/blog/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Blog
              </Link>
            </li>
            {/* get a quote */}
            <li
              onClick={() => setOpenModal(true)}
              style={{ cursor: "pointer" }}
            >
              <div className="quote_btn btn-1 hover-filled-opacity close-btn">
                <span>GET A QUOTE</span>
              </div>
            </li>
          </ul>

          {/* =============================== Mobile View start =============================== */}

          <div
            className="header_mobile_menu header_menu_lft"
            style={{ left: openmenu ? "0" : "-100%" }}
          >
            <div className="header_mobile_top">
              <Link
                href="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Image
                  width={120}
                  height={45}
                  className="img-fluid"
                  src={require("../../public/assets/images/Header/logo.png")}
                  alt="logo"
                  // style={{ height: '60px ' }}
                />
              </Link>
              <Link href="/" className="mobile_menu_close_btn">
                <AiOutlineClose onClick={() => setOpenMenu(false)} />
              </Link>
            </div>
            <div className="sidebar-nav">
              <div className="nav">
                <ul className="nav_ul">
                  <li className="nav_ul_li">
                    <Link href="/">COMPANY</Link>
                    {openCategory === "company" ? (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowUp
                          onClick={() => setOpenCategory(null)}
                        />
                      </Link>
                    ) : (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowDown
                          onClick={() => setOpenCategory("company")}
                        />
                      </Link>
                    )}
                    
                      <ul
                        className={`sub-menu company_sub_menu ${openCategory === "company" ? "mobile_menu_open" : "mobile_menu_close"}`}
                        id="company_sub_menu_id"
                        
                      >
                        <li>
                          <Link
                            href="/about-us"
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            <Image
                              width={36}
                              height={36}
                              className="img-fluid"
                              src={require("../../public/assets/images/Header/Company/About Us.gif")}
                              alt="About-us"
                            />{" "}
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-process"
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            <Image
                              width={36}
                              height={36}
                              className="img-fluid"
                              src={require("../../public/assets/images/Header/Company/Our Process.gif")}
                              alt="Our-Team"
                            />{" "}
                            Our Process
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/our-team"
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            <Image
                              width={36}
                              height={36}
                              className="img-fluid"
                              src={require("../../public/assets/images/Header/Company/Our Team.gif")}
                              alt="Our-Team"
                            />{" "}
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/testimonial"
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            <Image
                              width={36}
                              height={36}
                              className="img-fluid"
                              src={require("../../public/assets/images/Header/Company/Testimonial.gif")}
                              alt="Testamonials"
                            />
                            Testimonial
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/careers"
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            <Image
                              width={36}
                              height={36}
                              className="img-fluid"
                              src={require("../../public/assets/images/Header/Company/Careers.gif")}
                              alt="Carrers"
                            />{" "}
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/life-at-tai"
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            <Image
                              width={36}
                              height={36}
                              className="img-fluid"
                              src={require("../../public/assets/images/Header/Company/Life at TAI.gif")}
                              alt="Life-at-TAI"
                            />{" "}
                            Life At TAI
                          </Link>
                        </li>
                      </ul>
                
                  </li>
                  <li className="nav_ul_li">
                    <Link href="/">SERVICE</Link>
                    {openCategory === "service" ? (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowUp
                          onClick={() => setOpenCategory(null)}
                        />
                      </Link>
                    ) : (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowDown
                          onClick={() => setOpenCategory("service")}
                        />
                      </Link>
                    )}
                    {openCategory === "service" ? (
                      <ul className="sub-menu" id="sub-menu">
                        <li>
                          <Link
                            href="/mobile-app-development"
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                          >
                            MOBILE APP DEVELOPMENT
                          </Link>
                          {openSubCategory === "mobileappdev" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("mobileappdev")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "mobileappdev" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/android-app-development">
                                  Android App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/iphone-app-development">
                                  Iphone App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/ipad-app-development">
                                  IPad App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/react-native-development">
                                  React Native Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/iot-app-development">
                                  IOT App Development
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/digital-marketing-agency">
                            DIGITAL MARKETING AGENCY
                          </Link>
                          {openSubCategory === "digital" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() => setOpenSubCategory("digital")}
                              />
                            </Link>
                          )}
                          {openSubCategory === "digital" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/seo">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Search Engine Optimization
                                </Link>
                              </li>
                              <li>
                                <Link href="/social-media-marketing">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Social Media Marketing
                                </Link>
                              </li>
                              <li>
                                <Link href="/aso">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  App Store Optimization
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/e-commerce-website-development">
                            E-COMMERCE WEBSITE DEVELOPMENT
                          </Link>
                          {openSubCategory === "ecommerce" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() => setOpenSubCategory("ecommerce")}
                              />
                            </Link>
                          )}
                          {openSubCategory === "ecommerce" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/shopify-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Shopify Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/magento-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Magento Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/joomla-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Joomla Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/drupal-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Drupal Development
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/web-development">WEB DEVELOPMENT</Link>
                          {openSubCategory === "webdevelopment" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("webdevelopment")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "webdevelopment" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/wordpress-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  WordPress Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/php-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  PHP Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/angular-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Angular Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/webflow-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Webflow Development
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/software-development">
                            SOFTWARE DEVELOPMENT
                          </Link>
                          {openSubCategory === "softwaredevelopment" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("softwaredevelopment")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "softwaredevelopment" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/asp-net-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Asp.Net Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/dotnetnuke-development">
                                  <i className="fa fa-angle-right right__arrow" />
                                  DotNetNuke Development
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/designing-services">
                            DESIGNING SERVICES
                          </Link>
                          {openSubCategory === "designing" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() => setOpenSubCategory("designing")}
                              />
                            </Link>
                          )}
                          {openSubCategory === "designing" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/graphics-design">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Graphic Design
                                </Link>
                              </li>
                              <li>
                                <Link href="/mobile-app-design">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Mobile App Design
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/">OTHER SERVICE</Link>
                          {openSubCategory === "otherservice" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("otherservice")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "otherservice" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/startup-services">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Startup Services
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav_ul_li">
                    <Link href="/hire-us">HIRE US</Link>
                    {openCategory === "hireus" ? (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowUp
                          onClick={() => setOpenCategory(null)}
                        />
                      </Link>
                    ) : (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowDown
                          onClick={() => setOpenCategory("hireus")}
                        />
                      </Link>
                    )}
                    {openCategory === "hireus" && (
                      <ul className="sub-menu" id="sub-menu">
                        <li>
                          <Link href="/">HIRE MOBILE APP DEVELOPMENT</Link>
                          {openSubCategory === "hiremobileapp" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("hiremobileapp")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "hiremobileapp" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/hire-ios-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire IOS Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-android-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Android Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-react-native-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire React Native Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-flutter-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Flutter Developer
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/">HIRE WEB DEVELOPER</Link>
                          {openSubCategory === "hiremobileweb" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("hiremobileweb")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "hiremobileweb" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/hire-laravel-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Laravel Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-wordpress-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Wordpress Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-nodejs-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Node.Js Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-codeigniter-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Codelgniter Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-php-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire PHP Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-python-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Paython Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-reactjs-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire React JS Developer
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-angular-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Angular 2 Developer
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/">HIRE E-COMMERCE DEVELOPER</Link>
                          {openSubCategory === "hiremobilecommerce" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("hiremobilecommerce")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "hiremobilecommerce" ? (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/hire-shopify-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Shopify Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/hire-magento-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Hire Magento 2 Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Joomla Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Drupal Development
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <Link href="/">HIRE DESIGNER</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="nav_ul_li">
                    <Link href="/solutions">SOLUTIONS</Link>
                    {openCategory === "solutions" ? (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowUp
                          onClick={() => setOpenCategory(null)}
                        />
                      </Link>
                    ) : (
                      <Link className="menu-toggle" href="/">
                        <MdKeyboardArrowDown
                          onClick={() => setOpenCategory("solutions")}
                        />
                      </Link>
                    )}
                    {openCategory === "solutions" ? (
                      <ul className="sub-menu" id="sub-menu">
                        <li>
                          <Link href="/">DELIVERY APPS</Link>
                          {openSubCategory === "deliveryapp" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() =>
                                  setOpenSubCategory("deliveryapp")
                                }
                              />
                            </Link>
                          )}
                          {openSubCategory === "deliveryapp" && (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/food-delivery-app-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Food Delivery App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/courier-pickup-management-solution">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Courier Pickup Management Solution
                                </Link>
                              </li>
                              <li>
                                <Link href="/grocery-app-developer">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Grocery App Development
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <Link href="/">ON-DEMAND APPS</Link>
                          {openSubCategory === "ondemand" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() => setOpenSubCategory("ondemand")}
                              />
                            </Link>
                          )}
                          {openSubCategory === "ondemand" && (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/taxi-booking-app-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Taxi Booking App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/doctor-hiring-app-solution">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Doctor Hiring App Solution
                                </Link>
                              </li>
                              <li>
                                <Link href="/security-app-solution">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Security App Solution
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <Link href="/">POPULAR SOLUTIONS</Link>
                          {openSubCategory === "popular" ? (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowUp
                                onClick={() => setOpenSubCategory(null)}
                              />
                            </Link>
                          ) : (
                            <Link className="menu-toggle" href="/">
                              <MdKeyboardArrowDown
                                onClick={() => setOpenSubCategory("popular")}
                              />
                            </Link>
                          )}
                          {openSubCategory === "popular" && (
                            <ul className="sub-menu">
                              <li>
                                <Link href="/e-commerce-app-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  ECommerce App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/e-learning-app-development">
                                  <i className="fa fa-angle-right right__arrow" />
                                  E-Learning App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/dating-app-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Dating App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/driver-tracking-app-development">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Driver Tracking App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/salon-service-app">
                                  <i className="fa fa-angle-right right__arrow" />{" "}
                                  Salon Service App
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <Link href="/">HIRE DESIGNER</Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav_ul_li">
                    <Link href="/portfolio">PORTFOLIO</Link>
                  </li>
                  <li className="nav_ul_li">
                    <Link href="/contact-us">CONTACT US</Link>
                  </li>
                  <li className="nav_ul_li">
                    <Link href="/blog">BLOG</Link>
                  </li>
                  {/* <li
                      className="nav_ul_li"
                      onClick={() => setOpenModal(true)}
                    >
                      <Link className="get_a_btn">
                        GET A QUOTE
                      </Link>
                    </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile View End */}
          <label htmlFor="menu-btn" className="btn menu-btn">
            <RiMenu3Line
              style={{ fontSize: "27px" }}
              onClick={() => setOpenMenu(true)}
            />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
