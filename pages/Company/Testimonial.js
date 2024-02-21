import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import ContactUs from "../../components/ContactUs";
import { Helmet } from "react-helmet";
import TestimonialModal from "../../components/Testimonial/TestimonialModal";
import Image from 'next/image';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import GetAQuoteModal from "../../components/GetAQuoteModal";

const Testimonial = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  // const video = [
  //   {
  //     id: 1,
  //     images: "",
  //     videobtn: ""
  //   }
  // ]

  const handleOnClose = () => setOpenModal(false);
  return (
    <>
      <Helmet title="Testimonial | THE APP IDEAS" />
      <Header setOpenModal={setModalOpen}/>
      <section className="teatimonial_seaction">
        <div className="testimonial_box testimonial_box_one">
          <div className="video_testimonial">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-1.webp")}
              alt="testimonial-1"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/IBYadSoVF3c");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content">
            <h5>Lloyd Medley</h5>
            <p>
              We have designed and developed a website for his client, happy to
              work with him in future.
            </p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_two">
          <div className="video_testimonial_two">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-2.webp")}
              alt="testimonial-2"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/8IXVtVkGNl8");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content_two">
            <h5>Roberto Valdovinos</h5>
            <p>
              We had done a Food Ordering and Food Delivery app for this client
            </p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_one">
          <div className="video_testimonial">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-3.webp")}
              alt="testimonial-3"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/ClF0ps79WqM");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content">
            <h5>Nasreen</h5>
            <p>We had done a Logo Design for this client.</p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_two">
          <div className="video_testimonial_two">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-4.webp")}
              alt="testimonial-4"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/l5L9s34EmnU");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content_two">
            <h5>Ratings and Review</h5>
            <p>We had delivered a Website to him.</p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_one">
          <div className="video_testimonial">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-5.webp")}
              alt="testimonial-5"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/Reho_MyuJEo");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content">
            <h5>Matthias Hippe </h5>
            <p>We did a Musical Instrument App for him.</p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_two">
          <div className="video_testimonial_two">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-6.webp")}
              alt="testimonial-6"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/XiuW-g0evVo");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content_two">
            <h5>Dale</h5>
            <p>
              We had done several websites for Dale. It’s an awesome experience
              to work with him.
            </p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_one">
          <div className="video_testimonial">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-7.webp")}
              alt="testimonial-7"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/TNDclCm8kRs");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content">
            <h5>Rupa Saumil</h5>
            <p>Founder at Footnote.world</p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_two">
          <div className="video_testimonial_two">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-8.webp")}
              alt="testimonial-8"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/SX5CXY_Y_yU");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content_two">
            <h5>Siegfried Moyo</h5>
            <p>
              We had done several websites for Siegfried Moyo. It’s an awesome
              experience to work with him.
            </p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_one">
          <div className="video_testimonial">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-9.jpg")}
              alt="testimonial-9"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/L9GvJkmMQYI");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content">
            <h5>Asad</h5>
            <p>
              We have built a Financial Website for him and also work on several
              other projects as well.
            </p>
          </div>
        </div>
        <div className="testimonial_box testimonial_box_two">
          <div className="video_testimonial_two">
            <Image
              src={require("../../public/assets/images/COMPANY/testimonial/testimonial-10.jpg")}
              alt="testimonial-10"
              className="img-fluid"
            />
            <div
              className="video_btn"
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/qn6TrD7cz7k");
              }}
            >
              <i>
                <FaPlay />
              </i>
            </div>
          </div>
          <div className="testimonial_content_two">
            <h5>Manjil Chaudhari</h5>
            <p>We had provide Digital Marketing services to this client.</p>
          </div>
        </div>
      </section>
      <section className="content_testimonial_section">
        <div className="container">
          {/* <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/testimonial-written-one.jpg")}
                  alt="testimonial-written-one"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  The team delivered on time and met all customer expectations.
                  Expect Theappideas to perform as a communicative and
                  accountable team.
                </p>
                <div className="testimonial_written_title">
                  <h2>Alex Chudnovsky</h2>
                  <p className="title__para">Director, Beautiful Websites</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  They are incredibly easy to work with, and they deliver
                  fantastic results.
                </p>
                <div className="testimonial_written_title">
                  <h2>Rahil Vora Chudnovsky</h2>
                  <p className="title__para">
                    Co-Founder, Raffle Rush, LLC, <br /> United States
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/testimonial-written-two.jpg")}
                  alt="testimonial-written-two"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/testimonial-written-three.jpg")}
                  alt="testimonial-written-three"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  App Ideas helped me to design a logo for an app I’m writing.
                  They were very quick and took time to understand the purpose
                  behind my app. The final product is of good quality.{" "}
                </p>
                <div className="testimonial_written_title">
                  <h2>Richard Kernick</h2>
                  <p className="title__para">Director, Derigo Consulting Ltd</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  One of the best services I have ever experienced they are
                  amazing team with update and communication. They where on
                  touch with even after finishing the
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    project to make sure very thing is okey They provided best
                    hight quality video and website ecommerce design ,I highly
                    recommend them to anyone whom need IT app Development
                    ,website, videos, etc .I really appreciate there time and
                    manners.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Ronak Shakari</h2>
                  <p className="title__para">Owner, Drinkshealthy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/testimonial-written-four.jpg")}
                  alt="testimonial-written-four"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Arturo-Mendez.png")}
                  alt="Arturo-Mendez"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  Working with them is great, they know what they are doing.
                  They give you a delivery day. You only have to wait and they
                  deliver on time
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>and perfectly. I will work with them again surly.</p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Arturo Mendez</h2>
                  <p className="title__para">
                    International ASO Lead, App Growth Network, Barcelona, ES
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  I had a client who wanted a particular look for her website
                  that I just couldn’t achieve no matter how hard I tried. I
                  handed this project over
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    and within 2 days it was exactly as my client wanted it. No
                    fuss, no muss! I know this is just the beginning! I will be
                    back over and over!
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Rena McDaniel</h2>
                  <p className="title__para">Owner, theblogging911</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Rena-McDaniel.jpg")}
                  alt="Rena-McDaniel"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Anne-Sophie-Gau.png")}
                  alt="Anne-Sophie-Gau"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “The App Ideas delivered their updates within a tight deadline
                  to support a re-launch. Their strengths as a team include
                  accessibility and capable management:”
                </p>
                <div className="testimonial_written_title">
                  <h2>Anne-Sophie</h2>
                  <p className="title__para">Owner of Gm Fashion Career</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  The team is passionate about providing top-tier customer
                  service, which we greatly appreciate.
                </p>
                <div className="testimonial_written_title">
                  <h2>Emilia Ku Yazar</h2>
                  <p className="title__para">
                    Founder, Musicu.live,
                    <br /> Canada
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Emilia-Ku-Music-u-Live.png")}
                  alt="Emilia-Ku-Music-u-Live"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Corinne-Punter.jpeg")}
                  alt="Corinne-Punter"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  All outcomes of the collaboration with Theappideas are
                  positive. Their responsiveness, other design-related projects
                  approach, and{" "}
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    ability to complete assignments quickly regardless of the
                    time zone difference are highlights of their work. “I will
                    certainly be using Theappideas again and am happy to
                    recommend them:’
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Corinne Punter</h2>
                  <p className="title__para">
                    Director, EMEA Marketing <br /> at Aryaka Networks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  We did a game called “Falafels” with The App Ideas”. They were
                  simply great. The process went smooth and they did all of our
                  requirements
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    quite fast and with no problems. We had no communication
                    problems at all thanks to Chirag, who takes care of
                    delegating all of our needs to the development team. The
                    prices were very comfortable and the response was super
                    fast. Even on weekends.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Guy Bashan</h2>
                  <p className="title__para">
                    VP Engineering , YouAppi, San Francisco,
                    <br /> California
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Guy-Basan.jpg")}
                  alt="Guy-Basan"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/jake-clopton.jpg")}
                  alt="jake-clopton"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  The guys at app ideas did a great job and were a please to
                  work with, I would recommend them to anyone!
                </p>

                <div className="testimonial_written_title">
                  <h2>Jake Clopton</h2>
                  <p className="title__para">
                    President, Clopton Capital, Greater Chicago Area
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  Great customer service and efficiency. Very responsive,
                  pro-active and understanding with modifications and editing.
                </p>

                <div className="testimonial_written_title">
                  <h2>Kosta Katsidis</h2>
                  <p className="title__para">Owner, iluka boat shed</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Kosta-Kasadis.jpg")}
                  alt="Kosta-Kasadis"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Marcin-Kulas.jpg")}
                  alt="Marcin-Kulas"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “I would like to thanks to the whole team, but especially to
                  Chirag as the Project Manager, he did excellence job, mainly
                  for help
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    with the design as he promised he will do on the beginning,
                    we got 24/7 support, we had nothing to do cause of that, we
                    were directed how website should be built and look, in case
                    of any issues during the project they had very positive
                    approach to solve it without any complaints!”.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Marcin Kulas</h2>
                  <p className="title__para">Owner, Ava Concepts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “Hi, our website is so plain and simple in appearance; and
                  that’s the way we have always wanted it to be. Theappideas.com
                  task was
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    making it functional according to our needs; and the result
                    was 100% satisfactory for us. It’s been a pleasure being
                    assisted by Theappideas.com. Efficiency, prompt open
                    communication and honesty is what we found in this company.
                    I highly recommend Theappideas.com services. I will
                    definitely hire them again in the near future”.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Pablo A.R</h2>
                  <p className="title__para">Founder, Vecinosconbiblias</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Pablo.jpg")}
                  alt="Pablo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Ramesh-V.jpg")}
                  alt="Ramesh-V"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  I’m full praise of “The App Ideas” Team after I used their
                  services few times in the recent months. Their team has
                  specific experts in each area{" "}
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    in Web development, hosting, SE0 and other services. When I
                    recently had an urgent requirement for an issued on a
                    website which was critical for our client with possible
                    monetary loss, “The App Ideas” Team and Mr. Chirag Panchal
                    came to our rescue and fixed the problem with high speed,
                    efficiency and in concise time, can never thank them enough
                    for their promptness and professionalism. I would always
                    recommend anyone to use them for Website and Mobile
                    Application Development Services. Once again thank you
                    Chirag and Team, you ROCK!!
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Ramesh V Iyer</h2>
                  <p className="title__para">
                    Business Development Manager of Zavvtech,
                    <br /> United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  I really liked working with Chirag and his team. Excellent. If
                  you have a project you should look at this company. Really
                  good company.
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    They worked on the project almost non-stop and fixed all my
                    issues. Thanks to a really great person and company!’
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Dale Smith</h2>
                  <p className="title__para">President, AIM Ministry</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Dale-Smith.jpg")}
                  alt="Dale-Smith"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Oluwatoyin-Ehinmosan.jpg")}
                  alt="Oluwatoyin-Ehinmosan"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “Very professional company. Communication was opt and
                  suggestions meet my need. Thanks for the recommended Theme and
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    {" "}
                    configuration, thanks for the dedicated staff that worked on
                    my project. Pricing was very fare too. Thank you!”.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Oluwatoyin Ehinmosan</h2>
                  <p className="title__para">Co-founder, Afri Artisans Ltd</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “I appreciated their open mind and willingness to always go
                  the extra mile to satisfy the customer.”
                </p>

                <div className="testimonial_written_title">
                  <h2>Juan Alarcon</h2>
                  <p className="title__para">CEO, Atrenti Energy S.L</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Juan-alarcon.jpg")}
                  alt="Juan-alarcon"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Hussain-Arif.jpg")}
                  alt="Hussain-Arif"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “They were always present and used a proactive approach if we
                  ever faced any issues.” <br />
                  After its launch, the website
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    {" "}
                    fetched 70%–80% increase in traffic. Incoming leads also
                    doubled month-over-month. The App Ideas designed a catchy
                    layout that helped customers understand the company’s
                    services. The ad agency was deeply satisfied and praised the
                    team’s pro-activeness.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Hussain Arif</h2>
                  <p className="title__para">
                    Managing Director, Bravura Advertising LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “The most impressive aspect of working with The App Ideas was
                  the speed and accuracy of their work.”
                </p>
                <div className="testimonial_written_title">
                  <h2>Shawn Smith</h2>
                  <p className="title__para">
                    Chief Product & Business Officer, NSS Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Shawn-Smith.jpg")}
                  alt="Shawn-Smith"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Obi-Umegbolu.jpg")}
                  alt="Obi-Umegbolu"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “They gave us more than we expected. The quality of their work
                  is second to none.”{" "}
                </p>

                <div className="testimonial_written_title">
                  <h2>Obi Umegbolu</h2>
                  <p className="title__para">Founder, MicroInsight</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “They added more value to the project by adding additional
                  functionalities to the app at no additional cost to us.”
                </p>

                <div className="testimonial_written_title">
                  <h2>Neky Ghandi</h2>
                  <p className="title__para">Founder, QualiLogic, LLC</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/neky-gandhi.jpg")}
                  alt="neky-gandhi"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Shiraaz-Joosub.jpg")}
                  alt="Shiraaz-Joosub"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “They were very professional, accessible, and courteous.”
                </p>

                <div className="testimonial_written_title">
                  <h2>Shiraaz Joosub</h2>
                  <p className="title__para">CEO, Health-e-Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “The App Ideas gave me exactly what I wanted. They delivered
                  everything on time and to our specifications.”
                </p>

                <div className="testimonial_written_title">
                  <h2>Andrew Mortimer</h2>
                  <p className="title__para">Founder, Tree House Learning</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Andrew-Mortimer.jpg")}
                  alt="Andrew-Mortimer"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Lori-Mercer.jpg")}
                  alt="Lori-Mercer"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “Their responsiveness while kicking off the project was
                  stellar!”
                </p>
                <div className="testimonial_written_title">
                  <h2>Lori Mercer</h2>
                  <p className="title__para">CEO, LoriMercerCTO.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “Their quality of work, communication skills, and availability
                  stood out most to me.”
                </p>
                <div className="testimonial_written_title">
                  <h2>Prashant Soni</h2>
                  <p className="title__para">Owner, Carolight Technologies</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Prashant-Soni.jpg")}
                  alt="Prashant-Soni"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Adrian-Preuss.jpg")}
                  alt="Adrian-Preuss"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “They were very professional and very good at handling the
                  files and followed the design direction.”{" "}
                </p>
                <div className="testimonial_written_title">
                  <h2>Adrian Preuss</h2>
                  <p className="title__para">
                    Graphic/Web Designer,
                    <br /> Adrian Preuss Design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “The knowledge of mobile system integration impressed.”
                </p>

                <div className="testimonial_written_title">
                  <h2>Billy Wepener</h2>
                  <p className="title__para">CEO, E’Langa</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Billy-Wepener.jpg")}
                  alt="Billy-Wepener"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Raul-Castells-Cardet.jpg")}
                  alt="Raul-Castells-Cardet"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “They were responsive and effective.” <br />
                  The App Ideas eliminated website errors, though they could
                  have been more communicative.
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p> All in all, they completed the job properly.</p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Raul Castells Cardet</h2>
                  <p className="title__para">
                    Co-Founder at The Motorsport MBA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “They’re kind people who are available at all times to support
                  requirements.” <br />
                  Their team worked efficiently
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    with a strong understanding of the technical work required.
                    Responsive and supportive, they were quick to address any
                    challenges.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Ganesh Yanadi</h2>
                  <p className="title__para">Owner, Beecrops</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Ganesh-Yanadi.jpg")}
                  alt="Ganesh-Yanadi"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Emilia-Ku-Music-u-Live.jpg")}
                  alt="Emilia-Ku-Music-u-Live"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “Their communication and the work they produced were
                  excellent.”
                  <br />
                  The vendor successfully completed
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    a robust solution, equipping internal stakeholders to go to
                    market. They maintained an accessible task management style
                    and worked well within tight deadline constraints.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Nicola Cassidy</h2>
                  <p className="title__para">Ceo of adjutantsoftware</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “They have a very positive attitude and are very good at
                  problem solving.” <br />
                  The deliverables aligned perfectly with
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    the provided guidelines. The team excelled at meeting the
                    milestones and deadlines that were established in the
                    project brief.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Pete Evans</h2>
                  <p className="title__para">Peach Technologies Ltd</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Pete-Evans.jpg")}
                  alt="Pete-Evans"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Raul-Porcar.jpg")}
                  alt="Raul-Porcar"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “They made a strong effort to fix any problems as soon as
                  possible.” <br />
                  Through The App Ideas’ efforts,{" "}
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    the client’s business now ranks highly for several important
                    keywords. Their team quickly fixed all problems. Responsive
                    and empathetic, they were very dedicated to the project.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Raul Porcar</h2>
                  <p className="title__para">CEO, Olorama Technology</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “Their reactiveness was great.” <br />
                  The team delivered as expected. While a site map would’ve been
                  helpful to visualize
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    the website’s organization, The App Ideas followed through
                    with their tasks and kept to an effective workflow.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Nadege Bourdin-Fayard</h2>
                  <p className="title__para">
                    Founder & Manager, Expat’ResSources
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Nadege-Bourdin-Fayard.jpg")}
                  alt="Nadege-Bourdin-Fayard"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Dawood-Kokawala.jpg")}
                  alt="Dawood-Kokawala"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  The App Ideas’ work was very effective. The store was
                  delivered on-time and is running well. The workflow was very
                  smooth.
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    Their promptness and availability were exceptionally
                    helpful.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Dawood Kokawala</h2>
                  <p className="title__para">
                    President & CEO, MSDS Entrepreneurs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “They are always available to provide help.” <br />
                  Thousands of sales have been generated due to the resulting
                  website.
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    Theappideas had a seamless workflow. Customers can expect a
                    patient team that turns around solutions quickly.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Anthony Omenya</h2>
                  <p className="title__para">CEO, IT Consulting Company</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Anthony-Omenya.jpg")}
                  alt="Anthony-Omenya"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Dan-Taylor-Owner-of-Tesla-Teachings.jpg")}
                  alt="Dan-Taylor-Owner-of-Tesla-Teachings"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “They did an excellent job of building the app how I wanted
                  it.”Theappideas delivered a product that met every
                  requirement.
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    The team was efficient during the development phase. Their
                    high level of customer service set them apart from other
                    vendors.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Dan Taylor</h2>
                  <p className="title__para">Director, Tesla Teachings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “They went the extra mile to deliver.” Stakeholders were
                  pleased with the results of the engagement and plan on working
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    with the vendor again. Their accessible communication style
                    was a highlight of the partnership.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>chiara-molena</h2>
                  <p className="title__para">
                    EMEA Marketing Director at Champion Petfoods
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/chiara-molena.jpg")}
                  alt="chiara-molena"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Alex-Chudnovsky.jpg")}
                  alt="Alex-Chudnovsky"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “I’m happy with their deliverables.” <br />
                  The team delivered on time and met all customer expectations.
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    Expect Theappideas to perform as a communicative and
                    accountable team.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Alex Chudnovsky</h2>
                  <p className="title__para">Director, Beautiful Websites</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  Great service from Chirag who spent time understanding the
                  brief and delivered a quality product inside the agreed
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>timescales and I will certainly use his company again.</p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Kevin Devine</h2>
                  <p className="title__para">
                    Chairman of Total Vehicle Leasing Limited
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Kevin-Devine.jpg")}
                  alt="Kevin-Devine"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/joe.jpg")}
                  alt="joe"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “Chirag and his team delivered us a truly never-before dating
                  app. Expertise and experience apart, their commitment level is
                  really
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    {" "}
                    commendable. They understood our objective and helped us to
                    get what we want”.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Joe Nicolas</h2>
                  <p className="title__para">Owner of Privilege Dating App</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “I have used the services of Chirag and his team for some
                  website and logo related work. Chirag has delivered what was
                  expected
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    in a positive and proactive way. He is committed and follows
                    up diligently. I wish him all the best.”.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Nooruddin Ahmed</h2>
                  <p className="title__para">Owner of Certero Corporation</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Nooruddin.png")}
                  alt="Nooruddin"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image src={require("../../public/assets/images/COMPANY/testimonial/craig-mackie-390x390.a13bba568b95.jpg")} alt="Anne-Sophie-Gau" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>“Excellent, very good communication. Thanks 5*”</p>
                <div className="testimonial_written_title">
                  <h2>Craig Mackie</h2>
                  <p className="title__para">
                    General Manager of Moodie Insights
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>“Super organized, on top of it. Great communication.”.</p>
                <div className="testimonial_written_title">
                  <h2>Leon Sandoval</h2>
                  <p className="title__para">Owner Of Onlinecrates</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/leon.jpg")}
                  alt="leon"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Jacob-terry-image.jpg")}
                  alt="Corinne-Punter"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  “Everything was good with Chirag. Make a list of things and he
                  will deliver and find a solution.”.{" "}
                </p>

                <div className="testimonial_written_title">
                  <h2>Jacob Terry</h2>
                  <p className="title__para">Owner Of Onlinecrates</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  The best app designer that I have ever met. They provide me
                  excellent design which I wished. Thank you very much for your
                  work.
                </p>

                <div className="testimonial_written_title">
                  <h2>Mariya Valui</h2>
                  <p className="title__para">UK</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/Mariya-Valui.jpg")}
                  alt="Mariya-Valui"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/userplaceholder.jpg")}
                  alt="jake-clopton"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “You could ask them for anything and they had an answer
                  ready.” The app was completed on schedule and successfully
                  made available
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    {" "}
                    on the App Store. The App Ideas is communicative and easy to
                    work with. Their team is dependable and insightful.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Huseyin Tufekci</h2>
                  <p className="title__para">Owner of Discoveruapps</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “They are fast and incredibly responsive.” Internal
                  stakeholders conserved valuable resources by hiring the team.
                </p>
                <details className="testimonial_details">
                  <summary>
                    <span id="open">Read More</span>
                    <span id="close">Read Less</span>
                  </summary>
                  <p>
                    {" "}
                    Insightful advice from Theappideas added value. They are an
                    expert team with a professional communication style.
                  </p>
                </details>
                <div className="testimonial_written_title">
                  <h2>Anthony Riojas</h2>
                  <p className="title__para">Employee, Promotions Company</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/userplaceholder.jpg")}
                  alt="Kosta-Kasadis"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/userplaceholder.jpg")}
                  alt="Corinne-Punter"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p>
                  We worked well together, we are satisfied with the delivery
                  term as it wasnt any urgency.{" "}
                </p>

                <div className="testimonial_written_title">
                  <h2>Pal H</h2>
                  <p className="title__para">Owner of Degator</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  Great job on completing the mobile prototype demo app on time
                  with great quality and care. Will hire again.
                </p>

                <div className="testimonial_written_title">
                  <h2>Edwin C</h2>
                  <p className="title__para">Owner of Octify</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/userplaceholder.jpg")}
                  alt="Jake-Clopton"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft yellow_bg">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/userplaceholder.jpg")}
                  alt="jake-clopton"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  very good team, thanks for you patience !
                </p>

                <div className="testimonial_written_title">
                  <h2>Ariel F</h2>
                  <p className="title__para">Owner of seeguido</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row_one">
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_rht">
                <div className="quote">
                  <i className="fa yellow">
                    <FaQuoteLeft />
                  </i>
                </div>
                <p className="testimonial_paraghraph">
                  “The communication and workflow at The App Ideas were
                  excellent, and everything worked out as planned.”
                </p>

                <div className="testimonial_written_title">
                  <h2>Albert Chong</h2>
                  <p className="title__para">Founder, Triphastic</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="testimonial_written_lft purple_bg right_circle">
                <Image
                  src={require("../../public/assets/images/COMPANY/testimonial/userplaceholder.jpg")}
                  alt="Jake-Clopton"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <ContactUs question="Would you like to execute any project?" />
      {/* Contact Section End */}
      <TestimonialModal onClose={handleOnClose} visible={openModal} />
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

export default Testimonial;
