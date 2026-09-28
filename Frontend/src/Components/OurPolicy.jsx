import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xm sm:text-sm md:text-base text-gray-700'>

            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
                <p className='font-semibold '>Term's And Conditions of  Exchange Policy</p>
                <p className='text-gray-500 '>We uphold the highest standards of quality and authenticity in all our products. Each item is carefully inspected before being made available to our customers. To maintain this standard, we do not entertain returns or exchanges for products that show signs of tampering, misuse, or altered condition. Our commitment is to ensure that every customer receives exactly what they order, backed by trust and consistency.</p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
                <p className='font-semibold '>Quality Of The Product's</p>
                <p className='text-gray-500 '>Product quality is our top priority. Every item undergoes strict quality control checks before shipping to ensure it meets our standards. We source materials responsibly and work only with trusted suppliers to guarantee durability, performance, and satisfaction. Our team is dedicated to delivering reliable, well-crafted products that meet customer expectations without compromise.</p>
            </div>

             <div>
                <img src={assets.customer_support} className='w-12 m-auto mb-5 ' alt="" />
                <p className='font-semibold '>Customer Support</p>
                <p className='text-gray-500 '>We are committed to providing prompt and professional customer support. All inquiries are handled within 24–48 hours by our trained team. Assistance is available for order issues, product information, and general concerns. We prioritize clear communication and customer satisfaction, ensuring a reliable and supportive experience at every step.</p>
            </div>

            

        </div>
    )
}

export default OurPolicy
