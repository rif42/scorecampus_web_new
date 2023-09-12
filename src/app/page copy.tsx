"use client";

import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaRunning,
  FaBookReader,
  FaRegLightbulb,
  FaVolleyballBall,
} from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useMemo } from "react";


function Map({ address }) {
  const mapRef = useRef(null);
const geocoder = useMemo(() => new google.maps.Geocoder(), []);
useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
    });
loader.load().then(() => {
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current!, {
            center: results![0].geometry.location,
            zoom: 8,
          });
const marker = new google.maps.Marker({
            map: map,
            position: results![0].geometry.location,
          });
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  }, [address, geocoder]);
return <div style={{ height: "400px" }} ref={mapRef} />;
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

      <div className="flex h-[50vh] items-center justify-center bg-black">
        <div className="flex h-[65%] w-[40%] flex-row ">
          <div className="flex h-full w-[50%] flex-col items-center ">
            <div className="h-[100%] w-[100%] bg-red-300">
            <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
            </div>

          </div>
          <div className="flex w-[50%] flex-col justify-center  pl-2">
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
    </main>
  );
}
