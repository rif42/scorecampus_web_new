import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'

const ContactUsBtn = () => {
  return (
    <a href='/#contact-us' className="mb-6 mt-10 flex h-10 w-40 flex-row items-center justify-center self-center rounded-md bg-[#2F4DC4] text-base font-semibold text-white lg:self-start">
    <BsFillTelephoneFill className="mr-2" /> Contact Us
  </a>
  )
}

export default ContactUsBtn