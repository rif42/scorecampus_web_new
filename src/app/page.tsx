"use client";

import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaRunning,
  FaBookReader,
  FaRegLightbulb,
  FaVolleyballBall,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { motion } from "framer-motion";
import ContactUsBtn from "./components/ContactUsBtn";
import { toast } from "react-hot-toast";
import Script from "next/script";
import Link from "next/link";

const MapIntegration = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY as string,
    libraries: ["places"],
  });
  const mapCenter = { lat: 1.3521, lng: 103.8198 };
  if (!isLoaded) return null;
  return (
    <GoogleMap
      center={mapCenter}
      zoom={10}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
};


type WindoWithRecaptcha = Window & {
  grecaptcha: UniversalType;
};

declare const window: WindoWithRecaptcha;

function Form() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(formRef?.current as HTMLFormElement);
    setLoading(true)
    if (window.grecaptcha) {
      window.grecaptcha.ready(function () {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY, {action: 'submit'})
          .then(async function (token: string) {
            const response = await fetch('/api/mails', {
              method:'POST',
              body: JSON.stringify({...Object.fromEntries(form), captchaToken: token})
            })
            if(response.ok) toast.success('Thank you, we already received your email!')
            else toast.error((await response.json())?.message ?? 'Sorry, failed to send email, try again later')
            setLoading(false)
          });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      {/* Other form inputs go here */}
      <label htmlFor="name">Your Name</label>
      <input
        name="name"
        id="name"
        type="text"
        className="mb-2 mt-1 flex h-10 px-2 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <label htmlFor="email">Your Email</label>
      <input
        name="email"
        id="email"
        type="email"
        required
        className="mb-2 mt-1 flex h-10 px-2 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <label htmlFor="phone">Your Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        className="mb-2 mt-1 flex h-10 px-2 w-full flex-row items-center justify-center rounded-md bg-white text-black"
        required
      />

      <label htmlFor="subject">Your Subject</label>
      <input
        name="subject"
        id="subject"
        type="text"
        className="mb-2 mt-1 flex h-10 px-2 w-full flex-row items-center justify-center rounded-md bg-white text-black"
        required
      />

      <label htmlFor="message">Your Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Drag the bottom right corner to adjust text area size"
        className="mb-2 mt-1 flex h-10 px-2 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <button
        id="submit"
        type="submit"
        className="mt-10 text-white flex h-10 w-40 flex-row items-center justify-center rounded-md bg-[#DF4787]  text-base font-semibold"
      >
        {loading?'Loading..':'Submit'}
      </button>
    </form>
  );
}

