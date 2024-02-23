import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Whatsapp from '../../components/Whatsapp';
import GetAQuoteModal from '../../components/GetAQuoteModal';
import teambg from '../../public/assets/images/COMPANY/our_team/hire-us-banner.png'

const OurTeam = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Our Team | THE APP IDEAS" />
      <Header setOpenModal={setModalOpen}/>
      <section className="team_banner"style={{backgroundImage:`url(${teambg.src})`}}>
        <h1>OUR TEAM</h1>
        <p>
          We are The App Ideas, a creative bunch of thinkers and developers
          having expertise in shaping future ready mobile and web apps across
          niches.
        </p>
      </section>
      <section  className="team_main_section">
        <div className="team_section">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image  width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/chirag.png')}
                        className="img-fluid"
                        alt="chirag"
                      />
                    </div>
                    <div className="caption">
                      <h3>Chirag</h3>
                      <p>Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Ankita.webp')}
                        className="img-fluid"
                        alt="Ankita"
                      />
                    </div>
                    <div className="caption">
                      <h3>Ankita</h3>
                      <p>Marketing Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/trusha.webp')}
                        className="img-fluid"
                        alt="trusha"
                      />
                    </div>
                    <div className="caption">
                      <h3>Trusha</h3>
                      <p>HR &amp; SEO Executive</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Payal.webp')}
                        className="img-fluid"
                        alt="Payal"
                      />
                    </div>
                    <div className="caption">
                      <h3>Payal</h3>
                      <p>Mobile App Team Lead &amp; Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team_main_section ornage_light-bg">
        <div className="team_section">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Bhavin.webp')}
                        className="img-fluid"
                        alt="Bhavin"
                      />
                    </div>
                    <div className="caption">
                      <h3>Bhavin</h3>
                      <p>Mobile App &amp; Graphic Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Mansi-Shah.jpg')}
                        className="img-fluid"
                        alt="Mansi-Shah"
                      />
                    </div>
                    <div className="caption">
                      <h3>Mansi</h3>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Ankit.webp')}
                        className="img-fluid"
                        alt="Ankit"
                      />
                    </div>
                    <div className="caption">
                      <h3>Ankit</h3>
                      <p>Laravel Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Jignasa.webp')}
                        className="img-fluid"
                        alt="Jignasa"
                      />
                    </div>
                    <div className="caption">
                      <h3>Jignasa</h3>
                      <p>Wordpress Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Harnish-Rathod.webp')}
                        className="img-fluid"
                        alt="Harnish-Rathod"
                      />
                    </div>
                    <div className="caption">
                      <h3>Harnish Rathod</h3>
                      <p>Digital Marketing Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team_main_section">
        <div className="team_section">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Diksha-SEO.webp')}
                        className="img-fluid"
                        alt="Diskha-seo"
                      />
                    </div>
                    <div className="caption">
                      <h3>Diksha</h3>
                      <p>SEO Executive</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Ankit-mistry.webp')}
                        className="img-fluid"
                        alt="ankit"
                      />
                    </div>
                    <div className="caption">
                      <h3>Ankit Mistry</h3>
                      <p>Flutter developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Suraj.webp')}
                        className="img-fluid"
                        alt="suraj"
                      />
                    </div>
                    <div className="caption">
                      <h3>Suraj</h3>
                      <p>React Native Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Raj.webp')}
                        className="img-fluid"
                        alt="Raj"
                      />
                    </div>
                    <div className="caption">
                      <h3>Chavda Raj</h3>
                      <p>Reactjs developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/juhi.webp')}
                        className="img-fluid"
                        alt="juhi"
                      />{' '}
                    </div>
                    <div className="caption">
                      <h3>Juhi Patel</h3>
                      <p>Business Coordinator</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Hardi-patel.webp')}
                        className="img-fluid"
                        alt="Hardi-patel"
                      />
                    </div>
                    <div className="caption">
                      <h3>Hardi Patel</h3>
                      <p>Wordpress Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Ronak-Yadav.webp')}
                        className="img-fluid"
                        alt="Ronak-Yadav"
                      />
                    </div>
                    <div className="caption">
                      <h3>Ronak Yadav</h3>
                      <p>BDM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Trusha_Soliya.webp')}
                        className="img-fluid"
                        alt="Trusha_Soliya"
                      />
                    </div>
                    <div className="caption">
                      <h3>Trusha Soliya</h3>
                      <p>iOS Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Ashish.webp')}
                        className="img-fluid"
                        alt="Ashish"
                      />
                    </div>
                    <div className="caption">
                      <h3>Ashish Bhoi</h3>
                      <p>HTML Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Urvi.webp')}
                        className="img-fluid"
                        alt="Urvi"
                      />
                    </div>
                    <div className="caption">
                      <h3>Urvi</h3>
                      <p>Quality Assurance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Jaydeep.webp')}
                        className="img-fluid"
                        alt="Jaydeep"
                      />
                    </div>
                    <div className="caption">
                      <h3>Jaydeep Patel</h3>
                      <p>BDM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Darshan-Koshti.webp')}
                        className="img-fluid"
                        alt="Darshan-Koshti"
                      />
                    </div>
                    <div className="caption">
                      <h3>Darshan Koshti</h3>
                      <p>Business Development Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/DhvaniPatel.webp')}
                        className="img-fluid"
                        alt="DhvaniPatel"
                      />
                    </div>
                    <div className="caption">
                      <h3>Dhvani Patel</h3>
                      <p>Android Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Jignesh_Koshti.webp')}
                        className="img-fluid"
                        alt="Jignesh-Koshti"
                      />
                    </div>
                    <div className="caption">
                      <h3>Jignesh Koshti</h3>
                      <p>Web Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Kinnari-Vaghela.webp')}
                        className="img-fluid"
                        alt="Kinnari-Vaghela"
                      />
                    </div>
                    <div className="caption">
                      <h3>Kinnari Vaghela</h3>
                      <p>Business Development Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Nikhi-Mandaliya.webp')}
                        className="img-fluid"
                        alt="Nikhi-Mandaliya"
                      />
                    </div>
                    <div className="caption">
                      <h3>Nikhil Mandaliya</h3>
                      <p>Nodejs Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Priyanka-Patel.webp')}
                        className="img-fluid"
                        alt="Priyanka-Patel"
                      />
                    </div>
                    <div className="caption">
                      <h3>Priyanka Patel</h3>
                      <p>Laravel Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Pooja_Rathod.webp')}
                        className="img-fluid"
                        alt="Pooja_Rathod"
                      />
                    </div>
                    <div className="caption">
                      <h3>Pooja Rathod</h3>
                      <p>SEO Executive</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Vikas_Chauhan.webp')}
                        className="img-fluid"
                        alt="Vikas_Chauhan"
                      />
                    </div>
                    <div className="caption">
                      <h3>Vikas Chauhan</h3>
                      <p>Flutter developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Dhara_Khandhediya.webp')}
                        className="img-fluid"
                        alt="Dhara_Khandhediya"
                      />
                    </div>
                    <div className="caption">
                      <h3>Dhara Khandhediya</h3>
                      <p>Laravel Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="profile_main_card">
                  <div className="profile-card">
                    <div className="img">
                                       <Image width={195} height={280}
                        src={require('../../public/assets/images/COMPANY/our_team/Rahul_Patel.webp')}
                        className="img-fluid"
                        alt="Rahul_Patel"
                      />
                    </div>
                    <div className="caption">
                      <h3>Rahul Patel</h3>
                      <p>SEO Executive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default OurTeam
