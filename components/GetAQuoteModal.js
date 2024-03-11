// import { Country } from "country-state-city";
import React, { useRef, useState } from "react";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";
import ValidationSchema from "./schemas";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import success from "../public/assets/images/successfull.json";

import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import Link from "next/link";
import { Navigate } from "react-router-dom";

// localhost Key
const SITE_KEY = "6LflLYApAAAAAA94dzKNSl35WtkPT9X6VfLH5p_f";

const GetAQuoteModal = ({ setOpenModal, openModal, handleCloseModal }) => {
  const [loading, setLoading] = useState(false);
  // const [countries, setCountries] = useState([]);
  const [recaptchavalue, SetRecaptchaValue] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const onChange = (value) => {
    SetRecaptchaValue(value);
    console.log(value, "recaptcha");
  };
  const captchaRef = useRef();

  const { getAQuoteSchema } = ValidationSchema();

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
    resolver: yupResolver(getAQuoteSchema),
    // defaultValues: {}
  });

  const handlePost = (values) => {
    console.log(values);
    setLoading(true);
    axios("https://the-app-ideas.onrender.com/api/contact", {
      method: "post",
      data: {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
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
        setSuccessModal(true);
        toast.success(res?.data?.message, {
          zIndex: "9999px",
        });
        reset();
        Navigate("/")
        captchaRef.current?.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "=========error======");
        toast.error("Phone is invalid", { duration: 3000 });
        setLoading(false);
      });
  };

  return (
    <ReactModal
      isOpen={openModal}
      preventScroll={true}
      shouldCloseOnEsc={true}
      onRequestClose={handleCloseModal}
      contentLabel="Contact us Modal"
      // appElement={document.getElementById("root")}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          zIndex: "9999",
        },
        content: { zIndex: "9999" },
      }}
    >
      <section className="contact_form_section">
        <div className="container">
          <div className="contact_form_box">
            {/* <div className="hover_color_bubble" /> */}
            <div className="comtact_header">
              <AiFillCloseCircle
                size={25}
                onClick={handleCloseModal}
                style={{ float: "right", cursor: "pointer" }}
              />
              <h2>Contact us</h2>
            </div>
            <div className="contact_body">
              <form onSubmit={handleSubmit(handlePost)}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    {...register("name")}
                  />
                  <span className="required_error">
                    {errors?.name?.message}
                  </span>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <span className="required_error">
                    {errors?.email?.message}
                  </span>
                </div>
                <div className="mb-3">
                  <PhoneInput
                    country={"in"}
                    countryCodeEditable={false}
                    enableSearch={true}
                    inputProps={{
                      name: "phoneNumber",
                    }}
                    onChange={(value) =>
                      setValue("phoneNumber", "+".concat(value).trim())
                    }
                    value={getValues().phoneNumber}
                    inputStyle={{
                      width: "100%",
                      padding: "1.2rem 0 1.2rem 3rem",
                    }}
                    disabled={loading}
                  />
                  <span className="required_error">
                    {errors?.phoneNumber?.message}
                  </span>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="projectRequirement"
                    rows={3}
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
                  name="recaptchaToken"
                  onChange={onChange}
                  ref={captchaRef}
                />
                {recaptchavalue !== "" ? null : (
                  <span className="required_error">
                    {errors?.recaptchaToken?.message}
                  </span>
                )}
                <div className="text-center">
                  <button
                    type="submit"
                    className="submit__btn"
                    onSubmit={handleSubmit}
                  >
                    {loading ? "loading..." : "submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {successModal && (
            <div
              className="get_a_quote_modal"
              onClick={() => setSuccessModal(false)}
            >
              <div className="modal_box">
                <Link href="/">
                  <AiOutlineClose
                    onClick={() => setSuccessModal(false)}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      right: "30px",
                    }}
                  />
                </Link>
                <div className="lottie">
                  <Lottie
                    animationData={success}
                    loop={true}
                    style={{
                      width: "200px",
                      margin: "0 auto",
                    }}
                  />
                </div>
                <div>
                  <p>Thanks for submitting an Enquiry</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </ReactModal>
  );
};

export default GetAQuoteModal;
