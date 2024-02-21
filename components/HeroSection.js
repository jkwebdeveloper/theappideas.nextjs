import React, { useEffect, useRef, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Country } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { getFreeQuoteSchema } from "./schemas";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from 'next/image';

// Live Key
// const SITE_KEY = "6LcVilIpAAAAAGXDl8znTD4mG5OnO8T15UdoQmZX";

// localhost Key
const SITE_KEY = "6Ld9hlMpAAAAAECTno-3flFDva33LDHA-zb-1aXs";

const initialValues = {
  name: "",
  email: "",
  country: "",
  phoneNumber: "",
  projectRequirement: "",
  // recaptchaToken: ""
};

const HeroSection = ({
  title,
  des,
  list1,
  list2,
  list3,
  list4,
  service1,
  service2,
  service3,
  image1,
  image2,
  image3,
}) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recaptchavalue, SetRecaptchaValue] = useState("");

  const onChange = (value) => {
    SetRecaptchaValue(value);
    console.log(value, "recaptcha");
  };
  const captchaRef = useRef();

  const handlePost = (values) => {
    console.log(values, "values");
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
        console.log(res.data);
        SetRecaptchaValue("");
        captchaRef.current.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: getFreeQuoteSchema,
    onSubmit: (values, action) => {
      handlePost(values);
      console.log(values);
      // action.resetForm();
    },
  });

  return (
    <section className="common__banner__section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
            <div className="common_banner_lft">
              <h2>{title}</h2>
              <p>{des}</p>
              <ul className="common__banner__list ps-0 mt-4">
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list1}</span>
                </li>
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list2}</span>
                </li>
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list3}</span>
                </li>
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list4}</span>
                </li>
              </ul>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <Image width={36} height={36}
                      src={image1}
                      alt="Mobile-App-Development"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>{service1}</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <Image width={36} height={36}
                      src={image2}
                      alt="Mobile-Application-Development"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>{service2}</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <Image width={36} height={36}
                      src={image3}
                      alt="Mobile-Application-Development"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>{service3}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
            <div className="banner__contact__box">
              <div className="contact_header">
                <h4>Contact us</h4>
              </div>
              <div className="contact__body">
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-sm-12 my-3">
                        <input
                          type="name"
                          name="name"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Name*"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.name}
                        </span>
                        {errors.name && touched.name ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="email"
                          name="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          aria-label="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.email}
                        </span>
                        {errors.email && touched.email ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-6 h-100 select__country my-3">
                        <select
                          className="select2 w-100 h-100"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option label="country"></option>
                          {countries.map((country) => (
                            <option key={country.name} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.country}
                        </span>
                        {errors.country && touched.country ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-6 my-3">
                        <PhoneInput
                          countryCodeEditable={false}
                          enableSearch={true}
                          inputProps={{
                            name: "phoneNumber",
                          }}
                          inputStyle={{
                            width: "100%",
                            padding: "15px 0px 21px 50px",
                          }}
                          country={"in"}
                          placeholder="Phone Number"
                          value={values.phoneNumber}
                          onChange={(value, country, event, formattedValue) => {
                            // Set the formatted phone number value to the state using setFieldValue
                            setFieldValue("phoneNumber", formattedValue);
                          }}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.phoneNumber}
                        </span>
                        {errors.phoneNumber && touched.phoneNumber ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-12">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          name="projectRequirement"
                          placeholder="Project Requirement*"
                          defaultValue={""}
                          value={values.projectRequirement}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.projectRequirement}
                        </span>
                        {errors.projectRequirement &&
                        touched.projectRequirement ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
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
                      <div className="col-sm-12 text-center my-3">
                        <button type="submit" className="request__btn">
                          {loading ? "loading..." : "Request a FREE Quote"}
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
  );
};

export default HeroSection;
