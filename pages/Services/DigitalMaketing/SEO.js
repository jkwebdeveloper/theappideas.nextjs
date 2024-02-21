import React, { useState } from 'react'

import Image from 'next/image';
import asoservice from '../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-Services.png'
import Specialist from '../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-Specialist.png'
import optimization from '../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-optimization.png'
import { Helmet } from 'react-helmet'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer';
import HeroSection from '../../../components/HeroSection';
import ContactUs from '../../../components/ContactUs';
import FAQ from '../../../components/FAQ';
import TestiMonial from '../../../components/Testimonial/TestiMonial';
import Whatsapp from '../../../components/Whatsapp';
import GetAQuoteModal from '../../../components/GetAQuoteModal';

const ServiceProvideData = [
  {
    id: 1,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/1-3.png'),
    que: 'SEO Consultancy',
    ans:
      'SEO which is also known as Search Engine Optimization which is one of the most demanding and popular services.SEO is free traffic generating process that is very helpful in increasing the engagement of the users towards the business. If you want to drive organic traffic then go for SEO.',
    ans2:
      'The App Ideas is one of the leading software development services. We have years of experience in offering the best software development services along with the best digital marketing services. We offer expert SEO consultancy to business websites and help them to chase achievable and realistic search engine ranking goals and guide them in creating a content and SEO strategy for short and long term results.',
  },
  {
    id: 2,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/2-3.png'),
    que: 'Keyword and Market Research',
    ans:
      'Software solutions are one of the most popular ways of making a business successful and also to stand out differently in the market. Due to the high competition, you need to offer the best solutions as well as you also need to work on digital marketing for generating traffic.',
    ans2:
      'We are from The App Ideas, which is one of the popular web and app development company. We have a team of the highly skilled digital marketing team who will offer the best services. We boast of a robust and expertise-driven keyword and market research apparatus and professionals who can help you focus on the most relevant and useful low-competition Keywords for best SEO results.',
  },
  {
    id: 3,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/3-2.png'),
    que: 'On-site and Technical SEO',
    ans:
      'Digital marketing is one of the most demanding services in this present time. If we talk about SEO(Search Engine Optimization) then this is very useful to attract users into your business. If you already have an online platform then it is very important for you to go for Onsite and Technical SEO to increase the userbase.',
    ans2:
      'Here we are at The App Ideas, which is one of the most popular web and app development company. We have a group of people who are experts in offering Onsite and Technical SEO services. We undertake on-site and technical SEO responsibilities for websites and help them boost site performance, loading speed, design elements and various aspects that help search engine crawlers to find content easily.',
  },
  {
    id: 4,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/4-2.png'),
    que: 'Penalty Recovery',
    ans:
      'If you have online platforms for your business then it is very important for you to know everything about the websites including the Digital marketing services. Sometimes due to some reasons, the website can be blocked or can be penalised for some reasons.',
    ans2:
      'The App Ideas is one of the leading software development company. We are highly experts in offering the best solution like mobile app development, web app development, website development as well as digital marketing services. If your website has ever been penalized or indexed by Google for black hat SEO practices, we can help you recovering and de-indexing the site and help it achieve search engine results through credible link development and content strategy.',
  },
  {
    id: 5,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/5-2.png'),
    que: 'Link Development',
    ans:
      'If we discuss digital marketing then this is probably one of the best services for the growth of the business. Many people are now planning of making investments in digital marketing for promoting their services and increasing the customer base of the users.',
    ans2:
      'The App Ideas is one of the leading web and app development company. We have a team of highly skilled developers as well as a team of digital marketers who are experts in offering the best services at the best rates. We help your websites to build a quality link profile by fetching links from top-notch links from respective niches as per the relevance of the context.',
  },
  {
    id: 6,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/6-2.png'),
    que: 'Content Marketing',
    ans:
      'Nowadays, the demand for content marketing is one of the most popular factors for promoting any kind of business and service at the best possible rates. Content is highly demanding in the market because this will help your business to reach out to the targeted audience and attract new customers.',
    ans2:
      'The App Ideas is one of the leading web and app development company. We are highly experts in offering the best software development services like mobile app, web app, websites as well as a digital marketing team. We boost your websites’ SEO prospects by helping you with quality content publishing and marketing of content across highly credible and reputed websites across niches.',
  },
]
const IndustriesData = [
  {
    id: 1,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/1-4.png'),
    que: 'Timebound and Result-Driven',
    ans:
      'The demand for online platforms is increasing day by day. Many of the business owners are now planning of making investments in digital platforms for making the business more popular.SEO(Search Engine Optimization) is very helpful in getting the attention of new users into your websites',
    ans2:
      'The App Ideas is one of the leading web and app development company. We have years of experience in offering the best digital marketing and SEO services. We ensure providing outstanding SEO output within a specified time through our focused efforts through all facets of SEO including performance optimization, content publication and link building.',
  },
  {
    id: 2,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/2-4.png'),
    que: 'Agile and Proactive',
    ans:
      'Currently, the demand for online platforms is increasing for all kinds of services. People are more inclined towards online services. Online platforms provide the convenience of accessing the services more easily and it is also time-saving. Similarly, if we talk about the business owner then they are also making investments in online services.',
    ans2:
      'Here we are at The App Ideas which is one of the leading web and app development company. We strictly follow the agile methodology for the development of the services. Our SEO services are always proactive and agile to take on any trends and new methods to help our clients take on any opportunity to boost their search engine rank.',
  },
  {
    id: 3,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/3-3.png'),
    que: 'Competitive Pricing',
    ans:
      'As per the increasing demand for software solutions, the demand for software development services is also increasing with the increasing popularity. If you already own a website then it is very important for you to work on digital marketing to promote your services in the business.',
    ans2:
      'The App Ideas is one of the most popular software development company. We offer web apps, websites and mobile app development. We offer SEO services at a highly competitive price and even remain approachable and accessible for startups and small enterprise websites.',
  },
  {
    id: 4,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/4-3.png'),
    que: 'Comprehensive Content Marketing',
    ans:
      'If we talk about the demand for digital marketing then digital marketing is one of the most popular as well as demanding services in the market. Content Marketing is one of the most important parts of digital marketing. This can help businesses to stand out differently among their competitors.',
    ans2:
      'The App Ideas is one of the leading web and app development company. Along with that we also offer digital marketing services like content marketing. With the App Ideas, you can get a comprehensive content marketing service spanning all channels and needs including guest posting, regular content publication, digital and social marketing content etc.',
  },
  {
    id: 5,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/5-3.png'),
    que: 'Time-Bound Delivery',
    ans:
      'Digital marketing is very helpful in this present time as well as also for the future. To beat up the high competition, it is very important for you to have the best online platform as well as the best team of digital marketing who will deliver the project on time and drive better results.',
    ans2:
      'The App Ideas is one of the most popular software development services. We have a team of the highly skilled web app, mobile apps, website development and digital marketing services. Our guest posting services will fulfil the publication and outreach commitments in a time-bound manner. We ensure delivering measurable results within a stipulated time frame.',
  },
  {
    id: 6,
    images: require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/6-3.png'),
    que: 'Continuous Support',
    ans:
      'If you own a business online platform then it is very important for you to hire the best digital marketing team who will offer continuous support and helps in increasing the engagement of the customers or users. Digital marketing is very important for business growth.',
    ans2:
      'The App Ideas offering the best digital marketing services including SEO, content marketing and more. We have years of experience in offering the best SEO services for business growth. We also offer continuous support for guest blogging and content marketing services with a dedicated help desk manned by seasoned content marketing professionals.',
  },
]

