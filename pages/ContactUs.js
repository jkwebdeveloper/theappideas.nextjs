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
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import GetAQuoteModal from "../components/GetAQuoteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ValidationSchema from "../components/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// localhost Key
const SITE_KEY = "6LflLYApAAAAAA94dzKNSl35WtkPT9X6VfLH5p_f";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [recaptchavalue, SetRecaptchaValue] = useState("");

  const onChange = (value) => {
    SetRecaptchaValue(value);
  };
  const captchaRef = useRef();

  const { contactUsSchema } = ValidationSchema();

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
    resolver: yupResolver(contactUsSchema),
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
        skypeId: values.skypeId,
        budget: values.budget,
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

  const formref = useRef(null);
  const [countries, setCountries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  return (
    <>
      <Helmet title="Contact Us - THE APP IDEAS" />
      <Header setOpenModal={setModalOpen} />
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
                <form onSubmit={handleSubmit(handlePost)}>
                  <div className="row g-3">
                    <div className="col-sm-6 mt-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        // aria-label="Name*"
                        {...register("name")}
                      />
                      <span className="required_error">
                        {errors?.name?.message}
                      </span>
                    </div>
                    <div className="col-sm-6 mt-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        {...register("email")}
                      />
                      <span className="required_error">
                        {errors?.email?.message}
                      </span>
                    </div>
                    <div className="col-sm-6 mt-4">
                      <input
                        type="text"
                        name="skypeId"
                        className="form-control"
                        placeholder="skype ID"
                        aria-label="skype ID"
                        {...register("skypeId")}
                      />
                      <span className="required_error">
                        {errors?.skypeId?.message}
                      </span>
                    </div>
                    <div className="col-sm-6 h-100 mt-4">
                      <select
                        className="form-select"
                        style={{ width: "100%", padding: "6px" }}
                        name="budget"
                        {...register("budget")}
                      >
                        <option label="Budget">Budget</option>
                        <option>Less Than 1000</option>
                        <option>1001 - 3000 USD</option>
                        <option>3001 - 5000 USD</option>
                        <option>5001 - 10000 USD</option>
                        <option>More Than 10000 USD</option>
                      </select>
                    </div>
                    <div className="col-sm-6 h-100 select__country mt-4">
                      <select
                        className="select2 w-100 h-100"
                        style={{ width: "100%", padding: "6px" }}
                        name="country"
                      >
                        <option label="Country"></option>
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
                    <div className="col-sm-6 mt-4">
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
                    <div className="col-sm-12 mt-4">
                      <textarea
                        className="form-control h-100"
                        id="exampleFormControlTextarea1"
                        rows={5}
                        placeholder="Project Requirement*"
                        name="projectRequirement"
                        {...register("projectRequirement")}
                      />
                      <span className="required_error">
                        {errors?.projectRequirement?.message}
                      </span>
                    </div>
                    <div className="mt-4">
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
                    </div>
                    <div className="col-sm-12 text-center mt-4">
                      <button type="submit" className="request__btn">
                        {loading ? "loading..." : "submit"}
                      </button>
                    </div>
                  </div>
                </form>
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
      <Whatsapp />
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
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

      <Footer />
    </>
  );
};

export default ContactUs;
