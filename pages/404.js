import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Custom404 = () => {
  return (
    <section className="error-banner-section">
      <div className="container">
        <div className="page-error">
          <h2 className="">Oops ! Page not found.</h2>
          {/* <Lottie
            animationData={error}
            loop={true}
            // style={{ height: '50px' }}
          /> */}
          <Image
            src={require('../public/assets/images/Error.png')}
            alt=""
            style={{ width:"70%" }}
          />
          <h4 className="">
            We Can't find the page you're looking for.
          </h4>
          <Link
            href="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <button className="error-btn">GO BACK HOME</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Custom404