const SEO = () => {
  const [activeWeProvide, setActiveWeProvide] = useState('seo')
  const [activeWhyChoose, setActiveWhyChoose] = useState('timebound')

  const [openServicesProvide, SetOpenServicesProvide] = useState(false)
  const [openIndustries, SetOpenIndustries] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false)
    }
    SetOpenServicesProvide(i)
  }

  const industriesOpen = (i) => {
    if (openIndustries === i) {
      return SetOpenIndustries(null)
    }
    SetOpenIndustries(i)
  }

  return (
    <>
      <Helmet title="App Search Engine Optimization (SEO) Company Serivices - The App Ideas" />
      <Header setOpenModal={setModalOpen}/>
      {/* Banner Section Start */}
      <HeroSection
        title="SEO Agency in London"
        des="We are highly experienced and experts in offering the best software development services as well as the best digital marketing services at the best possible rates. We have developed our portfolio on digital marketing by offering the overall packages as well as the best services. If you want to make your business successful then feel free to reach us for SEO services."
        list1="7+ Years of experience in SEO Agency"
        list2="Best SEO Agency Company"
        list3="Dedicated team for your SEO"
        list4="Complete Guidance from Designing to Deployment"
        service1="SEO Services"
        service2="SEO Specialist"
        service3="SEO Optimization"
        image1={asoservice}
        image2={Specialist}
        image3={optimization}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>We Provide SEO Agency in London</h3>
            <p>
              SEO(Search Engine Optimization) is one of the most important
              services that will help your business mobile app or website to
              gain visibility on the search engine. SEO is one process that
              helps in improving the quality and quantity of the website traffic
              to a web page, mobile app or website from Search Engines. SEO
              helps in targeting unpaid traffic rather than traffic or paid
              traffic. The App Ideas is a leading web and app development
              company. Along with software development services, we are also
              offering SEO services to our clients which helps their business
              website to rank in search engine listings through keywords
              optimization on content.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide('seo')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === 'seo' && 'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/1-3.png')}
                      alt="SEO
                      Consultancy"
                      className="img-fluid"
                    />
                    <p>SEO Consultancy</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide('keyword')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === 'keyword' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/2-3.png')}
                      alt="Keyword And
                      Market Research."
                      className="img-fluid"
                    />
                    <p>Keyword And Market Research.</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide('onsite')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === 'onsite' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/3-2.png')}
                      alt="On-Site And
                      Technical SEO"
                      className="img-fluid"
                    />
                    <p>On-Site And Technical SEO</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide('penalty')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === 'penalty' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/4-2.png')}
                      alt="Penalty
                      Recovery"
                      className="img-fluid"
                    />
                    <p>Penalty Recovery</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide('link_development')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === 'link_development' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/5-2.png')}
                      alt="Link
                      Development"
                      className="img-fluid"
                    />
                    <p>Link Development</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide('content_marketing')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWeProvide === 'content_marketing' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/6-2.png')}
                      alt="Content
                      Marketing"
                      className="img-fluid"
                    />
                    <p>Content Marketing</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWeProvide === 'seo' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">SEO Consultancy</h3>
                    <p className="Title_para">
                      SEO which is also known as Search Engine Optimization
                      which is one of the most demanding and popular
                      services.SEO is free traffic generating process that is
                      very helpful in increasing the engagement of the users
                      towards the business. If you want to drive organic traffic
                      then go for SEO.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      services. We have years of experience in offering the best
                      software development services along with the best digital
                      marketing services. We offer expert SEO consultancy to
                      business websites and help them to chase achievable and
                      realistic search engine ranking goals and guide them in
                      creating a content and SEO strategy for short and long
                      term results.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWeProvide === 'keyword' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Keyword and Market Research
                    </h3>
                    <p className="Title_para">
                      Software solutions are one of the most popular ways of
                      making a business successful and also to stand out
                      differently in the market. Due to the high competition,
                      you need to offer the best solutions as well as you also
                      need to work on digital marketing for generating traffic.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the popular web
                      and app development company. We have a team of the highly
                      skilled digital marketing team who will offer the best
                      services. We boast of a robust and expertise-driven
                      keyword and market research apparatus and professionals
                      who can help you focus on the most relevant and useful
                      low-competition Keywords for best SEO results.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWeProvide === 'onsite' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">On-site and Technical SEO</h3>
                    <p className="Title_para">
                      Digital marketing is one of the most demanding services in
                      this present time. If we talk about SEO(Search Engine
                      Optimization) then this is very useful to attract users
                      into your business. If you already have an online platform
                      then it is very important for you to go for Onsite and
                      Technical SEO to increase the userbase.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the most
                      popular web and app development company. We have a group
                      of people who are experts in offering Onsite and Technical
                      SEO services. We undertake on-site and technical SEO
                      responsibilities for websites and help them boost site
                      performance, loading speed, design elements and various
                      aspects that help search engine crawlers to find content
                      easily.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWeProvide === 'penalty' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Penalty Recovery</h3>
                    <p className="Title_para">
                      If you have online platforms for your business then it is
                      very important for you to know everything about the
                      websites including the Digital marketing services.
                      Sometimes due to some reasons, the website can be blocked
                      or can be penalised for some reasons.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We are highly experts in offering the best
                      solution like mobile app development, web app development,
                      website development as well as digital marketing services.
                      If your website has ever been penalized or indexed by
                      Google for black hat SEO practices, we can help you
                      recovering and de-indexing the site and help it achieve
                      search engine results through credible link development
                      and content strategy.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWeProvide === 'link_development' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Link Development</h3>
                    <p className="Title_para">
                      If we discuss digital marketing then this is probably one
                      of the best services for the growth of the business. Many
                      people are now planning of making investments in digital
                      marketing for promoting their services and increasing the
                      customer base of the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as a team of digital marketers who are
                      experts in offering the best services at the best rates.
                      We help your websites to build a quality link profile by
                      fetching links from top-notch links from respective niches
                      as per the relevance of the context.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWeProvide === 'content_marketing' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Content Marketing</h3>
                    <p className="Title_para">
                      Nowadays, the demand for content marketing is one of the
                      most popular factors for promoting any kind of business
                      and service at the best possible rates. Content is highly
                      demanding in the market because this will help your
                      business to reach out to the targeted audience and attract
                      new customers.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly experts in offering the
                      best software development services like mobile app, web
                      app, websites as well as a digital marketing team. We
                      boost your websites’ SEO prospects by helping you with
                      quality content publishing and marketing of content across
                      highly credible and reputed websites across niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {ServiceProvideData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: '20px', cursor: 'pointer' }}
                onClick={() => toggleOpen(i)}
              >
                <div className="service_provide_box">
                  <div className="service_provide_content">
                    <div className="service_provide_title">
                      <Image width={50} height={50}
                        src={item?.images}
                        alt="smartphone-tablet"
                        className="img-fluid"
                      />
                      <p>{item.que}</p>
                    </div>
                    {openServicesProvide === i ? (
                      <div>
                        <IoIosArrowUp />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {openServicesProvide === i ? (
                    <div className="answer_box">
                      <hr className="line_tag" />
                      <div className="answer">
                        <p>{item.ans}</p>
                        <p>{item.ans2}</p>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
            {/* Mobile View */}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why You Should Choose Us for SEO Agency in London?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('timebound')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'timebound' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/1-4.png')}
                      alt="Timebound and Result-Driven"
                      className="img-fluid"
                    />
                    <p>Timebound and Result-Driven</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('agile_proactive')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'agile_proactive' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/2-4.png')}
                      alt="Agile and Proactive"
                      className="img-fluid"
                    />
                    <p>Agile and Proactive</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('competitive_pricing')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'competitive_pricing' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/3-3.png')}
                      alt="Competitive Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('comprehensive')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'comprehensive' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/4-3.png')}
                      alt="Comprehensive Content Marketing"
                      className="img-fluid"
                    />
                    <p>Comprehensive Content Marketing</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('timebound_delivery')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'timebound_delivery' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/5-3.png')}
                      alt="Time-Bound Delivery"
                      className="img-fluid"
                    />
                    <p>Time-Bound Delivery</p>
                  </div>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('continuous_support')}
                >
                  <div
                    
                    className={`service__provide_tab ${
                      activeWhyChoose === 'continuous_support' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <Image width={60} height={60}
                      src={require('../../../public/assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/6-3.png')}
                      alt="Continuous Support"
                      className="img-fluid"
                    />
                    <p>Continuous Support</p>
                  </div>
                </div>
              </div>
            </div>
            {activeWhyChoose === 'timebound' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Timebound and Result-Driven
                    </h3>
                    <p className="Title_para">
                      The demand for online platforms is increasing day by day.
                      Many of the business owners are now planning of making
                      investments in digital platforms for making the business
                      more popular.SEO(Search Engine Optimization) is very
                      helpful in getting the attention of new users into your
                      websites
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have years of experience in
                      offering the best digital marketing and SEO services. We
                      ensure providing outstanding SEO output within a specified
                      time through our focused efforts through all facets of SEO
                      including performance optimization, content publication
                      and link building.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === 'agile_proactive' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile and Proactive </h3>
                    <p className="Title_para">
                      Currently, the demand for online platforms is increasing
                      for all kinds of services. People are more inclined
                      towards online services. Online platforms provide the
                      convenience of accessing the services more easily and it
                      is also time-saving. Similarly, if we talk about the
                      business owner then they are also making investments in
                      online services.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the leading
                      web and app development company. We strictly follow the
                      agile methodology for the development of the services. Our
                      SEO services are always proactive and agile to take on any
                      trends and new methods to help our clients take on any
                      opportunity to boost their search engine rank.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWhyChoose === 'competitive_pricing' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing </h3>
                    <p className="Title_para">
                      As per the increasing demand for software solutions, the
                      demand for software development services is also
                      increasing with the increasing popularity. If you already
                      own a website then it is very important for you to work on
                      digital marketing to promote your services in the
                      business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We offer web apps, websites and
                      mobile app development. We offer SEO services at a highly
                      competitive price and even remain approachable and
                      accessible for startups and small enterprise websites.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWhyChoose === 'comprehensive' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Comprehensive Content Marketing{' '}
                    </h3>
                    <p className="Title_para">
                      If we talk about the demand for digital marketing then
                      digital marketing is one of the most popular as well as
                      demanding services in the market. Content Marketing is one
                      of the most important parts of digital marketing. This can
                      help businesses to stand out differently among their
                      competitors.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with that we also offer digital
                      marketing services like content marketing. With the App
                      Ideas, you can get a comprehensive content marketing
                      service spanning all channels and needs including guest
                      posting, regular content publication, digital and social
                      marketing content etc.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWhyChoose === 'timebound_delivery' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Time-Bound Delivery </h3>
                    <p className="Title_para">
                      Digital marketing is very helpful in this present time as
                      well as also for the future. To beat up the high
                      competition, it is very important for you to have the best
                      online platform as well as the best team of digital
                      marketing who will deliver the project on time and drive
                      better results.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development services. We have a team of the highly skilled
                      web app, mobile apps, website development and digital
                      marketing services. Our guest posting services will fulfil
                      the publication and outreach commitments in a time-bound
                      manner. We ensure delivering measurable results within a
                      stipulated time frame.
                    </p>
                  </div>
                </div>
              </div>
            )}{' '}
            {activeWhyChoose === 'continuous_support' && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Continuous Support</h3>
                    <p className="Title_para">
                      If you own a business online platform then it is very
                      important for you to hire the best digital marketing team
                      who will offer continuous support and helps in increasing
                      the engagement of the customers or users. Digital
                      marketing is very important for business growth.
                    </p>
                    <p className="Title_para">
                      The App Ideas offering the best digital marketing services
                      including SEO, content marketing and more. We have years
                      of experience in offering the best SEO services for
                      business growth. We also offer continuous support for
                      guest blogging and content marketing services with a
                      dedicated help desk manned by seasoned content marketing
                      professionals.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {IndustriesData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: '20px', cursor: 'pointer' }}
                onClick={() => industriesOpen(i)}
              >
                <div className="service_provide_box">
                  <div className="service_provide_content">
                    <div className="service_provide_title">
                      <Image width={50} height={50}
                        src={item?.images}
                        alt="smartphone-tablet"
                        className="img-fluid"
                      />
                      <p>{item.que}</p>
                    </div>
                    {openIndustries === i ? (
                      <div>
                        <IoIosArrowUp />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {openIndustries === i ? (
                    <div className="answer_box">
                      <hr className="line_tag" />
                      <div className="answer">
                        <p>{item.ans}</p>
                        <p>{item.ans2}</p>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
            {/* Mobile View */}
          </div>
        </div>
      </section>
      <TestiMonial />

      <FAQ />

      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful SEO in the market?" />
      {/* Contact Section End */}
      <Whatsapp/>
      <GetAQuoteModal
        setOpenModal={setModalOpen}
        openModal={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
      />
      <Footer/>
    </>
  )
}

export default SEO
