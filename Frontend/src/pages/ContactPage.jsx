import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const ContactPage = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[600px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-grey-600'>Our Store</p>
          <p className='text-grey-500'>ThiBeauty ,482 Mithai Street,<br /> Devlali Camp, Nashik, Maharashtra, <br /> India, Pin-Code-422401</p>
          <p className='font-semibold text-xl text-grey600'>Contact Details</p>
          <p>Contact No: (+91) 9823997860 <br /> Email: thi.beauty10@gmail.com</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
