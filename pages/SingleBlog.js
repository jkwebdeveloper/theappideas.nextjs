import React, { useEffect, useState } from "react";
// import "../styles/singleblog.module.css";
import { RiFacebookFill } from "react-icons/ri";
import {  BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaPinterestP, FaTumblr } from "react-icons/fa";
// import { BiLogoVk } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
// import Blog from "./Blog";
import axios from "axios";

// import Loading from "../../../public/assets/images/loading.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import Image from 'next/image';
import Blog from "../components/Home/Blog/Blog";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import GetAQuoteModal from "../components/GetAQuoteModal";
// import Error404 from "./Custom404";
import Custom404 from "./404";
import Loading from "../public/assets/images/loading.json";
import Link from "next/link";


const SingleBlog = () => {
  const [singleblogs, setSingleBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);


  // const { id } = useLocation().state;
  // console.log(id);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug); 

  const handleGetSingleBlogs = () => {
    axios
      .get(`https://the-app-ideas.onrender.com/api/blog/slug/${slug}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setSingleBlogs(res.data.blog);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error fetching blog:", err);

      });
  };
  useEffect(() => {
    handleGetSingleBlogs();
  });

  if (loading) {
    return (
      <Lottie
      animationData={Loading}
      loop={true}
      style={{
        width: "200px",
        margin: "0 auto",
      }}
    />
    );
  }
  if (!singleblogs) {
    return <Custom404 />;
  }
  return (
    <>
    <Helmet title="How much Does It Cost to Build a FinTech App? - THE APP IDEAS"/>
    <Header setOpenModal={setModalOpen}/>
      {loading ? (
        <Lottie
        animationData={Loading}
        loop={true}
        style={{
          width: "200px",
          margin: "0 auto",
        }}
      />
      ) : (
        <>
          <section
            className="blog__section"
            style={{ paddingTop: "23px", paddingBottom: "70px" }}
          ></section>

          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="left_content">
                    <h1>{singleblogs?.title}</h1>
                    <div className="author">
                      <Image
                        src={"https://the-app-ideas.onrender.com".concat(
                          singleblogs?.creator?.photo
                        )}
                        alt={singleblogs?.imageAlt}
                        width={80} height={53}
                        className="img-fluid"
                      />
                      <div className="description">
                        <p className="author_name">
                          Written by <span>{singleblogs?.creator?.name}</span>
                        </p>
                        <p>{singleblogs?.updatedAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="right_image">
                    <Image
                      src={"https://the-app-ideas.onrender.com".concat(
                        singleblogs?.image?.src
                      )}
                      alt="car-wash-app"
                      width={116} height={24}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-1">
                  <div className="social_icons">
                    <Link href="https://www.facebook.com/Theappideas/">
                      <RiFacebookFill />
                    </Link>
                    <Link href="https://twitter.com/theappidea">
                      <BsTwitter />
                    </Link>
                    <Link href="https://www.linkedin.com/company/theappideas/">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=918866564279">
                      <BsWhatsapp />
                    </Link>
                    <Link href="/">
                      <FaTumblr />
                    </Link>
                    <Link href="https://in.pinterest.com/theappidea/">
                      <FaPinterestP />
                    </Link>
                    <Link href="/">
                      vk
                      {/* <IoLogoVk/> */}
                    </Link>
                    <Link href="/">
                      <AiOutlineMail />
                    </Link>
                  </div>
                </div>
                <div className="col-11">
                  <div
                    className="contant_section"
                    dangerouslySetInnerHTML={{ __html: singleblogs?.content }}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Blog />
      <Whatsapp/>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer/>
    </>
  );
};

export default SingleBlog;
