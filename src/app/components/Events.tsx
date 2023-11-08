import React from "react";
import ContactUsBtn from "./ContactUsBtn";
import { FaRegLightbulb } from "react-icons/fa";

const events = [
  {
    title: "Bridging program ",
    datePlace: "Happening on November 27 & 28, 2023 in Singapore!",
    description:
      "Prepare them for 2024 earlier. Especially mentally and academically",
  },
  {
    title: "Classroom Without Walls Camp",
    datePlace: "Happening from December 4 - 7, 2023 in Singapore!",
    description:
      "an entrepreneurship and science camp that will a stay in camp that’s focuses on skills needed for the future",
  },
  {
    title: "The Next Level Camp",
    datePlace: "Happening from December 11 - 17, 2023 in Singapore & Malaysia!",
    description:
      "Bring out the champion in your child through a 5 to 7-day camp.",
    age: "Recommended age: 7 to 17 years old",
  },
];
const Events = () => {
  return (
    <div className="flex w-[80%] flex-col justify-center place-self-center lg:w-[60vw] lg:flex-row ">
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center align-middle  text-5xl font-extrabold text-[#3D2C93] lg:w-[33%] lg:text-left">
        Reserve a slot for these upcoming camps:
        <ContactUsBtn />
      </div>
      {events.map((event, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start justify-center border-x-[0px] border-t-[5px] border-dotted border-black px-4 py-8 text-black lg:w-[34%] lg:border-r-[5px] lg:border-y-[0px] lg:py-0"
        >
          <p className="text-lg">{event.datePlace}</p>
          <h2 className="flex pt-2 text-3xl font-bold text-[#3D2C93]">
            {event.title}
          </h2>
          <p className="pt-4 text-lg">
            {event.description}{" "}
            {event.age ? (
              <>
                {" "}
                <br></br>
                Recommended age: 7 to 17 years old <br></br>
              </>
            ) : null}
          </p>
          <a
            href="https://thenextlevelcamp.com/#contact-us"
            target="_blank"
            className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787] font-semibold  text-white"
          >
            <FaRegLightbulb className="mr-2" /> Sign Up
          </a>
        </div>
      ))}

      {/* <div className="flex flex-col items-start justify-center border-x-[0px] border-y-[5px] border-dotted border-black px-4 py-8 text-black lg:w-[34%] lg:border-x-[5px] lg:border-y-[0px] lg:py-0">
        <p className="text-lg">
          Happening from December 11-17, 2023 in Singapore & Malaysia!
        </p>
        <h2 className="flex pt-2 text-3xl font-bold text-[#3D2C93]">
          The Next Level Camp
        </h2>
        <p className="pt-4 text-lg">
          Bring out the champion in your child through a 5 to 7-day camp.{" "}
          <br></br>
          Recommended age: 7 to 17 years old <br></br>
        </p>
        <a
          href="https://thenextlevelcamp.com/#contact-us"
          target="_blank"
          className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787] font-semibold  text-white"
        >
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

        <a
          href="/#contact-us"
          className="mt-10 flex h-10 w-36 flex-row items-center justify-center self-start rounded-md bg-[#DF4787] font-semibold  text-white"
        >
          <FaRegLightbulb className="mr-2" /> Sign Up
        </a>
      </div> */}
    </div>
  );
};

export default Events;