export default function Home() {
  const [screenwidth, setScreenWith] = useState(1000);
  useEffect(()=>{
    setScreenWith(window?.innerWidth)
  },[])
  return (
    <>
    <main className="flex min-h-screen flex-col overflow-hidden">
      <div
        onClick={() => {
          console.log(screenwidth);
        }}
        className="absolute flex h-[100vh] w-[100%] items-center justify-center overflow-hidden align-middle "
      >
        <ReactPlayer
          url="https://www.youtube.com/embed/wQzPOEFBewU?si=q28pBej6scb8saCW&amp;controls=0"
          // url="/public/images/sc.mp4"
          playing={true}
          loop={true}
          muted={true}
          width={screenwidth > 1920 ? "120%" : "1920px"}
          height={"120%"}
          className="absolute z-[-1] flex self-center object-none"
        />
      </div>
      <div className="flex h-[100vh] flex-col items-center justify-center bg-opacity-10 bg-gradient-to-br from-[#2f4dc4]/90 to-[#df4787]/90 text-center">
        <div className="flex min-w-[400px] max-w-[50vw] flex-col place-content-center self-center lg:flex-row">
          <div className="flex w-full flex-col place-content-center self-center lg:mr-10 lg:w-[30%]">
            <div className="flex justify-center align-middle">
              <Image
                alt="Hero Image"
                src="/images/heroes.png"
                height={350}
                width={350}
                className="flex w-[30%] lg:w-[80%]"
              />
            </div>
            <div className="flex flex-row justify-center align-middle lg:justify-around ">
              <Image
                alt="Scorecampus icon"
                src="/images/sc-icon.png"
                height={90}
                width={90}
                className="flex w-[10%] lg:w-[80%]"
              />
              <Image
                alt="Scorecampus text"
                src="/images/sc.png"
                height={50}
                width={200}
                className="flex w-[20%] lg:w-[80%]"
              />
            </div>
          </div>
          <div className="flex w-[90%] flex-col items-center self-center pt-1 lg:w-[70%] lg:pr-10 lg:pt-8 relative z-10">
            <h1 className="flex text-4xl font-extrabold lg:self-start lg:text-6xl">
              SCORE CAMPUS.
            </h1>
            <h2 className="flex text-4xl lg:self-start lg:text-start lg:text-6xl ">
              Education Reinvented.
            </h2>
            <p className="flex pt-4 text-sm lg:text-left lg:text-lg">
              Level up and power up the Everyday Superhero* in your child! SCORE
              CAMPUS LIVE offers PERFORMANCE COACHING and EDUCATIONAL CAMPS
              equip your child with a perfect mix of academics, grit, character
              and skills to stand out and reach his/ her highest potential.
            </p>

            <p className="text-md flex  pt-4 font-bold lg:text-left lg:text-2xl">
              We do not just prepare children to get good grades. We prepare
              them to succeed in life.
            </p>

            <div className="flex flex-col gap-2 pt-4 lg:flex-row lg:self-start">
              <a href="https://app.scorecampus.com" target="_blank" className="flex h-6 w-52 flex-col items-center justify-center rounded-md bg-blue-500 text-base font-semibold lg:h-10">
                ScoreCampus Live
              </a>
              <a  href="https://getletsflip.com" target="_blank" className="flex h-6 w-52 flex-col items-center justify-center rounded-md bg-red-500 font-semibold lg:h-10">
                ScoreCampus Connect
              </a>
              <Link href="/" className="flex h-6 w-52 flex-col items-center justify-center rounded-md bg-yellow-500 font-semibold lg:h-10">
                ScoreCampus Pro
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white py-[5%] text-center align-middle">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <h2 className="flex text-center text-6xl font-extrabold text-[#3D2C93]">
            Score Campus Live
          </h2>
          <p className="flex py-6 text-lg text-black">
            Level up and power up the Everyday Superhero* in your child!
          </p>
          <ContactUsBtn/>
        </motion.div>
      </div>

      <div className="] flex justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787] py-[10%]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <div className="flex w-[80%] flex-col justify-center place-self-center lg:w-[60vw] lg:flex-row ">
            <div className="flex flex-col items-center justify-center px-4 text-center align-middle  text-5xl font-extrabold lg:w-[33%] lg:text-left">
              Enroll your child for these ongoing programs:
              <ContactUsBtn/>
            </div>
            <div className="flex flex-col items-start justify-center border-x-[0px] border-y-[5px] border-dotted border-white px-4 py-8 lg:w-[34%] lg:border-x-[5px] lg:border-y-[0px] lg:py-0">
              <p className="text-lg">Weekdays!</p>
              <h2 className="flex pt-2 text-3xl font-bold">
                Academic coaching
              </h2>
              <p className="pt-4 text-lg">
                Personalized coaching sessions focused on equipping students
                with how to think, organize and manage their daily life and
                school work. <br></br>
                Recommended age: 7 to 17 years old. <br></br>
                Monday to Friday, 4 to 8pm. <br></br>2 hours each of :
              </p>
              <p className="flex flex-row pt-4">
                <FaRunning className="mr-0.5 h-[25px] w-[25px] fill-[#6EC1E4]" />{" "}
                Physical & mental fitness coaching.
              </p>
              <p className="flex flex-row pt-2">
                <FaBookReader className="mr-1.5 h-[23px] w-[23px] fill-[#6EC1E4]" />{" "}
                Academic coaching
              </p>
              <p className="ml-7">
                P1-P6: English, Maths, and Science Secondary school: Biology,
                Physics & Chemistry
              </p>
              <a href="/#contact-us" className="mt-10 flex text-white h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold">
                <FaRegLightbulb className="mr-2" /> Sign Up
              </a>
            </div>
            <div className="flex flex-col items-start justify-center  border-b-[5px] border-dotted border-white px-4 py-8 lg:w-[33%] lg:border-b-[0px] lg:py-0">
              <p className="text-lg">Saturday!</p>
              <h2 className="flex pt-2 text-3xl font-bold">
                Saturday Superheroes
              </h2>
              <p className="pt-4 text-lg">
                Self-mastery and motivational programs toward achieving success
                inside and outside the classroom. <br></br>
                Recommended age: 7 to 17 years old <br></br>
                Saturdays 2pm to 6pm. <br></br>4 full hours of:
              </p>
              <p className="flex flex-row pt-4">
                <FaRunning className="mr-0.5 h-[25px] w-[25px] fill-[#6EC1E4]" />{" "}
                Character development
              </p>
              <p className="flex flex-row pt-2">
                <FaBookReader className="mr-1.5 h-[23px] w-[23px] fill-[#6EC1E4]" />{" "}
                Motivational coaching
              </p>
              <p className="flex flex-row pt-2">
                <FaVolleyballBall className="mr-1.5 h-[23px] w-[23px] fill-[#6EC1E4]" />{" "}
                Portfolio building through sports and
              </p>
              <p className="flex flex-row pt-2">
                <FaRegLightbulb className="mr-1.5 h-[23px] w-[23px] fill-[#6EC1E4]" />{" "}
                Project-based learning.
              </p>
              <a  href="/#contact-us" className="mt-10 text-white flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold">
                <FaRegLightbulb className="mr-2" /> Sign Up
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center bg-white py-[8%]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <div className="flex w-[80%] flex-col justify-center place-self-center lg:w-[60vw] lg:flex-row ">
            <div className="flex flex-col items-center justify-center px-4 py-12 text-center align-middle  text-5xl font-extrabold text-[#3D2C93] lg:w-[33%] lg:text-left">
              Reserve a slot for these upcoming camps:
             <ContactUsBtn/>
            </div>
            <div className="flex flex-col items-start justify-center border-x-[0px] border-y-[5px] border-dotted border-black px-4 py-8 text-black lg:w-[34%] lg:border-x-[5px] lg:border-y-[0px] lg:py-0">
              <p className="text-lg">
                Happening from June 14 to 20, 2023 in Singapore & Malaysia!
              </p>
              <h2 className="flex pt-2 text-3xl font-bold text-[#3D2C93]">
                The Next Level Camp
              </h2>
              <p className="pt-4 text-lg">
                Bring out the champion in your child through a 5 to 7-day camp.{" "}
                <br></br>
                Recommended age: 7 to 17 years old <br></br>
              </p>
              <a  href="https://thenextlevelcamp.com/#contact-us" target="_blank" className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787] font-semibold  text-white">
                <FaRegLightbulb className="mr-2" /> Sign Up
              </a>
            </div>
            <div className="flex flex-col items-start justify-center border-b-[5px] border-dotted border-black px-4 py-8 text-black lg:w-[33%] lg:border-b-[0px] lg:py-0">
              <p className="text-lg">
                Happening from June 5 to 8, 2023 in Singapore!
              </p>
              <h2 className="flex pt-2 text-3xl font-bold text-[#3D2C93]">
                Saturday Superheroes
              </h2>
              <p className="pt-4 text-lg">
                Turning ideas into reality through a 4-day camp for start-ups.{" "}
                <br></br>
                Recommended age: 7 to 17 years old <br></br>
              </p>

              <a href="/#contact-us" className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787] font-semibold  text-white">
                <FaRegLightbulb className="mr-2" /> Sign Up
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787] py-[7%] ">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <div className="flex w-[80%] flex-col justify-center place-self-center lg:w-[60vw] lg:flex-row ">
            <div className="flex flex-col items-center justify-center px-4 text-center align-middle  text-5xl font-extrabold lg:w-[33%] lg:text-left">
              Our other programs and platforms:
              <ContactUsBtn/>
            </div>
            <div className="flex flex-col items-start justify-center border-x-[0px] border-y-[5px] border-dotted border-white px-4 py-8 lg:w-[34%] lg:border-x-[5px] lg:border-y-[0px] lg:py-0">
              <h2 className="flex pt-2 text-3xl font-bold">
                Score Campus Connect
              </h2>
              <p className="pt-4 text-lg">
                Your one-stop shop for online learning management systems{" "}
                <br></br>
              </p>
              <div className="mt-10 flex w-full flex-row flex-wrap gap-2">
                <a href="https://getletsflip.com" target="_blank" className="flex text-white h-10 w-40 flex-row items-center justify-center rounded-md bg-[#DF4787]  font-semibold">
                  <FaRegLightbulb className="mr-2" /> Get Lets Flip
                </a>
                <a href="https://app.scorecampus.com" target="_blank" className="flex text-white h-10 w-36 flex-row items-center justify-center rounded-md bg-[#3D2C93]  font-semibold">
                  <FaRegLightbulb className="mr-2" /> SC Portal
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center border-b-[5px] border-dotted border-white px-4 py-8 lg:w-[33%] lg:border-b-[0px] lg:py-0">
              <h2 className="flex pt-2 text-3xl font-bold">Score Campus Pro</h2>
              <p className="pt-4 text-lg">
                Programs for teachers and aspiring education superheroes
              </p>
              <Link href="/" className="mt-10 flex h-10 w-36 text-white flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold">
                <FaRegLightbulb className="mr-2" /> Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white py-[7%]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex h-[65%] flex-col items-center self-center lg:w-[50%] lg:flex-row ">
            <div className="flex w-[70%] flex-col items-center ">
              <Image
                alt="Hero Image"
                src="/images/heroes2.png"
                height={350}
                width={350}
                className="flex h-[60%] w-[60%]"
              />
              <p className="flex flex-row pt-2 text-center text-sm text-black">
                At Score Campus, we believe that academic excellence does NOT
                always equate to learning. Learning is a change in behavior as a
                result of an experience. It inspires action, provides direction,
                and brings out the superhero in each child.
              </p>
            </div>
            <div className="flex w-[70%] flex-col justify-center  pl-2">
              <h2 className="flex pt-2 text-center text-5xl font-extrabold text-[#3D2C93] lg:text-left">
                Support your child to the fullest.
              </h2>
              <p className="flex flex-row py-4 text-black">
                Ask about our All-in-One Superhero Powers Program- a holistic
                approach to preparing your child for life.
              </p>
              <div className="flex w-full flex-col">
                <div className="flex flex-row">
                  <IoIosCheckmarkCircleOutline className="mr-1.5 mt-1 w-[10%] self-start fill-[#3D2C93]" />
                  <p className="flex flex-row text-black">
                    Boost Academic Excellence
                  </p>
                </div>
                <div className="flex flex-row">
                  <IoIosCheckmarkCircleOutline className="mr-1.5 mt-1 w-[10%] self-start fill-[#3D2C93]" />
                  <p className="flex w-[90%] flex-row text-black">
                    Build a Winner`s Character Through Daily Team Sports
                    Coaching
                  </p>
                </div>
                <div className="flex flex-row">
                  <IoIosCheckmarkCircleOutline className="mr-1.5 mt-1 w-[10%] self-start fill-[#3D2C93]" />
                  <p className="flex w-[90%] flex-row text-black">
                    Acquire Real World Skills
                  </p>
                </div>
                <div className="flex flex-row">
                  <IoIosCheckmarkCircleOutline className="mr-1.5 mt-1 w-[10%] self-start fill-[#3D2C93]" />
                  <p className="flex w-[90%] flex-row text-black">
                    Gain Socio-Emotional Balance, Mental Strength, & Fitness
                  </p>
                </div>
              </div>

              <ContactUsBtn/>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787] py-[5%] align-middle">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <h2 className="flex pt-2 text-center text-3xl font-bold lg:text-5xl">
            “The highest form of research is essentially play.”
          </h2>
          <p className="pt-4 text-xl lg:text-2xl">
            ~ N. V. Scarfe, education researcher
          </p>
        </motion.div>
      </div>

      <div className="flex items-center justify-center bg-white py-[5%]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="flex items-center justify-center "
        >
          <div className="flex h-[65%] w-[80%] flex-col items-center py-10 lg:w-[40%] lg:flex-row ">
            <div className="flex h-full w-[50%] flex-col items-center pr-2">
              <div id="map" className="h-64 w-full bg-red-300">
                <MapIntegration />
              </div>
            </div>
            <div className="flex flex-col justify-center pl-2 lg:w-[50%]">
              <h2 className="flex pt-2 text-center text-5xl font-extrabold text-[#3D2C93] lg:text-left">
                The Score Campus Headquarters
              </h2>
              <p className="flex flex-row py-4 text-center text-black lg:text-left">
                The Score Campus Headquarters is built for students by students-
                a space for inspiration, natural learning and excellence. It is
                one big educational playground where lessons permeate every
                corner. <br></br>
                Students come in excited to explore, experiment, dissect,
                synthesize and put into action abstract lessons learned in
                school.
              </p>
              <ContactUsBtn/>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white bg-saturdaysuperheroes bg-cover bg-right py-[5%] ">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex w-[80%] flex-col py-10 pr-10 lg:w-[50%]">
            <h2 className="flex text-left text-5xl font-extrabold text-white">
              What makes us different?
            </h2>
            <p className="flex flex-row pt-4 text-left text-sm text-white lg:text-lg">
              We start at an early age – we accept students as young as 7!{" "}
              <br></br>
              As classes get harder, it is important to address challenges early
              so your child is able to keep pace before he or she falls too far
              behind and begins experiencing the impacts of academic stress.
              <br></br>
              We continue to coach through the age of 17. <br></br>
              We want to ensure that the children upgrade their skills to be at
              par with the ever-changing needs and levels of difficulty of each
              school year. <br></br>
              Academics is the easy part. Our kids need more.<br></br>
              At Score Campus, we believe that with the right mindset,
              lifeskills, character, and experience, children can confidently
              cope with stress and overcome life’s hurdles. <br></br>
              We use heutagogical & andragogical methods of teaching which kids
              look forward to. <br></br>
              We use the world as a classroom, experience as a teacher, and
              inspiration as motivation. <br></br>
              We see every experience as a teachable moment - be it a game of
              foosball, a walk in the park or a math worksheet. <br></br>
              We are not afraid to give kids a hard time. <br></br>
              Age-appropriate and well-thought-out challenges that push kids to
              their optimum performance will be difficult to do but the lessons
              learned are incomparable. <br></br>
              We nurture a love for learning. <br></br>
              Life is all about learning and embracing opportunities to grow and
              be a better version of oneself. <br></br>
              With this mindset and a love for learning, one can conquerany
              obstacle and emerge a champion.
            </p>
            <ContactUsBtn/>
          </div>
        </motion.div>
      </div>

      <div className=" bg-white bg-cover py-[5%] ">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center  "
        >
          <div className="flex w-[90%] flex-col items-center justify-center align-middle lg:w-[45%]">
            <h2 className="flex pb-4 text-center text-4xl font-extrabold text-black lg:text-6xl">
              What parents and kids have to say about Score Campus
            </h2>
            <div className="flex w-full flex-row">
              <FaQuoteLeft className="mt-4 w-20 fill-gray-300 lg:mr-8 lg:h-20 lg:w-40" />
              <p className="flex flex-col pt-4 text-center text-sm text-black lg:text-base">
                I am going to be honest here. Working with the coaches of Score
                Campus was a challenge. Matthew got 5/100 for all his subjects
                when I brought him there the first time. Matthew was on
                medication for ADHD and the school had nothing but complaints
                about him. <br></br>
                The coaches told me that they would do their best. This was
                Matt’s PSLE year and we went to Score Campus in June. Results
                came and he got 225. We were speechless for an hour. I asked
                Matt, how did he do this? He replied, “The coaches built me a
                table to stand and do my work. Every time I got a right answer,
                he gave hugs, high fives and the genius cookie!” <br></br>
                <span className="pt-2 text-xl text-black lg:text-lg">
                  - Serene, Mother of Matthew
                </span>
              </p>
              <FaQuoteLeft className="mt-4 w-20 fill-gray-300 lg:ml-8 lg:h-20 lg:w-40" />
            </div>

            <div className="flex flex-row pt-4">
              <FaQuoteLeft className="mt-4 w-20 fill-gray-300 lg:mr-8 lg:h-20 lg:w-40" />
              <p className="flex flex-col pt-4 text-center text-sm text-black lg:text-base">
                They have a method. It involves, inpiration, independence and
                trust. You just have to trust them. My kid was in the 30s to 40s
                range and I was losing my mind. The coaches didnt over promise.
                They told me to back off as a parent I resisted for a while but
                I understood after a while. The outcome was beyond my
                expectation. I expected my child to fail, but she passed all
                subjects.
                <br></br>
                Not only that, she went to Express. If you are a parent with a
                kid struggling in Primary 5 or PSLE, bring them to Score Campus.{" "}
                <br></br>
                <span className="pt-2 text-xl text-black lg:text-lg">
                  - Mary, Mother of Liz.
                </span>
              </p>
              <FaQuoteLeft className="mt-4 w-20 fill-gray-300 lg:ml-8 lg:h-20 lg:w-40" />
            </div>
            <ContactUsBtn/>
          </div>
        </motion.div>
      </div>

      <div className="bg-educationsupport bg-cover bg-right py-[5%]" id="contact-us">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex w-[80%] flex-col lg:mr-[30%] lg:w-[35%]">
            <h2 className="flex text-2xl font-extrabold text-white lg:text-4xl">
              Let Score Campus be your PARTNER in raising self-sufficient,
              happy, and successful children.
            </h2>
            <p className="flex flex-col pt-4 text-white">
              Not sure what program would best benefit your child? Each child is
              different. Let us create a personalized coaching experience that
              best suits your child’s personality, strengths, needs, interests,
              and passion. Since you’ve read this far, why not sit with a coach
              for a FREE parent-child consultation with one of our coaches?
            </p>
            <div className="flex flex-col items-center py-4 lg:flex-row">
              <div className="flex flex-row">
                <Image
                  alt="Coach Dave"
                  src="/images/dave.jpg"
                  height={350}
                  width={350}
                  className="h-[30%] w-[30%] rounded-full object-cover lg:h-28 lg:w-28 "
                />
                <p className="flex flex-col pl-2 text-white">
                  JUNIORS AGE 7-11 Coach Dave: <br></br> +6590402225
                </p>
              </div>

              <div className="flex flex-row pt-4 lg:pt-0">
                <Image
                  alt="Coach Ira"
                  src="/images/Ira.jpg"
                  height={350}
                  width={350}
                  className="h-[30%] w-[30%] rounded-full object-cover lg:ml-8 lg:h-28 lg:w-28"
                />
                <p className="flex flex-col pl-2 text-white">
                  SENIORS AGE 11-17 Coach Ira: <br></br> +6591822117
                </p>
              </div>
            </div>
            <Form />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787] py-[2%] align-middle lg:flex-row">
        <Image
          alt="Hero Image"
          src="/images/heroes.png"
          height={350}
          width={350}
          className="flex w-[50%] lg:w-[20%]"
        />
        <div className="flex w-[80%] flex-col lg:w-[30%]">
          <Image
            alt="Hero Image"
            src="/images/sc-icon-2.png"
            height={100}
            width={200}
            className="flex self-center lg:self-start"
          />
          <p>
            <span className="text-2xl font-bold text-[#DF4787]">
              *Everyday Superhero
            </span>{" "}
            noun [C];
          </p>
          <p>
            Inspired people with intelligence, resilience, compassion and a
            strong will to succeed and make this a better world for everyone.
          </p>
          <p>
            <span className="text-2xl font-bold text-[#DF4787]">
              *Everyday Superhero
            </span>{" "}
            noun [C];
          </p>
          <p>
            Inspired teachers making a positive change in the educational system
            and the lives of each student so they may blossom into Everyday
            Superheroes.
          </p>
        </div>
      </div>
    </main>
          <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}&trustedtypes=true`}
        />
        </>
  );
}