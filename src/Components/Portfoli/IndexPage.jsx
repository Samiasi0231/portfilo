import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
const ProfilePictureUploader = () => {
  const [pictures, setPictures] = useState([
    "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709727641/Screenshot_20240227_193535_dicvwl.jpg",
    "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709729259/Screenshot_24_odfjcp.png",
    "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709728783/IMG_1111_iv4ijd.jpg",
    "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709728903/Screenshot_11_ytfxsn.png",
    "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709726442/Snapchat-338411178_nbf7zo.jpg",
    "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709727845/20240227_171559_xwffsx.jpg",
    "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709726381/Snapchat-321940697_2_adhxfm.jpg",
  ]);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  // Function to handle picture upload
  //const handlePictureUpload = (event) => {
  // const files = event.target.files;
  //const newPictures = [
  // "https://res.cloudinary.com/dvkfkatgo/image/upload/v1709727641/Screenshot_20240227_193535_dicvwl.jpg",
  //"https://res.cloudinary.com/dvkfkatgo/image/upload/v1709727845/20240227_171559_xwffsx.jpg",
  // ];
  // for (let i = 0; i < files.length; i++) {
  //   newPictures.push(URL.createObjectURL(files[i]));
  // }
  // setPictures(newPictures);
  // };

  // Function to switch to the next picture
  const switchToNextPicture = () => {
    console.log("here now");

    console.log(currentPictureIndex % pictures.length);
    console.log(pictures.length);

    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  console.log({ currentPictureIndex });

  // useEffect to switch pictures every 5 seconds
  useEffect(() => {
    // handlePictureUpload();
    console.log("here");
    const interval = setInterval(switchToNextPicture, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        {pictures.length > 0 && (
          <img
            src={pictures[currentPictureIndex]}
            alt="Profile"
            className="rounded-full"
            style={{ width: "150px", height: "150px" }}
          />
        )}
      </div>
      {/* <div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePictureUpload}
          multiple
        />
      </div> */}
    </div>
  );
};

const IndexPage = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };
  return (
    <section id="port">
      <div className="container h-[180vh]mx-auto max-w-[1640px] flex flex-col-reverse md:flex-row max-h-full">
        <div className="  mx-auto flex flex-col md:flex-row ">
          {/* flex the the profile image */}
          <div className="w-fit mt-[10%] mx-auto items-center px-4 md:w-2/6">
            <h1 className="text-gray-300">
              Portfoilio Made With Following Tools
            </h1>
            <ul className="text-white text-xl font-semibold">
              <li>Figma</li>
              <li>Raect.JS</li>
              <li>Tailwind Css</li>
              <li>Vscode</li>
            </ul>
            <p className="text-2xl text-gray-300">Full Stack Web Developer</p>

            <div className="px-5">
              <ProfilePictureUploader />
            </div>
            <div className="items-center text-white text-bold">
              <h1>Details:</h1>
              <p>SAMUEL ASIMETAMUNOPIRI</p>
              <div className="flex">
                <FontAwesomeIcon icon={faPhone} className="p-2" />
                <p className="">
                  Phone#
                  <span className="text-gray-300 mr-3 text-xl">
                    @+234818961755
                  </span>
                </p>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faEnvelope} className=" p-2" />
                <p className="mr-2">
                  Email:
                  <span className="text-gray-300 text-xl">
                    Samuel@gmail.com
                  </span>
                </p>
              </div>
              <p>
                Github:
                <span className="text-gray-300 text-xl">samiasi0231</span>
              </p>
            </div>
          </div>
          {/*pfile left*/}
          <div className=" w-full flex mt-[30%] flex-col   md:flex-row">
            <div className="w-full mx-auto py-4 px-2  items-center bg-[#FFFFFF] md:w-2/4">
              <div>
                <ProfilePictureUploader />
              </div>
              <h1 className="font-bold font-poppins texl- md:text-xl ">
                SAMUEL <br /> ASIMETAMUNOPIRI
              </h1>
              <p className="text-blue-950 italic text-xl">
                Full Stack Web Developer
              </p>
              <div>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className="border-t border-gray-400"></div>
              <div className="">
                <p className="bg-blue-900 text-pink-900 text-2xl font-bold">
                  Name:
                  <span className=" text-white text-xl p-2">
                    Samuel Asimetamunopiri
                  </span>
                </p>
                <p className="bg-blue-900 text-pink-900 text-2xl font-bold">
                  Degree
                  <span className=" text-white text-xl p-2">
                    Bachelor Degree
                  </span>
                </p>
                <p className="bg-blue-900  text-pink-900 text-2xl font-bold ">
                  Course:
                  <span className=" text-white text-xl p-2">
                    Mathematic/Statistics
                  </span>
                </p>
                <p className="bg-blue-900 text-pink-900 text-2xl font-bold">
                  country:
                  <span className=" text-white text-xl p-2">Nigeria</span>
                </p>
              </div>
              <h1>LANGUAGES</h1>
              {/*Language*/}

              <div className="w-2/3 bg-gray-200 h-6 rounded-full overflow-hidden">
                <div
                  className="bg-blue-950  text-white h-full text-l transition-all duration-500"
                  style={{ width: `${100}%` }}
                >
                  English Language 100%
                </div>
              </div>
              <div className="w-2/3 bg-gray-200 h-6 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-blue-950 h-full  text-white transition-all duration-500"
                  style={{ width: `${86}%` }}
                >
                  Yoruba 86%
                </div>
              </div>
              <div className="w-2/3 bg-gray-200 h-6 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-blue-950 h-full text-white  transition-all duration-500"
                  style={{ width: `${60}%` }}
                >
                  Igbo 60%
                </div>
              </div>
              <div className="w-2/3 bg-gray-200 h-6 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-blue-950 h-full px-2 text-white transition-all duration-500"
                  style={{ width: `${75}%` }}
                >
                  Ijaw 75%
                </div>
              </div>
              {/*Tools*/}
              <h1 className="mt-4 text-bold text-3xl">Tools</h1>
              <div className="w-2/3 bg-black h-6 rounded-full overflow-hidden">
                <div
                  className="bg-pink-900 h-full text-gray-100 px-2 transition-all duration-500"
                  style={{ width: `${99}%` }}
                >
                  Figma 98%
                </div>
              </div>
              <div className="w-2/3 bg-black h-6 mt-2 rounded-full overflow-hidden">
                <div
                  className="bg-pink-900 h-full px-2 text-gray-100 transition-all duration-500"
                  style={{ width: `${99}%` }}
                >
                  Visual Studio 99%
                </div>
              </div>
              <div className="w-2/3 bg-blue-950 h-6 mt-2 rounded-full overflow-hidden">
                <div
                  className="bg-pink-900 h-full px-2 text-gray-100 transition-all duration-500"
                  style={{ width: `${73}%` }}
                >
                  Github 73 %
                </div>
              </div>
              <div className="w-2/3 bg-blue-950 h-6 mt-2 rounded-full overflow-hidden">
                <div
                  className="bg-pink-900 h-full px-2 text-gray-100 transition-all duration-500"
                  style={{ width: `${97}%` }}
                >
                  Html 97%
                </div>
              </div>
              <div className="w-2/3 bg-blue-950 h-6 mt-2  rounded-full overflow-hidden">
                <div
                  className="bg-pink-900 h-full px-2 text-gray-100 transition-all duration-500"
                  style={{ width: `${80}%` }}
                >
                  Css 80%
                </div>
              </div>
              <div className="w-2/3 bg-blue-950 h-6 mt-2 rounded-full overflow-hidden">
                <div
                  className="bg-pink-900 h-full px-2 text-gray-100 transition-all duration-500"
                  style={{ width: `${86}%` }}
                >
                  Javascript 86%
                </div>
              </div>
              <div className="w-2/3 bg-blue-950 h-6 mt-2 rounded-full overflow-hidden">
                <div
                  className="bg-pink-900 h-full px-2 text-gray-100 transition-all duration-500"
                  style={{ width: `${80}%` }}
                >
                  React Js 80%
                </div>
              </div>
              {/*download button*/}
              <div>
                <Link to="/">
                  <button
                    className="h-8 bg-blue-950 w-20 mt-4 rounded-xl
                  transition  duration-500 transform hover:translate-y-4 hover:pointer "
                  >
                    Download
                  </button>
                </Link>
              </div>
            </div>
            {/*second card*/}
            <div className=" mx-auto w-full px-2">
              <div className="flex  flex-col-reverse md:flex-row h-30 w-full ">
                <p className="text-left text-white  font-semibold text-m">
                  I'm <span font-bold>SAMUEL ASIMETAMUNOPIRI</span>. An
                  enthusiastic full-stack developer with a passion for building
                  fast and beautiful web application. My working principles are
                  first understanding the task to know what is required by the
                  client, carry on research, then get the necessary tools and
                  finally carryon the task.
                  <br /> I have a solid grasp of HTML,CSS, and JAVASCRIPT, and
                  i'm <br />
                  proficient in using REACT to create engaging user experiences.
                  <br />
                  Also committed to <param name="" value="" />
                  producing high quality code and always looking for a way to
                  improve my skills.
                </p>
                <div className="mt-2">
                  <img
                    src="\images\young guy writes something on a tablet.png"
                    alt="logo"
                    className="w-[1000px] h-60 object-cover scale-80 block saturate-100"
                  />
                </div>
              </div>
              {/*SERVICES*/}
              <div className="text-center px-2 py-4 mx-auto text-white">
                <h1 className="font-xl font-bold">MY SERVICES</h1>
                <p className="font-semibold text-xl">
                  As a full-stack web developer proficient in Node.js and React,
                  <br />
                  my portfilo services includes:
                </p>
              </div>
              {/*SERVICES category*/}
              <div>
                <div className="grid grid-col-1 gap-4 rounded-md ">
                  {/*card1*/}
                  <div className="bg-white p-2 shadow-lg rounded-lg hover:scale-105 duration-300">
                    <div className="item- center">
                      <img
                        src="\images\unsplash_OqtafYT5kTw.png"
                        alt=" w-full h-32 rounded-md mb-4 "
                      />
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 text-start">
                        WEB DEVELOPMENT
                      </h4>
                      <p className="text-sm text-gray-600">Source Code</p>
                    </div>
                  </div>

                  {/*card2*/}
                  <div className=" bg-white p-2  shadow-lg rounded-lg hover:scale-105 duration-300">
                    <div className="item- center">
                      <img
                        src="https://res.cloudinary.com/dvkfkatgo/image/upload/v1709729259/Screenshot_24_odfjcp.png"
                        alt=" w-full h-32 rounded-md  saturate mb-4 "
                      />
                      <h4 className="font-bold text-gray-800 mb-2 text-start">
                        e-commerce
                      </h4>
                      <p className="text-sm text-gray-600">
                        <a
                          href="https://foodvendorapp.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://foodvendorapp.vercel.app
                        </a>
                      </p>
                    </div>
                  </div>
                  {/*card3*/}
                  <div className=" bg-white p-2  shadow-lg rounded-lg hover:scale-105 duration-300">
                    <div className="item- center">
                      <img
                        src="\images\realstate (29).png"
                        alt=" w-full h-32 rounded-md  saturate mb-4 "
                      />
                      <h4 className="font-bold text-gray-800 mb-2 text-start">
                        Real Estate
                      </h4>
                      <p className="text-sm text-gray-600">
                        <a
                          href="https://real-estate-xi-ten.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://real-estate-xi-ten.vercel.app
                        </a>
                      </p>
                    </div>
                  </div>
                  {/*card4*/}
                  <div className="bg-white p-2  shadow-lg rounded-lg hover:scale-105 duration-300 ">
                    <div className="item- center">
                      <img
                        src="/images/tourist (25).png"
                        alt=" w-full h-32 rounded-md mb-4 "
                      />
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 text-start">
                        tourist site
                      </h4>
                      <p className="text-sm text-gray-600">
                        <a
                          href="https://touristpage.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://touristpage.vercel.app
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
