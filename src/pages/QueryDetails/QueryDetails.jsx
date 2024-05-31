import { Link, useParams } from 'react-router-dom';
import useAxiosSec from '../../Hooks/useAxiosSec';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loding from '../Loding/Loding';
import img1 from '../../assets/banner/8.jpg';
const img2 =
  'https://img.freepik.com/free-photo/pretty-woman-holding-earphones_23-2148348881.jpg?t=st=1716098589~exp=1716102189~hmac=c1a0fdd781e42d1987566ee282a7900cbb0ebdee278c68d8570c27ad18d521b6&w=900';
const img3 =
  'https://img.freepik.com/premium-photo/wireless-earbuds-wired-tangled-earphones-brown-pink-background-top-view-flat-lay_175682-24386.jpg?w=996';
const img4 =
  'https://img.freepik.com/premium-photo/fruity-gummy-worms-bright-colors_1234738-8256.jpg?w=900';
const img5 =
  'https://img.freepik.com/premium-photo/3d-rendering-pair-headphones-case-pink-background_844516-480.jpg?w=900';

import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import { PiShareFatBold } from 'react-icons/pi';
import { FaRegCommentDots } from 'react-icons/fa';
import { TextField, Tooltip } from '@mui/material';
import { RiHandHeartLine } from 'react-icons/ri';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import axios from 'axios';
import { ImSpinner9 } from 'react-icons/im';

