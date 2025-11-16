import React from "react";
import { Link , useNavigate} from "react-router-dom";

const Home = () => {


  const navigate = useNavigate()

  const handleQuickNav = (category) => {
    navigate(`/explore?jump=${category}`);
  };
  



  return (
    <div className="sm:pt-40 pt-30 sm:px-6 px-4 ">
      <video className='hidden sm:block fixed top-0 left-0 w-full h-full z-[-1] object-cover' src="/videos/bgvideo.mp4" autoPlay loop muted playsInline></video>
      {/* <img
        src="/images/bgWallpaper.jpeg"
        alt=""
        className="hidden sm:block fixed top-0 left-0 w-full h-full z-[-1] object-cover"
      /> */}
      <video
        className="block sm:hidden fixed top-0 left-0 w-full h-full z-[-1] object-cover"
        src="/videos/phoneVideoBg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="flex w-full flex-col sm:flex-row gap-8">
        <div className="sm:w-1/2 w-full flex flex-col gap-6 ">
          <h1 className="text-white sm:text-6xl text-5xl">
            Step into Game Haven, the digital home for gamers!
          </h1>
          <p className="text-2xl text-white">
            Shop top titles, explore new worlds, and level up your collection
            today.
          </p>
          <Link
            className="p-3 bg-white cursor-pointer text-center"
            to={"/explore"}
          >
            Explore
          </Link>
        </div>

        <div className="sm:w-1/2 w-full text-white text-2xl flex flex-col gap-2 justify-between sm:items-end">
          <div className="p-5 h-full flex flex-col gap-5 justify-between backdrop-blur-xl shadow-2xl shadow-red-400 ">
            <h1 className="text-4xl font-bold pb-4">Quick Navigation</h1>

            <div className=" p-2 bg-white text-black cursor-pointer hover:bg-red-500/20"  onClick={() => handleQuickNav('all_time_top')}>
              <div className="wrapperNav flex gap-3 items-center justify-center">
                <svg
                  className="h-5"
                  viewBox="0 0 25 16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M23.91 5.03a.636.636 0 01-.019.198l-1.535 5.867a.693.693 0 01-.673.505l-9.212.044H3.256c-.32 0-.6-.208-.677-.505L1.044 5.25a.637.637 0 01-.018-.204C.432 4.868 0 4.336 0 3.711c0-.772.657-1.4 1.465-1.4s1.466.628 1.466 1.4c0 .435-.209.824-.535 1.08l1.922 1.851c.486.468 1.16.736 1.85.736.815 0 1.592-.37 2.082-.99l3.159-3.999a1.365 1.365 0 01-.43-.989c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .374-.156.714-.407.966l.003.003 3.135 4.01c.49.625 1.27.999 2.088.999.696 0 1.35-.26 1.842-.73l1.935-1.847a1.375 1.375 0 01-.548-1.09c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .61-.41 1.127-.98 1.32zm-1.704 8.703c0-.368-.312-.666-.698-.666H3.458c-.385 0-.698.298-.698.666v1.6c0 .369.313.667.698.667h18.05c.386 0 .698-.298.698-.667v-1.6z"></path>
                </svg>

                <h1 className="text-[20px]"> All time top</h1>
              </div>
            </div>

            <div className=" p-2 bg-white text-black cursor-pointer hover:bg-red-500/20"   onClick={() => handleQuickNav('platform-187')}>
              <div className="wrapperNav flex gap-3 items-center justify-center">
              <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 16"
                >
                  <path d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"></path>
                </svg>

                <h1 className="text-[20px]">Playstation</h1>
              </div>
            </div>
          
            <div className=" p-2 bg-white text-black cursor-pointer hover:bg-red-500/20"  onClick={() => handleQuickNav('adventure')}>
              <div className="wrapperNav flex gap-3 items-center justify-center">
              <svg
                  className="h-5"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.002 512.002"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M276.502,27.81c-4.051-7.562-11.935-12.281-20.515-12.281c-8.579,0-16.462,4.719-20.514,12.281l-81.861,152.808
              c0.182,0.143,0.372,0.273,0.549,0.42l17.699,14.794l18.235,15.243l8.427,7.045l49.444-18.208c5.193-1.911,10.896-1.91,16.088,0.003
              l49.402,18.204l8.424-7.036l18.24-15.235l17.741-14.818c0.164-0.14,0.344-0.258,0.512-0.391L276.502,27.81z"
                      ></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M508.654,461.168L380.802,222.513l-18.239,15.235l-18.24,15.232l-11.363,9.492c-6.39,5.339-15.153,6.856-22.966,3.976
              l-53.991-19.894l-54.035,19.896c-2.616,0.963-5.337,1.434-8.039,1.435c-5.376,0-10.675-1.862-14.928-5.416l-11.353-9.492
              l-18.235-15.243l-18.234-15.243L2.759,462.211c-3.863,7.211-3.658,15.924,0.546,22.944c4.204,7.02,11.785,11.318,19.967,11.318
              h465.428c0.012,0,0.023,0,0.031,0c12.854,0,23.271-10.421,23.271-23.271C512,468.797,510.778,464.681,508.654,461.168z"
                      ></path>
                    </g>
                  </g>
                </svg>

                <h1 className="text-[20px]">Adventure</h1>
              </div>
            </div>
            <div className=" p-2 bg-white text-black cursor-pointer hover:bg-red-500/20" onClick={() => handleQuickNav('last-30-days')}>
              <div className="wrapperNav flex gap-3 items-center justify-center">
              <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 26"
                >
                  <path d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z"></path>
                </svg>

                <h1 className="text-[20px]">This Week</h1>
              </div>
            </div>
            <div className=" p-2 bg-white text-[#221e1e] cursor-pointer hover:bg-red-500/20"  onClick={() => handleQuickNav('added')}>
              <div className="wrapperNav flex gap-3 items-center justify-center">
                <svg
                  className="h-5"
                  viewBox="0 0 27 27"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 26.24V18.957H7.286V26.24H0ZM9.478 26.24V18.957H16.765V26.24H9.478ZM0 16.762V9.47799H7.286V16.762H0ZM9.478 16.762V9.47799H16.765V16.762H9.478ZM18.957 16.762V9.47799H26.243V16.762H18.957ZM0 7.28299V-1.14441e-05H7.286V7.28299H0ZM9.478 7.28299V-1.14441e-05H16.765V7.28299H9.478ZM18.957 7.28299V-1.14441e-05H26.243V7.28299H18.957Z"
                  ></path>
                </svg>

                <h1 className="text-[20px]"> Added</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
