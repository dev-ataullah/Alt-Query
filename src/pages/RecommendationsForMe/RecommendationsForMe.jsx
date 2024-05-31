const img1 =
  'https://img.freepik.com/free-photo/side-view-chicken-burger-deep-fired-chicken-fillet-with-tomato-cheese-lettuce-burger-buns_141793-4816.jpg?t=st=1716099507~exp=1716103107~hmac=547d29f3014d7fda03df59b9ff9157817c3b5884f29abe58452d350f2997d76b&w=900';
const img2 =
  'https://img.freepik.com/free-photo/young-brunette-with-paper-bags-shop_23-2147786815.jpg?t=st=1716099082~exp=1716102682~hmac=e91263a9bfd23ae0f8b65961e882f9dffb66872bc99f10521a1f8a028e9d47e7&w=900';
const img3 =
  'https://img.freepik.com/premium-photo/3d-rendering-pair-headphones-case-pink-background_844516-480.jpg?w=900';
const img4 =
  'https://img.freepik.com/premium-photo/delicious-homemade-hamburger-with-beef-lettuce-cheese-cucumber-french-fries-stone-background_156140-3097.jpg?w=900';
const img5 =
  'https://img.freepik.com/free-photo/front-view-chicken-burger-with-cheese-juice-green-salad-wooden-desk-sandwich-fast-food-meal_140725-25952.jpg?t=st=1716099488~exp=1716103088~hmac=4bf5efdf0503346474a2652a6e2c40f7a4ddd23f0c65f2605c5aeb481c078670&w=900';

import { Link } from 'react-router-dom';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSec from '../../Hooks/useAxiosSec';
import useAuth from '../../Hooks/useAuth';
import { AiFillCaretRight } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import noDataImg from '../../assets/error/noDta.jpg';