const QueryDetails = () => {
  const [saving, setSaving] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [recResonlen, setRecResonlen] = useState(250);
  const queryClient = useQueryClient();
  const { userDta } = useAuth();
  const axiosSecure = useAxiosSec();
  const { id } = useParams();

  // Query details data get
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => queryData(),
    queryKey: [`querydetail`],
  });
  const queryData = async () => {
    const { data } = await axiosSecure.get(`/query-details/${id}`);
    return data;
  };

  // Recommendation data get
  const {
    data: recommended = [],
    isLoading: recLoding,
    isError: recIsErr,
    error: recErr,
  } = useQuery({
    queryFn: () => recommendRec(),
    queryKey: [`recommend`, id],
  });
  const recommendRec = async () => {
    const { data } = await axiosSecure.get(`/recommended-query/${id}`);
    return data;
  };
  console.log(recLoding, recommended);

  // Recommendation Data Saving Database
  const { mutateAsync } = useMutation({
    mutationFn: async ({ formData }) => {
      const { data } = await axiosSecure.post(`/recommendation`, formData);
      console.log(data);
    },
    onError: () => {
      Swal.fire({
        title: 'Oppps ....!',
        text: 'Can not post recommendation. Check your network !',
        icon: 'error',
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Good Job',
        text: 'Your recommendation has been successfully posted.',
        timer: 2500,
      });
      queryClient.invalidateQueries({
        queryKey: [`recommend`],
      });
      console.log('Recommended Product');
      countingRecommend();
    },
  });

  // Recommendation Count Data Saving Database
  const { mutateAsync: countingRecommend } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosSecure.patch(
        `/recomendaton-count-update/${id}`
      );
      console.log(data);
    },
    onError: () => {
      Swal.fire({
        title: 'Oppps ....!',
        text: 'Check your network !',
        icon: 'error',
      });
    },
    onSuccess: () => {
      console.log('RecommendationCount incraged');
      queryClient.invalidateQueries({
        queryKey: [`querydetail`],
      });
      console.log('recommendationCount done');
    },
  });

  const dateTime = new Date().toLocaleString('en-BD', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Include AM/PM indicator
  });
  const handleRecommendation = async (e) => {
    setSaving(true);
    e.preventDefault();
    const dta = e.target;
    const recTitle = dta.recTitle.value;
    const recName = dta.recName.value;
    const recBrand = dta.recBrand.value;
    const imgL = dta.recImage.files[0];
    const imageLink = new FormData();
    imageLink.append('image', imgL);
    console.log(imageLink);
    const recReson = dta.recReson.value;
    const queryId = data._id;
    const queryTitles = data.queryTitle;
    const queryImg = data.productImage;
    const queryNames = data.productName;
    const userEmails = data.userEmail;
    const userNames = data.userName;
    const recUserEmail = userDta.email;
    const recUserName = userDta.displayName;
    const recUserImg = userDta.photoURL;
    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        imageLink
      );
      const recImage = data.data.display_url;
      const formData = {
        recTitle,
        recName,
        recBrand,
        recImage,
        recReson,
        queryId,
        queryTitles,
        queryImg,
        queryNames,
        userEmails,
        userNames,
        recUserEmail,
        recUserName,
        recUserImg,
        dateTime,
      };
      // console.log(formData);

      await mutateAsync({ formData });
      setSaving(false);
      dta.reset();
    } catch (error) {
      console.log(error);
    }
  };

  if ((error, isError)) {
    Swal.fire({
      title: 'Oppps ....!',
      text: 'Querys details data is not coming. Check your network!',
      icon: 'error',
    });
  }
  if ((recErr, recIsErr)) {
    Swal.fire({
      title: 'Oppps ....!',
      text: 'Recommendation data is not coming. Check your network!',
      icon: 'error',
    });
  }

  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
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
              <Link to={'/queries'}>
                <button className="border-b border-mClr tracking-wider">
                  All Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 max-w-[1700px] mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-full md:w-3/5 p-4 border dark:border-gray-500 rounded-md">
            {/* Card Details */}
            <div>
              <div
                onClick={() => setOpenModal(true)}
                className="w-full h-64 sm:h-80 md:h-64 lg:h-96 rounded-md"
                style={{
                  backgroundImage: `url(${data.productImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <div className="">
                <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-[45px] pt-5 text-mClr">
                  {data.queryTitle}
                </h1>
                <h1 className="underline text-2xl sm:text-3xl lg:text-4xl text-slate-800 pt-3 dark:text-white">
                  {data.productName}
                </h1>
                <h1 className="text-lg sm:text-2xl text-teal-600 py-3">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    Brand :{' '}
                  </span>
                  {data.productBrand}
                </h1>
                <p className="sm:pt-3 pb-2 text-slate-800 text-xl font-semibold dark:text-slate-200">
                  Reasons to seek alternatives:
                </p>
                <p className="sm:text-lg leading-7 text-slate-800 dark:text-slate-300">
                  {data.details}
                </p>
                <hr className="mb-4 mt-7" />
                {/* Posted Author */}
                <h1 className="text-2xl lg:text-3xl text-slate-800 border-b-2 border-mClr inline-block pr-3 pl-1 mb-5 dark:text-white">
                  Posted By:
                </h1>
                <div className="bg-gray-300 dark:bg-slate-900 rounded-md flex flex-col lg:flex-row lg:items-center justify-between gap-2 p-3 lg:p-0">
                  {/* Avatar image  */}
                  <div className="h-20 flex items-center gap-3">
                    <img
                      className="h-full w-20 rounded-sm border-2 border-mClr"
                      src={data.userImg}
                      alt="card navigate ui"
                    />
                    <div className="flex flex-col justify-start h-full py-2">
                      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 capitalize">
                        {data.userName}
                      </h2>
                      <p className="text-slate-800 dark:text-slate-300">
                        {data.userEmail}
                      </p>
                    </div>
                  </div>
                  {/* Setting button */}
                  <div className="lg:pr-6">
                    <p className="text-slate-800 dark:text-slate-300">
                      <span className="font-semibold"> Date:</span>{' '}
                      {data.dateTime.slice(0, 10)}
                    </p>
                    <p className="text-slate-800 dark:text-slate-300">
                      <span className="font-semibold">Time:</span>{' '}
                      {data.dateTime.slice(11, 20)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 rounded-md flex flex-col gap-10">
            <div className="border dark:border-gray-500 rounded-md p-5">
              <h1 className="py-3 px-4 text-center text-2xl mb-4 bg-[#b0da4eaf] dark:bg-[#449d85] rounded-md text-[#6c1896] dark:text-[#00ffaa] w-full">
                Total Recommendation:{' '}
                {data.recommendationCount.toString().length < 2 && '0'}
                {recommended.length}
              </h1>
              <h1 className="pb-3 text-2xl lg:text-3xl text-slate-800 dark:text-slate-100">
                {data.queryTitle}
              </h1>
              {/* icons */}
              <div className="rounded-md flex justify-between py-4">
                <Tooltip title="Support">
                  <button className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90">
                    <span className="text-2xl">
                      <RiHandHeartLine />
                    </span>
                    <h2 className="">40K</h2>
                  </button>
                </Tooltip>
                <Tooltip title="Recommendation">
                  <button className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90">
                    <span className="text-2xl">
                      <FaRegCommentDots />
                    </span>
                    <h2 className="tracking-widest">
                      {data.recommendationCount.toString().length < 2 && '0'}
                      {recommended.length}
                    </h2>
                  </button>
                </Tooltip>
                <button className="flex items-center gap-1 text-lg font-semibold text-slate-800 dark:text-white/90">
                  <span className="text-2xl">
                    <PiShareFatBold />
                  </span>
                  <h2 className="">40</h2>
                </button>
              </div>
            </div>
            <div className="rounded-md text-center dark:bg-slate-400 dark:p-4">
              <h1 className="py-4 text-2xl md:text-xl lg:text-2xl text-slate-800 dark:text-slate-100 bg-gray-300 dark:bg-gray-800 px-6 mb-5 rounded-t-md w-full">
                Add Recommendation
              </h1>

              <div>
                <form
                  className="flex flex-col gap-5 w-full dark:text-white"
                  onSubmit={handleRecommendation}
                >
                  <TextField
                    id="outlined-textarea"
                    label="Recommendation Title"
                    placeholder="Recommendation Title"
                    required
                    name="recTitle"
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Recommended Product Name"
                    placeholder="Recommended Product Name"
                    required
                    name="recName"
                  />
                  <TextField
                    id="outlined-textarea"
                    label="Recommended Product Brand"
                    placeholder="Recommended Product Brand"
                    required
                    name="recBrand"
                  />
                  {/* <TextField
                    id="outlined-textarea"
                    label="Recommended Product Image URL"
                    placeholder="Recommended Product Photo"
                    required
                    name="recImage"
                    className="text-3xl"
                  /> */}

                  {/* Image Fild */}
                  <div className="w-full">
                    <div className="relative">
                      <label
                        htmlFor="small_size"
                        className={`absolute left-0 top-0 bg-slate-800 dark:bg-slate-400  dark:font-medium px-5 py-[16.5px] rounded-l-md border-slate-400 dark:border-slate-100 text-base botder text-white dark:text-slate-800`}
                      >
                        Choose Image
                      </label>
                      <input
                        className={`pl-8 py-[6px] block w-full text-gray-900  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none bg-transparent text-base dark:placeholder-gray-400 border border-slate-400 dark:border-slate-800}`}
                        id="small_size"
                        type="file"
                        name="recImage"
                        placeholder="Choose image"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const validImageTypes = [
                              'image/jpeg',
                              'image/png',
                              'image/gif',
                              'image/bmp',
                              'image/webp',
                            ];
                            if (!validImageTypes.includes(file.type)) {
                              alert('Please select a valid image file.');
                              e.target.value = ''; // Clear the input
                            }
                          }
                        }}
                      />
                    </div>
                  </div>

                  <TextField
                    id="outlined-textarea"
                    label="Recommendation Reason"
                    placeholder="Explain in detail why you are recommending this product..."
                    required
                    name="recReson"
                    multiline
                    rows={4}
                    className="text-3xl"
                  />

                  {/* <input
                    className="w-full py-1.5 bg-mClr rounded border-2 border-mClr text-white text-lg font-bold sm:text-xl mb-5 hover:-skew-x-[9deg] duration-300 active:scale-95 hover:bg-transparent hover:text-mClr dark:hover:text-white dark:hover:border-white"
                    type="submit"
                    value="Add Recommendation"
                  /> */}
                  <button
                    disabled={saving}
                    className="w-full py-1.5 bg-mClr rounded border-2 border-mClr text-white text-lg font-bold sm:text-xl mb-5 hover:-skew-x-12 duration-300 active:scale-95 hover:bg-transparent hover:text-mClr disabled:text-white disabled:bg-mClr"
                  >
                    {saving ? (
                      <ImSpinner9 className="animate-spin text-2xl mx-auto" />
                    ) : (
                      'Add Recommendation'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Section  */}
        <div className="flex flex-col md:flex-row items-start gap-5 mt-16">
          <div className="w-full md:w-[70%] rounded-md">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100  font-mono mb-8">
              <span className="flex items-center">
                <span className="text-mClr dark:text-sClr">
                  <AiFillCaretRight />
                </span>
                <span className="border-b-2 border-mClr inline-block">
                  All Recommendations
                </span>
                <span className="text-mClr dark:text-sClr">
                  <AiFillCaretLeft />
                </span>
              </span>
            </h1>
            <div className="flex flex-col gap-5">
              {recommended.map((dta) => (
                <div
                  key={dta.queryId}
                  className="p-3 border dark:border-gray-500 rounded-md"
                >
                  <div className="flex items-center justify-between gap-0 mb-5">
                    {/* Avatar image  */}
                    <div className="flex items-center gap-3">
                      <img
                        className="h-12 w-12 rounded-full bg-black/40 border-2 border-mClr"
                        src={dta?.recUserImg}
                        alt="card navigate ui"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90 capitalize">
                          {dta.recUserName}
                        </h2>
                        <p className="text-gray-400">{dta.dateTime}</p>
                      </div>
                    </div>
                    {/* Setting button */}
                    <Link className="flex cursor-pointer flex-col gap-2 rounded-full text-slate-900 dark:text-slate-100 text-2xl">
                      <HiDotsVertical />
                    </Link>
                  </div>
                  <div className="w-full">
                    {/* <div className="w-12"></div> */}
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 w-full">
                      <div
                        className="h-60 w-full max-w-[450px] lg:w-3/5 bg-red-200 rounded-md"
                        style={{
                          backgroundImage: `url(${dta.recImage})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[1px] h-60 bg-gray-300 hidden lg:block"></div>
                      <div className="pt-3 w-full lg:w-2/5">
                        <p className="text-mClr font-bold text-lg">
                          Product Name:
                        </p>
                        <p className="text-xl xl:text-2xl font-medium text-slate-800 dark:text-slate-100 pb-0 sm:pb-5 md:pb-0 lg:pb-5">
                          {dta.recName}
                        </p>
                        <p className="text-mClr font-bold text-lg">
                          Product Brand:
                        </p>
                        <p className="text-xl xl:text-2xl font-medium text-slate-800 dark:text-slate-100">
                          {dta.recBrand}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-medium sm:text-3xl pt-4 pb-2 text-slate-800 dark:text-slate-100 font-serif">
                        {dta.recTitle}
                      </h1>
                      <p className="text-slate-700 dark:text-slate-300 max-w-[800px]">
                        {dta.recReson.slice(0, recResonlen)}

                        {dta.recReson.length !== recResonlen &&
                          dta.recReson.length > 250 && (
                            <span
                              className="cursor-pointer text-mClr"
                              onClick={() =>
                                setRecResonlen(dta.recReson.length)
                              }
                            >
                              ...see more
                            </span>
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[30%]"></div>
        </div>
      </div>

      {/* Image Full Screen Modal */}
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? 'visible opacity-1' : 'invisible opacity-0'
        } inset-0 w-full h-full bg-black/70 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute detailspageimage drop-shadow-2xl rounded-lg ${
            openModal
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
            onClick={() => setOpenModal(false)}
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
            src={data.productImage}
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

export default QueryDetails;
