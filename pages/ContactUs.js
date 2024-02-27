import React, { useRef, useState } from "react";
import { BsSkype } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineBehance } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { Country } from "country-state-city";
import { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import GetAQuoteModal from "../components/GetAQuoteModal";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// localhost Key
const SITE_KEY = "6LflLYApAAAAAA94dzKNSl35WtkPT9X6VfLH5p_f";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [recaptchavalue, SetRecaptchaValue] = useState("");


  const onChange = (value) => {
    SetRecaptchaValue(value);
  };
  const captchaRef = useRef();

  const handlePost = (values) => {
    console.log(values);
    setLoading(true);
    axios("https://the-app-ideas.onrender.com/api/contact", {
      method: "post",
      data: {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        skypeId: values.skypeId,
        budget: values.budget,
        country: values.country,
        projectRequirement: values.projectRequirement,
        recaptchaToken: recaptchavalue,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        SetRecaptchaValue("");

        toast.success(res.data.message);

        captchaRef.current.reset();
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  };

  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const ContactSchema = yup.object().shape({
    name: yup.string().required("This field is required !"),
    email: yup
      .string()
      .email("Invalid email")
      .required("This field is required"),
    phoneNumber: yup.string().required("Phone number is must be required"),
    projectRequirement: yup.string().required("This field is required"),
    skypeId: yup.string().required("This field is required"),
    country: yup.string().required("This field is required"),
  });
  const formref = useRef(null);
  const [countries, setCountries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  return (
    <>
      <Helmet title="Contact Us - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen}/>
      <section
        className="blog__section"
        style={{ paddingTop: "23px", paddingBottom: "70px" }}
      ></section>
      <section className="py-5">
        <div className="header-top-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 mt-4">
              <div className="contact__form_box">
                <h2>Get in touch with us</h2>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phoneNumber: "",
                    skypeId: "",
                    projectRequirement: "",
                    country: "",
                    budget: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, action) => {
                    console.log(values, "values");
                    handlePost(values);
                    action.resetForm();
                  }}
                >
                  {(formik) => (
                    <form
                      id="rform"
                      ref={formref}
                      onSubmit={formik.handleSubmit}
                      action=""
                    >
                      <div className="row g-3">
                        <div className="col-sm-6 mt-4">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            // aria-label="Name*"
                            id="rfrom"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            {formik.errors.name}
                          </span>
                          {formik.errors.name ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "#fff",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-6 mt-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            {formik.errors.email}
                          </span>
                          {formik.errors.name ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "#fff",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-6 mt-4">
                          <input
                            type="text"
                            name="skypeId"
                            className="form-control"
                            placeholder="skype ID"
                            aria-label="skype ID"
                            value={formik.values.skypeId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            {formik.errors.skypeId}
                          </span>
                          {formik.errors.name ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "#fff",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-6 h-100 mt-4">
                          <select
                            className="form-select"
                            style={{ width: "100%", padding: "6px" }}
                            name="budget"
                            value={formik.values.budget}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option label="Budget">Budget</option>
                            <option>Less Than 1000</option>
                            <option>1001 - 3000 USD</option>
                            <option>3001 - 5000 USD</option>
                            <option>5001 - 10000 USD</option>
                            <option>More Than 10000 USD</option>
                            <span
                              className="error"
                              style={{ color: "#fff", fontSize: "14px" }}
                            >
                              {formik.errors.budget}
                            </span>
                            {formik.errors.name ? (
                              <BiErrorCircle
                                style={{
                                  float: "right",
                                  marginTop: "5px",
                                  color: "#fff",
                                }}
                              />
                            ) : null}
                          </select>
                        </div>
                        <div className="col-sm-6 h-100 select__country mt-4">
                          <select
                            className="select2 w-100 h-100"
                            style={{ width: "100%", padding: "6px" }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="country"
                          >
                            <option label="Country"></option>
                            {countries.map((country) => (
                              <option
                                value={country.name}
                                label={country.name}
                                key={country.name}
                              />
                            ))}
                            <span
                              className="error"
                              style={{ color: "#fff", fontSize: "14px" }}
                            >
                              {formik.errors.country}
                            </span>
                            {formik.errors.name ? (
                              <BiErrorCircle
                                style={{
                                  float: "right",
                                  marginTop: "5px",
                                  color: "#fff",
                                }}
                              />
                            ) : null}
                          </select>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <PhoneInput
                            countryCodeEditable={false}
                            enableSearch={true}
                            inputProps={{
                              name: "phoneNumber",
                            }}
                            country={"in"}
                            placeholder="Phone Number"
                            value={formik.values.phoneNumber}
                            onChange={(value) =>
                              formik.setFieldValue("phoneNumber", value)
                            }
                            onBlur={formik.handleBlur}
                            inputStyle={{
                              width: "100%",
                              padding: "21px",
                              paddingLeft: "54px",
                            }}
                          />
                          <span
                            className="error"
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            {formik.errors.phoneNumber}
                          </span>
                          {formik.errors.phoneNumber ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "#fff",
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-12 mt-4">
                          <textarea
                            className="form-control h-100"
                            id="exampleFormControlTextarea1"
                            rows={5}
                            placeholder="Project Requirement*"
                            name="projectRequirement"
                            value={formik.values.projectRequirement}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: "#fff", fontSize: "14px" }}
                          >
                            {formik.errors.projectRequirement}
                          </span>
                          {formik.errors.projectRequirement ? (
                            <BiErrorCircle
                              style={{
                                float: "right",
                                marginTop: "5px",
                                color: "#fff",
                              }}
                            />
                          ) : null}
                        </div>
                        <ReCAPTCHA
                          style={{ padding: "15px 15px" }}
                          sitekey={SITE_KEY}
                          onChange={onChange}
                          ref={captchaRef}
                        />
                        <div className="col-sm-12 text-center mt-4">
                          <button type="submit" className="request__btn">
                            {loading ? "loading..." : "submit"}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
          

              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div
                className="other_contact_conection text-center"
                style={{ padding: "11px" }}
              >
                <h4>Other ways to connect</h4>
                <p>
                  Skype, Whatsapp, Email whatever works for you. We’ll be here.
                </p>
                <div className="contact__with__social">
                  <a href="skype:chirag4141">
                    <BsSkype style={{ marginRight: "15px" }} />
                    skype
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918866564279">
                    <BsWhatsapp style={{ marginRight: "15px" }} />
                    Whatsapp
                  </a>
                  <a href="mailto:contact@theappideas.com">
                    <GoMail style={{ marginRight: "15px" }} />
                    Email
                  </a>
                  <a href="tel:+918866564279">
                    <BsFillTelephoneFill style={{ marginRight: "15px" }} />
                    Phone
                  </a>
                </div>
                <div className="social__connection">
                  <h2>Socialize with us.</h2>
                  <a href="https://www.facebook.com/Theappideas/">
                    <RiFacebookFill />
                  </a>
                  <a href="https://www.linkedin.com/company/theappideas/">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.instagram.com/theappideas/">
                    <BsInstagram />
                  </a>
                  <a href="https://twitter.com/theappidea">
                    <BsTwitter />
                  </a>
                  <a href="https://www.youtube.com/channel/UC_18zGzO_zpXkKiy1WXi4oA">
                    <AiFillYoutube />
                  </a>
                  <a href="https://in.pinterest.com/theappidea/">
                    <FaPinterestP />
                  </a>
                  <a href="https://www.behance.net/theappidea">
                    <AiOutlineBehance />
                  </a>
                  <a href="https://dribbble.com/theappideas">
                    <BsDribbble />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Whatsapp/>
      <GetAQuoteModal       
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}/>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

      <Footer/>
  
    </>
  );
};

export default ContactUs;
