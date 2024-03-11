import React, { useEffect, useState } from "react";
import Services from "../components/Home/Services/Services";
import TestiMonial from "../components/Testimonial/TestiMonial";
import Blog from "../components/Home/Blog/Blog";
import About from "../components/Home/About us/About";
import ContactUs from "../components/ContactUs";
import Work from "../components/Workdone/Work";
import Banner from "../components/Home/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import axios from "axios";
import OndemandProduct from "../components/Home/OndemandProducts/OndemandProduct";
import WhyChoose from "../components/Home/Why Choose/WhyChoose";
import Whatsapp from "../components/Whatsapp";
import GetAQuoteModal from "../components/GetAQuoteModal";

const Home = ({ setOpenModal }) => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleGetBanners = () => {
    setLoading(true);
    axios("https://the-app-ideas.onrender.com/api/banner", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => {
        setBanners(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetBanners();
  }, []);

  return (
    <>
      <Head>
        <title>Best Web And Mobile App Development Company</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Header setOpenModal={setModalOpen} />
      <Banner loading={loading} banners={banners} setOpenModal={setModalOpen} />
      <OndemandProduct />
      <About />
      <Services />
      <Work />
      <WhyChoose />
      <TestiMonial />
      <Blog />
      <ContactUs question="Would you like to execute any project?" />
      <Whatsapp />
      <Footer />
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
    </>
  );
};

export default Home;
