import Lottie from 'lottie-react'
import React from 'react'
import whatsappanimation from '../public/assets/images/139413-whatsappp-icone-verde.json'
import Link from 'next/link';

const Whatsapp = () => {
  return (
    <div className="fix_whatsapp_btn">
      <Link
        href="https://api.whatsapp.com/send?phone=918866564279"
        target="_blank"
      >
        <Lottie
          animationData={whatsappanimation}
          loop={true}
          style={{ height: '80px' }}
        />
      </Link>
    </div>
  )
}

export default Whatsapp
