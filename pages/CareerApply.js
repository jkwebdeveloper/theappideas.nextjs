import React, { useEffect, useRef, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { BiErrorCircle } from "react-icons/bi";
import { useFormik } from "formik";
// import { careerApplySchema } from "./schemas";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import GetAQuoteModal from "../components/GetAQuoteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { careerApplySchema } from "../components/schemas";
const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  totalExperience: "",
  myFile: "",
  recaptchaToken: ""
};

const SITE_KEY = "6LflLYApAAAAAA94dzKNSl35WtkPT9X6VfLH5p_f";

const CareerApply = () => {
  const [careers, setCareers] = useState();
  const [loading, setLoading] = useState(true);
  const [recaptchavalue, SetRecaptchaValue] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const onChange = (value) => {
    console.log(value);
    SetRecaptchaValue(value);
  };
  const captchaRef = useRef();

  const handleGetApplyCareers = () => {
    axios
      .get(`https://the-app-ideas.onrender.com/api/career/${slug}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCareers(res.data.careers);
        // toast.success(res.data.message);
        // console.log(res.data.careers);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    slug && handleGetApplyCareers();
  }, [slug]);

  const handlePost = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("totalExperience", values.totalExperience);
    formData.append("myFile", values.myFile);
    formData.append("recaptchaToken", values.recaptchavalue);

    axios("https://the-app-ideas.onrender.com/api/career", {
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        SetRecaptchaValue("");

        toast.success(res.data.message);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

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
    validationSchema: careerApplySchema,
    onSubmit: (values, action) => {
      console.log(values)
      handlePost(values);
      action.resetForm();
    },
  });
  return (
    <>
      <Helmet title="The App Ideas Careers Application" />
      <Header setOpenModal={setModalOpen} />

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          Loading...
        </div>
      ) : (
        <>
          <section className="carrer_banner">
            <div className="carrer_banner_content">
              <h1>{careers?.title}</h1>
              <div className="career_location">
                <i>
                  <MdLocationPin />{" "}
                </i>

                <span>Ahmedabad</span>
              </div>
              <div className="carrer__content">
                <p>
                  {" "}
                  <strong>
                    5 days a week and we are allowing work from home for a
                    permanent basis.
                  </strong>
                </p>
                <p>
                  <b>Salary:-</b> {careers?.salary}
                </p>
                <p>
                  <b>Education Qualification:-</b> {careers?.education}
                </p>
                {/* <a href="#CarreContact" className="apply_btn">
              Apply Now
            </a> */}
              </div>
            </div>
          </section>
          <section className="roles_section">
            <div className="container">
              <div className="roles_title">
                <h2>Roles &amp; Responsibilities</h2>
              </div>
              {loading ? (
                <div
                  className="loading"
                  style={{ textAlign: "center", paddingTop: "100px" }}
                >
                  Loading...
                </div>
              ) : (
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    {careers?.responsibility
                      .slice(0, Math.ceil(careers.responsibility.length / 2))
                      .map((item) => (
                        <div className="roles_box" key={item}>
                          <p>
                            <FaRegDotCircle className="roles_box_icons" />
                            {item}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    {careers?.responsibility
                      .slice(
                        Math.ceil(careers.responsibility.length / 2),
                        careers.responsibility.length
                      )
                      .map((item) => (
                        <div className="roles_box" key={item}>
                          <p>
                            <FaRegDotCircle className="roles_box_icons" />

                            {item}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="roles_box_contact">
                    <p>
                      If you are interested for the above profile, you may send
                      your CV on mentioned email
                    </p>
                    <p>
                      If you do not find a suitable profile, you may kindly
                      share this information to your friends who are looking for
                      a change/good opportunity.
                    </p>
                    <h2>App Ideas Infotech PVT. LTD.</h2>
                    <p>
                      <i>
                        <MdLocationPin />
                      </i>
                      <span>
                        FO-6, Raspan Arcade, Near Rajhans Cinema,
                        <br />
                        Nikol-Naroda, Ahmedabad-382350.
                      </span>
                    </p>
                    <ul>
                      <li>
                        <i>
                          <BsTelephoneFill />
                        </i>
                        <span>7990138924</span>
                      </li>
                      <li>
                        <i>
                          <HiOutlineMail />
                        </i>
                        <span>trusha@theappideas.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="roles_section contents_sec" id="CarreContact">
            <div className="container">
              <div className="roles_title">
                <h2>Let us Know You Better</h2>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="career_mdl_rht">
                    <form onSubmit={handleSubmit}>
                      <div className="hover_color_bubble" />
                      <div className="mb-3">
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          placeholder="Full Name*"
                          id="rfrom"
                          value={values.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.fullName}
                        </span>
                        {errors.fullName && touched.fullName ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email* "
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
                      <div className="mb-3">
                        <PhoneInput
                          countryCodeEditable={false}
                          enableSearch={true}
                          inputProps={{
                            name: "phoneNumber",
                          }}
                          inputStyle={{
                            width: "100%",
                            padding: "21px 0px 21px 50px",
                          }}
                          country={"in"}
                          placeholder="Phone Number"
                          value={values.phoneNumber}
                          onChange={(value) =>
                            setFieldValue("phoneNumber", "+".concat(value).trim())
                          }
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
                      <div className="mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Total Experince In Years"
                          aria-label="totalExperience"
                          name="totalExperience"
                          value={values.totalExperience}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.totalExperience}
                        </span>
                        {errors.totalExperience && touched.totalExperience ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="upload-btn-wrapper">
                        <button type="button" className="Upload_Btn">
                          Upload Resume
                        </button>
                        <input
                          type="file"
                          style={{ cursor: "pointer" }}
                          name="myFile"
                          // value={values.cv}
                          // onChange={handleChange}
                          onChange={(e) => {
                            setFieldValue("myFile", e.target.files[0]);
                          }}
                          onBlur={handleBlur}
                          accept="application/pdf"
                        />
                      </div>
                      <span
                        className="error"
                        style={{ color: "red", fontSize: "14px" }}
                      >
                        {errors.myFile}
                      </span>
                      {errors.myFile && touched.myFile ? (
                        <BiErrorCircle
                          style={{
                            float: "right",
                            marginTop: "5px",
                            color: "red",
                          }}
                        />
                      ) : null}

                      <ReCAPTCHA
                        style={{ padding: "15px 15px" }}
                        sitekey={SITE_KEY}
                        onChange={onChange}
                        ref={captchaRef}
                        // value={values.recaptchaToken}
                      />
                      {recaptchavalue !== "" ? null : (
                      <span
                        className="error"
                        style={{ color: "red", fontSize: "13px" }}
                      >
                        {errors.recaptchaToken}
                      </span>
                    )}
                      <div className="mb-3 mt-3 text-end">
                        <button type="submit" className="submit_btn">
                          {loading ? "loading..." : "submit"}
                          {/* Submit */}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Whatsapp />
          <GetAQuoteModal
            setOpenModal={setModalOpen}
            openModal={modalOpen}
            handleCloseModal={() => setModalOpen(false)}
          />
          <ToastContainer
            position="top-right"
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

          <Footer />
        </>
      )}
    </>
  );
};

export default CareerApply;
