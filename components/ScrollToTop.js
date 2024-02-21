import React, { useEffect, useState } from 'react'
// import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import Lottie from 'lottie-react'
import scrolltotop from '../assets/images/18519-upload-loop.json'
import AOS from 'aos'
import 'aos/dist/aos.css'


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const goToBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const listenToScroll = () => {
    let heightToHidden = 300
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    if (winScroll > heightToHidden) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      {isVisible && (
        <div data-aos="fade-left" className="top-btn" onClick={goToBtn}>
          <Lottie
            animationData={scrolltotop}
            loop={true}
            style={{ height: '50px' }}
          />
        </div>
      )}
    </>
  )
}

export default ScrollToTop