const RecommendationsForMe = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [modalDta, setModalDta] = useState(null);
  const [mdlImg, setMdlImg] = useState(null);
  const axiosSecure = useAxiosSec();
  const { userDta } = useAuth();
  // My Recommendations data get
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => dataGeting(),
    queryKey: ['recommendation-for-me'],
  });
  const dataGeting = async () => {
    const { data } = await axiosSecure.get(
      `/recommendation-for-me/${userDta.email}`
    );
    return data;
  };
  console.log(error, isError, isLoading);

  return (
    <div>
      <Helmet>
        <title>Alt Query|| Recommendation For Me</title>
      </Helmet>
      {/* Banner Part */}
      <div className="h-64 sm:h-72 w-full bg-red-200 relative">
        <MultyImgBanner
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
        />
        <div className="absolute z-10 top-0 left-0 bg-[#00000073] w-full h-full">
          <div className="h-full w-10/12 mx-auto flex items-center justify-center pt-10 sm:pt-20 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-white ">
              <Link to={'/'}>
                <button className="border-b border-mClr tracking-wider">
                  Home
                </button>
              </Link>
              <button className="">/</button>
              <Link to={''}>
                <button className="border-b border-mClr tracking-wider">
                  Recommendations For Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Table Part */}
      <div className="w-11/12 mx-auto pt-10">
        <div className="overflow-x-auto">
          <table className="w-full shadow-md border mx-auto border-gray-100 my-6 text-slate-700 dark:text-slate-100">
            <thead>
              <tr className="bg-[#0095FF] text-white">
                <th className="py-6 px-1 text-lg text-center border-b">
                  Image
                </th>
                <th className="py-6 px-1 text-lg text-left border-b">
                  Product Name
                </th>
                <th className="py-6 px-1 text-lg text-left border-b">Title</th>
                <th className="py-6 px-1 text-lg text-left border-b">Reason</th>
                <th className="py-6 px-1 text-lg border-b text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length < 1 ? (
                <div className="h-[450px] text-center mx-auto w-full">
                  <img
                    className="max-h-full mx-auto rounded-md"
                    src={noDataImg}
                    alt=""
                  />
                </div>
              ) : (
                data?.map((dta) => (
                  <tr
                    key={dta._id}
                    className="hover:bg-gray-200 dark:hover:bg-gray-900 border-b transition duration-300"
                  >
                    <td
                      className="flex justify-start"
                      onClick={() => setMdlImg(dta.recImage)}
                    >
                      <div
                        onClick={() => setOpenModal2(true)}
                        className="h-24 w-32"
                        style={{
                          backgroundImage: `url(${dta.recImage})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                    </td>
                    <td className="px-3 border-b border-r text-xl font-medium min-w-48">
                      <p>
                        {dta.recName.slice(0, 18)}
                        {dta.recName.length > 18 && '...'}
                      </p>
                    </td>
                    <td className=" px-1 border-b border-r text-xl font-medium min-w-56">
                      {dta.recTitle.slice(0, 32)}
                      {dta.recTitle.length > 32 && '...'}
                    </td>
                    <td className=" px-3 border-b border-r text-base font-medium min-w-80">
                      {dta.recReson.slice(0, 95)}
                      {dta.recReson.length > 95 && '...'}
                    </td>
                    <td className=" px-5 border-b text-end">
                      <span onClick={() => setModalDta(dta)}>
                        <button
                          onClick={() => setOpenModal(true)}
                          className="bg-mClr hover:bg-[#278dc8] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-8 rounded-md"
                        >
                          Details
                        </button>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details modal */}
      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? 'opacity-1 visible' : 'invisible opacity-0'
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute recommendModalStyle overflow-y-scroll h-[90%] sm:max-h-max w-11/12 sm:w-10/12 md:w-9/12 lg:w-4/6 rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openModal
              ? 'scale-1 opacity-1 duration-300'
              : 'scale-0 opacity-0 duration-150'
          } `}
        >
          <div>
            <div className="p-3 rounded-md">
              <div className="bg-gray-300 dark:bg-slate-900 rounded-md flex flex-col lg:flex-row lg:items-center justify-between gap-2 p-3 lg:p-0 mb-6">
                {/* Avatar image  */}
                <div className="h-20 flex items-center gap-3">
                  <img
                    className="h-full w-20 rounded-sm border-2 border-mClr"
                    src={modalDta?.recUserImg}
                    alt="card navigate ui"
                  />
                  <div className="flex flex-col justify-start h-full py-2 text-left">
                    <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 capitalize">
                      {modalDta?.recUserName}
                    </h2>
                    <p className="text-slate-800 dark:text-slate-300">
                      {modalDta?.recUserEmail}
                    </p>
                  </div>
                </div>
                {/* Date Time */}
                <div className="lg:pr-6 text-left">
                  <p className="text-slate-800 dark:text-slate-300">
                    <span className="font-semibold"> Date:</span>{' '}
                    {modalDta?.dateTime?.slice(0, 10)}
                  </p>
                  <p className="text-slate-800 dark:text-slate-300">
                    <span className="font-semibold">Time:</span>{' '}
                    {modalDta?.dateTime?.slice(11, 20)}
                  </p>
                </div>
              </div>
              <h1 className="text-2xl pb-3 text-slate-800 dark:text-slate-100 flex items-center">
                <span className="text-mClr dark:text-sClr">
                  <AiFillCaretRight />
                </span>
                You Recommendations.
              </h1>
              <div className="w-full">
                {/* <div className="w-12"></div> */}
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 w-full">
                  <div
                    className="h-64 w-full max-w-[550px] lg:w-3/5 bg-red-200 rounded-md"
                    style={{
                      backgroundImage: `url(${modalDta?.recImage})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  {/* <div className="w-[1px] h-60 bg-gray-300 hidden lg:block"></div> */}
                  <div className="pt-3 w-full lg:w-2/5 flex flex-col md:flex-row lg:flex-col md:gap-10">
                    <div className="text-left sm:text-center md:text-left lg:text-center">
                      <p className="text-mClr font-bold text-lg">
                        Product Name:
                      </p>
                      <p className="text-xl xl:text-2xl font-medium text-slate-800 dark:text-slate-100 pb-0 sm:pb-5 md:pb-0 lg:pb-5">
                        {modalDta?.recName}
                      </p>
                    </div>
                    <div className="text-left sm:text-center md:text-left lg:text-center">
                      <p className="text-mClr font-bold text-lg">
                        Product Brand:
                      </p>
                      <p className="text-xl xl:text-2xl font-medium text-slate-800 dark:text-slate-100">
                        {modalDta?.recBrand}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-medium sm:text-3xl pt-4 pb-2 text-slate-800 dark:text-slate-100 font-serif">
                    {modalDta?.recTitle}
                  </h1>
                  <p className="text-slate-700 dark:text-slate-300 max-w-[800px]">
                    {modalDta?.recReson}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <hr />
          <div className="text-left p-3">
            <h1 className="text-2xl pb-3 text-slate-800 dark:text-slate-100 flex items-center">
              <span className="text-mClr dark:text-sClr">
                <AiFillCaretRight />
              </span>
              You recommend this for that query.
            </h1>
            <div className="w-full">
              {/* <div className="w-12"></div> */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 w-full">
                {modalDta?.queryImg ? (
                  <div
                    className="h-64 w-full max-w-[550px] lg:w-3/5 bg-red-200 rounded-md"
                    style={{
                      backgroundImage: `url(${modalDta?.queryImg})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                ) : (
                  <div className="w-full max-w-[550px] lg:w-3/5 text-center">
                    <img
                      className="h-64 w-auto mx-auto"
                      src="https://shorturl.at/erBM5"
                    />
                  </div>
                )}
                {/* <div className="w-[1px] h-60 bg-gray-300 hidden lg:block"></div> */}
                <div className="pt-3 w-full lg:w-2/5 flex flex-col md:flex-row lg:flex-col md:gap-10">
                  <div className="text-left sm:text-center md:text-left lg:text-center">
                    <p className="text-mClr font-bold text-lg">Product Name:</p>
                    <p className="text-xl xl:text-2xl font-medium text-slate-800 dark:text-slate-100 pb-0 sm:pb-5 md:pb-0 lg:pb-5">
                      {modalDta?.queryNames}
                    </p>
                  </div>
                  <div className="text-left sm:text-center md:text-left lg:text-center">
                    <p className="text-mClr font-bold text-lg">
                      Product Brand:
                    </p>
                    <p className="text-xl xl:text-2xl font-medium text-slate-800 dark:text-slate-100">
                      {modalDta?.queryBrands
                        ? modalDta.queryBrands
                        : 'Not Included'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-medium sm:text-3xl pt-4 pb-2 text-slate-800 dark:text-slate-100 font-serif">
                  <span className="font-bold font-sans"> Query Title:</span>{' '}
                  {modalDta?.queryTitles}
                </h1>

                {/* <p className="text-slate-700 dark:text-slate-300 max-w-[800px]">
                  {modalDta?.recReson}
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-5">
            <Link
              to={`/query-details/${modalDta?.queryId}`}
              className="text-lg px-6 py-1 border-2 hover:bg-mClr text-mClr hover:text-white rounded border-mClr"
            >
              Go to Query
            </Link>
            <button
              onClick={() => setOpenModal(false)}
              className="rounded-md bg-mClr hover:bg-[#1f81ba] px-14 py-2 text-xl mt-3 text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen image Modal */}
      <div
        onClick={() => setOpenModal2(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal2 ? 'visible opacity-1' : 'invisible opacity-0'
        } inset-0 w-full h-full bg-black/70 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute max-h-full drop-shadow-2xl rounded-lg ${
            openModal2
              ? 'opacity-1 duration-300 translate-y-0'
              : '-translate-y-20 opacity-0 duration-150'
          } group overflow-hidden`}
        >
          {/* Favorite button */}
          <svg
            className="w-8 mx-auto rounded-lg absolute left-2 top-2 drop-shadow-[0_0_10px_black] cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          {/* close button */}
          <svg
            onClick={() => setOpenModal2(false)}
            className="w-10 mx-auto hover:opacity-60 absolute right-0 drop-shadow-[0_0_10px_black] cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
          {/* image */}
          <img
            src={mdlImg}
            className="min-w-[300px] md:min-w-[500px] min-h-[200px] md:min-h-[350px] bg-black/20"
            alt="modal navigate ui"
          />
          <div className="absolute right-0 bottom-0 duration-200 drop-shadow-[0_0_5px_black]">
            <button className="text-xl text-[#fff] p-3 duration-200 hover:opacity-60">
              <svg
                className="w-5 inline-block mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
              Share
            </button>
            <button className="text-xl text-[#fff] p-3 duration-200 hover:opacity-60">
              <svg
                className="w-5 inline-block mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z"
                    fill="#fff"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsForMe;
