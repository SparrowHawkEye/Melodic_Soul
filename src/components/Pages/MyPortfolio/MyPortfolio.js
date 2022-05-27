import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import maksud from "../../../assets/myImg.png";
import { BsFillBookFill } from "react-icons/bs";
import { GiMaterialsScience } from "react-icons/gi";
import { IoGitNetworkOutline } from "react-icons/io5";
const MyPortfolio = () => {
  const aboutMe = {
    name: "Maksudur Rahman",
    email: "makh0043@gmail.com",
    education: "Bsc in Civil and Environmental Engineering ",
    skills: "MERN Stack Developers",
    facebookURL: "https://www.facebook.com/ami1dukhi/",
    githubURL: "https://github.com/SparrowHawkEye",
    twitterURL: "https://twitter.com/SparrowHawk_Eye",
    youtubeURL: "https://www.youtube.com/channel/UCB00BNdnkR-_qniHjWkrSMw",
    projects: [
      {
        name: "Bookie House",
        description: "Warehouse Management Website",
        URL: "https://bookie-house.web.app/",
      },
      {
        name: "Happy Hearts",
        description: "A Psychologist Personal Website",
        URL: "https://happy-hearts-sparrow.web.app/",
      },
      {
        name: "Book Review",
        description: "A Website Reviewing a Book",
        URL: "https://bookreview-assignment9-sparrowhawk.netlify.app/",
      },
    ],
  };
  return (
    <div className="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-20">
      <PageTitle title="My Portfolio" />
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-8 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${maksud})` }}
          ></div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{aboutMe.name}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <div className="pt-4 text-base font-bold flex flex-col items-start justify-center lg:justify-start">
            <div className="flex items-center">
              <BsFillBookFill className="text-red-500 text-xl mr-3"></BsFillBookFill>
              <p>Education:</p>
            </div>
            <p className="font-normal">{aboutMe.education}</p>
          </div>
          <div className="pt-3 text-base font-bold flex flex-col items-start justify-center lg:justify-start">
            <div className="flex items-center">
              <IoGitNetworkOutline className="text-red-500 text-xl mr-3"></IoGitNetworkOutline>
              <p>My Work:</p>
            </div>
            <div className="my-3 flex flex-wrap gap-3">

            
            <a
              href={`${aboutMe.projects[0].URL}`}
              target="_blank"
              rel="noreferrer"
              className="badge font-normal text-md py-4 px-3 bg-[#4506CB] border-0 text-white"
            >
              {aboutMe.projects[0].name}
            </a>
            <a
              href={`${aboutMe.projects[1].URL}`}
              target="_blank"
              rel="noreferrer"
              className="badge font-normal text-md py-4 px-3 bg-[#6ea9e4] border-0 text-white"
            >
              {aboutMe.projects[1].name}
            </a>
            <a
              href={`${aboutMe.projects[2].URL}`}
              target="_blank"
              rel="noreferrer"
              className="badge font-normal text-md py-4 px-3 bg-[#F05242] border-0 text-white"
            >
              {aboutMe.projects[2].name}
            </a>
            </div>
          </div>
          <div className="pt-3 text-base font-bold flex flex-col items-start justify-center lg:justify-start">
            <div className="flex items-center">
              <GiMaterialsScience className="text-red-500 text-xl mr-3"></GiMaterialsScience>
              <p>Skills:</p>
            </div>
            <p className="font-normal">{aboutMe.skills}</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            <span className="badge text-md py-4 px-3 bg-orange-400 border-0 text-white">
              HTML
            </span>
            <span className="badge text-md py-4 px-3 bg-blue-400 border-0 text-white">
              CSS
            </span>
            <span className="badge text-md py-4 px-3 bg-yellow-400 border-0 text-white">
              JavaScript
            </span>
            <span className="badge text-md py-4 px-3 bg-green-400 border-0 text-white">
              MongoDB
            </span>
            <span className="badge text-md py-4 px-3  border-0 text-white">
              Express
            </span>
            <span className="badge text-md py-4 px-3 bg-blue-600 border-0 text-white">
              React
            </span>
            <span className="badge text-md py-4 px-3 bg-green-600 border-0 text-white">
              Node
            </span>
          </div>

          <div className="py-4 flex justify-center">
            <a
              href={`mailto:${aboutMe.email}`}
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-6 pb-8 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <a
              className="link"
              href={`${aboutMe.facebookURL}`}
              target="_blank"
              rel="noreferrer"
              data-tippy-content="@facebook_handle"
            >
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
              </svg>
            </a>
            <a
              className="link"
              href={`${aboutMe.twitterURL}`}
              target="_blank"
              rel="noreferrer"
              data-tippy-content="@twitter_handle"
            >
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              className="link"
              href={`${aboutMe.githubURL}`}
              target="_blank"
              rel="noreferrer"
              data-tippy-content="@github_handle"
            >
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a
              className="link"
              href={`${aboutMe.youtubeURL}`}
              target="_blank"
              rel="noreferrer"
              data-tippy-content="@youtube_handle"
            >
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>YouTube</title>
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img
          src={maksud}
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default MyPortfolio;
