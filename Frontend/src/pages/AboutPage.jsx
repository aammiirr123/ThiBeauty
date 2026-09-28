import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const AboutPage = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t' >
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-grey-600'>
          <p>Welcome to our store, where style meets affordability. We believe everyone deserves to shine without spending a fortune. Our collection features a wide range of high-quality imitation jewelry, including elegant necklaces, earrings, bangles, bracelets, rings, and traditional as well as modern designs for every occasion.</p>
          <p>Each piece is carefully selected to offer the perfect blend of beauty, comfort, and durability. Whether you're looking for everyday accessories or statement jewelry for weddings, parties, or festivals, we have something to match every style and personality.</p>
          <b className='text-grey-800'>Our Mission</b>
          <p>Our mission is to provide fashionable, premium-looking jewelry at affordable prices while ensuring a smooth shopping experience, secure payments, and reliable customer service. Thank you for choosing us to be a part of your style journey.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-8 md:px-12 py-8 flex flex-col gap-3 text-center'>
          <b>Quality Assurance</b>
          <p className='text-gray-600 text-sm leading-6'>
            We carefully inspect every piece to ensure high quality, durability, and elegant design. Our goal is to provide stylish imitation jewelry you can wear with confidence.
          </p>
        </div>

        <div className='border px-8 md:px-12 py-8 flex flex-col gap-3 text-center'>
          <b>Convenience</b>
          <p className='text-gray-600 text-sm leading-6'>
            Enjoy a simple and secure shopping experience with easy browsing, safe payments, and reliable delivery. Shop anytime with confidence and ease.
          </p>
        </div>

        <div className='border px-8 md:px-12 py-8 flex flex-col gap-3 text-center'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600 text-sm leading-6'>
            Our friendly support team is always ready to help with your questions and orders, ensuring a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>

      
    </div>
  )
}

export default AboutPage
