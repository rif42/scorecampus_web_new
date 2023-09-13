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
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const MapIntegration = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "INSERT YOUR API KEY HERE",
  });
  const mapCenter = { lat: 1.3521, lng: 103.8198 };
  if (!isLoaded) return null;
  return (
    <GoogleMap
      center={mapCenter}
      zoom={10}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    ></GoogleMap>
  );
};

function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e, "form submitted")
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Other form inputs go here */}
      <label htmlFor="name">Your Name</label>
      <input
        name="name"
        id="name"
        type="text"
        className="mb-2 mt-1 flex h-10 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <label htmlFor="email">Your Email</label>
      <input
        name="email"
        id="email"
        type="email"
        className="mb-2 mt-1 flex h-10 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <label htmlFor="phone">Your Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        className="mb-2 mt-1 flex h-10 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <label htmlFor="subject">Your Subject</label>
      <input
        name="subject"
        id="subject"
        type="text"
        className="mb-2 mt-1 flex h-10 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <label htmlFor="message">Your Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Drag the bottom right corner to adjust text area size"
        className="mb-2 mt-1 flex h-10 w-full flex-row items-center justify-center rounded-md bg-white text-black"
      />

      <input
        name="submit"
        id="submit"
        type="submit"
        value="Submit"
        className="mt-6 flex h-10 w-40 flex-row items-center justify-center rounded-md bg-[#2F4DC4] text-base font-semibold"
      />
    </form>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-[100vh] flex-col items-center justify-center text-center ">
        <div className="flex min-w-[65rem] max-w-[50vw] place-content-center self-center ">
          <div className="mr-10 flex w-[30%] flex-col place-content-center self-center">
            <div className="flex justify-center align-middle">
              <Image
                alt="Hero Image"
                src="/images/heroes.png"
                height={350}
                width={350}
              />
            </div>
            <div className="flex flex-row justify-around  align-middle ">
              <Image
                alt="Scorecampus icon"
                src="/images/sc-icon.png"
                height={90}
                width={90}
                className="flex"
              />
              <Image
                alt="Scorecampus text"
                src="/images/sc.png"
                height={50}
                width={200}
              />
            </div>
          </div>
          <div className="flex w-[70%] flex-col place-content-center self-center pr-10 pt-8">
            <h1 className="flex text-left text-6xl font-extrabold">
              SCORE CAMPUS.
            </h1>
            <h2 className="flex text-left text-6xl ">Education Reinvented.</h2>
            <p className="flex pt-4 text-left text-lg">
              Level up and power up the Everyday Superhero* in your child! SCORE
              CAMPUS LIVE offers PERFORMANCE COACHING and EDUCATIONAL CAMPS
              equip your child with a perfect mix of academics, grit, character
              and skills to stand out and reach his/ her highest potential.
            </p>

            <p className="flex pt-4 text-left text-2xl font-bold">
              We do not just prepare children to get good grades. We prepare
              them to succeed in life.
            </p>

            <div className="flex flex-row gap-2 self-start pt-4">
              <button className="flex h-10 w-56 flex-col items-center justify-center rounded-md bg-blue-500 font-semibold">
                ScoreCampus Live
              </button>
              <button className="flex h-10 w-64 flex-col items-center justify-center rounded-md bg-red-500 font-semibold">
                ScoreCampus Connect
              </button>
              <button className="flex h-10 w-56 flex-col items-center justify-center rounded-md bg-yellow-500 font-semibold">
                ScoreCampus Pro
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[40vh] flex-col items-center justify-center bg-white text-center align-middle">
        <h2 className="flex text-left text-6xl font-extrabold text-[#3D2C93]">
          Score Campus Live
        </h2>
        <p className="flex py-6 text-lg text-black">
          Level up and power up the Everyday Superhero* in your child!
        </p>
        <button className="flex h-10 w-40 flex-row items-center justify-center rounded-md bg-[#2F4DC4] font-semibold">
          <BsFillTelephoneFill className="mr-2" /> Contact Us
        </button>
      </div>

      <div className="flex h-[50vh] flex-row justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787]">
        <div className="flex h-[40vh] w-[50vw] flex-row justify-center place-self-center ">
          <div className="flex w-[33%] flex-col items-center justify-center  px-4 align-middle text-5xl font-extrabold">
            Enroll your child for these ongoing programs:
            <button className="mt-10 flex h-10 w-40 flex-row items-center justify-center self-start rounded-md bg-[#2F4DC4] text-base font-semibold">
              <BsFillTelephoneFill className="mr-2" /> Contact Us
            </button>
          </div>
          <div className="flex w-[34%] flex-col items-start justify-center border-x-[5px] border-dotted border-white px-4">
            <p className="text-lg">Weekdays!</p>
            <h2 className="flex pt-2 text-3xl font-bold">Academic coaching</h2>
            <p className="pt-4 text-lg">
              Personalized coaching sessions focused on equipping students with
              how to think, organize and manage their daily life and school
              work. <br></br>
              Recommended age: 7 to 17 years old. <br></br>
              Monday to Friday, 4 to 8pm. <br></br>2 hours each of :
            </p>
            <p className="flex flex-row pt-4">
              {" "}
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
            <button className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold">
              <FaRegLightbulb className="mr-2" /> Sign Up
            </button>
          </div>
          <div className="flex w-[33%] flex-col items-start justify-center px-4">
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
            <button className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold">
              <FaRegLightbulb className="mr-2" /> Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[50vh] flex-row justify-center bg-white">
        <div className="flex h-[40vh] w-[50vw] flex-row items-center justify-center place-self-center">
          <div className="flex w-[33%] flex-col items-center justify-center  px-4 align-middle text-5xl font-extrabold text-[#3D2C93]">
            Reserve a slot for these upcoming camps:
            <button className="mt-10 flex h-10 w-40 flex-row items-center justify-center self-start rounded-md bg-[#2F4DC4] text-base font-semibold text-white">
              <BsFillTelephoneFill className="mr-2 fill-white" /> Contact Us
            </button>
          </div>
          <div className="flex h-[60%] w-[34%] flex-col items-start justify-center border-x-[5px] border-dotted border-black px-4 text-black">
            <p className="text-lg">Weekdays!</p>
            <h2 className="flex pt-2 text-3xl font-bold text-[#3D2C93]">
              The Next Level Camp
            </h2>
            <p className="pt-4 text-lg">
              Bring out the champion in your child <br></br>
              through a 5 to 7-day camp. <br></br>
              Recommended age: 7 to 17 years old <br></br>
            </p>
            <button className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold text-white">
              <FaRegLightbulb className="mr-2" /> Sign Up
            </button>
          </div>
          <div className="flex w-[33%] flex-col items-start justify-center px-4 text-black">
            <p className="text-lg ">
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
            <button className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold text-white">
              <FaRegLightbulb className="mr-2" /> Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[50vh] flex-row justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787]">
        <div className="flex h-[40vh] w-[50vw] flex-row items-center justify-center place-self-center ">
          <div className="flex w-[33%] flex-col items-center justify-center px-4 align-middle text-5xl font-extrabold">
            Our other programs and platforms:
            <button className="mt-10 flex h-10 w-40 flex-row items-center justify-center self-start rounded-md bg-[#2F4DC4] text-base font-semibold">
              <BsFillTelephoneFill className="mr-2" /> Contact Us
            </button>
          </div>
          <div className="flex h-[50%] w-[34%] flex-col items-start justify-center border-x-[5px] border-dotted border-white px-4">
            <h2 className="flex pt-2 text-3xl font-bold">
              Score Campus Connect
            </h2>
            <p className="pt-4 text-lg">
              Your one-stop shop for online learning management systems
            </p>
            <div className="flex flex-row items-start gap-4">
              <button className="mt-10 flex h-10 w-40 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold">
                <FaRegLightbulb className="mr-2" /> Get Lets Flip
              </button>
              <button className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#3D2C93]  font-semibold">
                <FaRegLightbulb className="mr-2" /> SC Portal
              </button>
            </div>
          </div>
          <div className="flex w-[33%] flex-col items-start justify-center px-4">
            <h2 className="flex pt-2 text-3xl font-bold">Score Campus Pro</h2>
            <p className="pt-4 text-lg">
              Programs for teachers and aspiring education superheroes
            </p>
            <button className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787]  font-semibold">
              <FaRegLightbulb className="mr-2" /> Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[50vh] items-center justify-center bg-white">
        <div className="flex h-[65%] w-[50%] flex-row ">
          <div className="flex w-[50%] flex-col items-center ">
            <Image
              alt="Hero Image"
              src="/images/heroes2.png"
              height={350}
              width={350}
              className="flex"
            />
            <p className="flex flex-row pt-2 text-center text-sm text-black">
              At Score Campus, we believe that academic excellence does NOT
              always equate to learning. Learning is a change in behavior as a
              result of an experience. It inspires action, provides direction,
              and brings out the superhero in each child.
            </p>
          </div>
          <div className="flex w-[50%] flex-col justify-center  pl-2">
            <h2 className="flex pt-2 text-5xl font-extrabold text-[#3D2C93]">
              Support your child to the fullest.
            </h2>
            <p className="flex flex-row py-4 text-black">
              Ask about our All-in-One Superhero Powers Program- a holistic
              approach to preparing your child for life.
            </p>
            <p className="flex flex-row text-black">
              <IoIosCheckmarkCircleOutline className="mr-1.5 h-[23px] w-[23px] fill-[#3D2C93]" />{" "}
              Boost Academic Excellence
            </p>
            <p className="flex flex-row pt-2 text-black">
              <IoIosCheckmarkCircleOutline className="mr-1.5 h-[23px] w-[23px] fill-[#3D2C93]" />{" "}
              Build a Winner`s Character Through Daily Team Sports Coaching
            </p>
            <p className="flex flex-row pt-2 text-black">
              <IoIosCheckmarkCircleOutline className="mr-1.5 h-[23px] w-[23px] fill-[#3D2C93]" />{" "}
              Acquire Real World Skills
            </p>
            <p className="flex flex-row pt-2 text-black">
              <IoIosCheckmarkCircleOutline className="mr-1.5 h-[23px] w-[23px] fill-[#3D2C93]" />{" "}
              Gain Socio-Emotional Balance, Mental Strength, & Fitness
            </p>
            <button className="mt-5 flex h-10 w-40 flex-row items-center justify-center self-start rounded-md bg-[#2F4DC4] text-base font-semibold">
              <BsFillTelephoneFill className="mr-2" /> Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[40vh] flex-col items-center justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787] align-middle">
        <h2 className="flex pt-2 text-5xl font-bold">
          “The highest form of research is essentially play.”
        </h2>
        <p className="pt-4 text-2xl">~ N. V. Scarfe, education researcher</p>
      </div>

      <div className="flex h-[50vh] items-center justify-center bg-white">
        <div className="flex h-[65%] w-[40%] flex-row ">
          <div className="flex h-full w-[50%] flex-col items-center pr-2">
            <div id="map" className="h-[100%] w-[100%] bg-red-300">
              {/* <MapIntegration /> */}
            </div>
          </div>
          <div className="flex w-[50%] flex-col justify-center pl-2">
            <h2 className="flex pt-2 text-5xl font-extrabold text-[#3D2C93]">
              The Score Campus Headquarters
            </h2>
            <p className="flex flex-row py-4 text-black">
              The Score Campus Headquarters is built for students by students- a
              space for inspiration, natural learning and excellence. It is one
              big educational playground where lessons permeate every corner.{" "}
              <br></br>
              Students come in excited to explore, experiment, dissect,
              synthesize and put into action abstract lessons learned in school.
            </p>
            <button className="mt-5 flex h-10 w-40 flex-row items-center justify-center self-start rounded-md bg-[#2F4DC4] text-base font-semibold">
              <BsFillTelephoneFill className="mr-2" /> Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="bg-saturdaysuperheroes flex h-[60vh] flex-col items-center justify-center bg-white bg-cover bg-center ">
        <div className="flex w-[50%] flex-col pr-10">
          <h2 className="flex text-left text-5xl font-extrabold text-white">
            What makes us different?
          </h2>
          <p className="flex flex-row pt-4 text-left text-white">
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
            At Score Campus, we believe that with the right mindset, lifeskills,
            character, and experience, children can confidently cope with stress
            and overcome life’s hurdles. <br></br>
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
          <button className="mt-5 flex h-10 w-40 flex-row items-center justify-center rounded-md bg-[#2F4DC4] text-base font-semibold">
            <BsFillTelephoneFill className="mr-2" /> Contact Us
          </button>
        </div>
      </div>

      <div className="flex h-[60vh] flex-col items-center justify-center bg-white bg-cover ">
        <div className="flex w-[50%] flex-col items-center justify-center pr-10 align-middle">
          <h2 className="flex text-center text-6xl font-extrabold text-black">
            What parents and kids have to say about Score Campus
          </h2>
          <div className="flex flex-row">
            <FaQuoteLeft className="mr-8 h-20 w-40 fill-gray-300" />
            <p className="flex flex-col pt-4 text-center text-black">
              I am going to be honest here. Working with the coaches of Score
              Campus was a challenge. Matthew got 5/100 for all his subjects
              when I brought him there the first time. Matthew was on medication
              for ADHD and the school had nothing but complaints about him.{" "}
              <br></br>
              The coaches told me that they would do their best. This was Matt’s
              PSLE year and we went to Score Campus in June. Results came and he
              got 225. We were speechless for an hour. I asked Matt, how did he
              do this? He replied, “The coaches built me a table to stand and do
              my work. Every time I got a right answer, he gave hugs, high fives
              and the genius cookie!” <br></br>
              <span className="pt-4 text-lg text-black">
                - Serene, Mother of Matthew
              </span>
            </p>
            <FaQuoteLeft className="ml-8 h-20 w-40 fill-gray-300" />
          </div>

          <div className="flex flex-row">
            <FaQuoteLeft className="mr-8 h-20 w-40 fill-gray-300" />
            <p className="flex flex-col pt-4 text-center text-black">
              They have a method. It involves, inpiration, independence and
              trust. You just have to trust them. My kid was in the 30s to 40s
              range and I was losing my mind. The coaches didnt over promise.
              They told me to back off as a parent I resisted for a while but I
              understood after a while. The outcome was beyond my expectation. I
              expected my child to fail, but she passed all subjects.
              <br></br>
              Not only that, she went to Express. If you are a parent with a kid
              struggling in Primary 5 or PSLE, bring them to Score Campus.{" "}
              <br></br>
              <span className="pt-4 text-lg text-black">
                - Mary, Mother of Liz.
              </span>
            </p>
            <FaQuoteLeft className="ml-8 h-20 w-40 fill-gray-300" />
          </div>
          <button className="mt-5 flex h-10 w-40 flex-row items-center justify-center rounded-md bg-[#2F4DC4] text-base font-semibold">
            <BsFillTelephoneFill className="mr-2" /> Contact Us
          </button>
        </div>
      </div>

      <div className="bg-educationsupport flex h-[80vh] flex-col items-center justify-center bg-cover bg-center">
        <div className="mr-[30%] flex w-[30%] flex-col">
          <h2 className="flex text-4xl font-extrabold text-white">
            Let Score Campus be your PARTNER in raising self-sufficient, happy,
            and successful children.
          </h2>
          <p className="flex flex-col pt-4 text-white">
            Not sure what program would best benefit your child? Each child is
            different. Let us create a personalized coaching experience that
            best suits your child’s personality, strengths, needs, interests,
            and passion. Since you’ve read this far, why not sit with a coach
            for a FREE parent-child consultation with one of our coaches?
          </p>
          <div className="flex flex-row items-center py-4">
            <Image
              alt="Coach Dave"
              src="/images/dave.jpg"
              height={350}
              width={350}
              className="h-20 w-20 rounded-full object-cover "
            />
            <p className="flex flex-col pl-2 text-white">
              JUNIORS AGE 7-11 Coach Dave: <br></br> +6590402225
            </p>
            <Image
              alt="Coach Ira"
              src="/images/Ira.jpg"
              height={350}
              width={350}
              className="ml-8 h-20 w-20 rounded-full object-cover"
            />
            <p className="flex flex-col pl-2 text-white">
              SENIORS AGE 11-17 Coach Ira: <br></br> +6591822117
            </p>
          </div>
          <Form />
        </div>
      </div>

      <div className="flex h-[40vh] flex-row items-center justify-center bg-gradient-to-br from-[#2f4dc4] to-[#df4787] align-middle">
        <Image
          alt="Hero Image"
          src="/images/heroes.png"
          height={350}
          width={350}
        />
        <div className="w-[40%] flex flex-col">
        <Image
          alt="Hero Image"
          src="/images/sc-icon-2.png"
          height={100}
          width={200}
        />
        <p><span className="text-2xl font-bold text-[#DF4787]">*Everyday Superhero</span> noun [C];</p>
        <p>Inspired people with intelligence, resilience, compassion and a strong will to succeed and make this a better world for everyone.</p>
        <p><span className="text-2xl font-bold text-[#DF4787]">*Everyday Superhero</span> noun [C];</p>
        <p>Inspired teachers making a positive change in the educational system and the lives of each student so they may blossom into Everyday Superheroes.</p>       
        </div>
      </div>
    </main>
  );
}
