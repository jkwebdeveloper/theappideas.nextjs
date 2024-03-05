import React, { useEffect, useRef, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Country } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import banner from "../public/assets/images/MobileAppDev/bg.png";
import contact from "../public/assets/images/MobileAppDev/contact-bg.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationSchema from "./schemas";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";

// Live Key
// const SITE_KEY = "6LcVilIpAAAAAGXDl8znTD4mG5OnO8T15UdoQmZX";

// localhost Key
const SITE_KEY = "6Ld9hlMpAAAAAECTno-3flFDva33LDHA-zb-1aXs";

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

  const { getFreeQuoteSchema } = ValidationSchema();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(getFreeQuoteSchema),
  });

  const handlePost = (values) => {
    console.log(values, "values");
    setLoading(true);
    axios("https://the-app-ideas.onrender.com/api/contact", {
      method: "post",
      data: {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        country: values.country,
        projectRequirement: values.projectRequirement,
        recaptchaToken: recaptchavalue,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res, "=======res=======");
        SetRecaptchaValue("");
        toast.success(res?.data?.message, {
          zIndex: "9999px",
        });
        reset();
        captchaRef.current?.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "=========error======");
        toast.error("Phone is invalid", { duration: 3000 });
        setLoading(false);
      });
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  return (
    <>
      <section
        className="common__banner__section"
        style={{
          backgroundImage: `url(${banner.src})`,
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundPosition: "center",
          paddingTop: "140px",
          paddingBottom: "180px",
          width: "100%",
          height: "100%",
        }}
      >
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
                      <Image
                        width={36}
                        height={36}
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
                      <Image
                        width={36}
                        height={36}
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
                      <Image
                        width={36}
                        height={36}
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
              <div
                className="banner__contact__box"
                style={{
                  backgroundImage: `url(${contact.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundPosition: "center",
                  borderRadius: "15px",
                  maxWidth: "480px",
                  padding: "10px",
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                }}
              >
                <div className="contact_header">
                  <h4>Contact us</h4>
                </div>
                <div className="contact__body">
                  <div className="contact__form">
                    <form onSubmit={handleSubmit(handlePost)}>
                      <div className="row g-3">
                        <div className="col-sm-12 my-3">
                          <input
                            type="name"
                            name="name"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name*"
                            {...register("name")}
                          />
                          <span className="required_error">
                            {errors?.name?.message}
                          </span>
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
                            {...register("email")}
                          />
                          <span className="required_error">
                            {errors?.email?.message}
                          </span>
                        </div>
                        <div className="col-sm-6 h-100 select__country my-3">
                          <select
                            className="select2 w-100 h-100"
                            name="country"
                          >
                            <option label="country"></option>
                            {countries.map((country) => (
                              <option
                                value={country.name}
                                label={country.name}
                                key={country.name}
                                {...register("country")}
                              />
                            ))}
                          </select>
                          <span className="required_error">
                            {errors?.country?.message}
                          </span>
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
                            onChange={(value) =>
                              setValue("phoneNumber", "+".concat(value).trim())
                            }
                            value={getValues().phoneNumber}
                            disabled={loading}
                          />
                          <span className="required_error">
                            {errors?.phoneNumber?.message}
                          </span>
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            name="projectRequirement"
                            placeholder="Project Requirement*"
                            defaultValue={""}
                            {...register("projectRequirement")}
                          />
                          <span className="required_error">
                            {errors?.projectRequirement?.message}
                          </span>
                        </div>
                        <ReCAPTCHA
                          style={{ padding: "15px 15px" }}
                          sitekey={SITE_KEY}
                          onChange={onChange}
                          name="recaptchaToken"
                          ref={captchaRef}
                        />
                        {recaptchavalue !== "" ? null : (
                          <span className="required_error">
                            {errors?.recaptchaToken?.message}
                          </span>
                        )}
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default HeroSection;
