import React, { useState } from "react";
import "../styles/index.css";
import "../styles/About.css";
import "../styles/blog.css";
import "../styles/ondemand.css";
import "../styles/services.css";
import "../styles/singleblog.css";
import "../styles/testimonial.css";
import "../styles/whyChoose.css";
import "../styles/work.css";
import "../styles/banner.css";
import "../styles/header.css";
import "../styles/mobileAppDevelopment.css";
import "../public/assets/bootstrap.min.css";
import GetAQuoteModal from "../components/GetAQuoteModal";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header setOpenModal={setModalOpen} />
      <Component {...pageProps} />
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
    </>
  );
}

export default MyApp;
