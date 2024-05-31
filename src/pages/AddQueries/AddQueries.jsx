import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import useAuth from '../../Hooks/useAuth';
import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import useAxiosSec from '../../Hooks/useAxiosSec';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

import img1 from '../../assets/banner/6.jpg';
const img2 =
  'https://img.freepik.com/free-photo/pretty-woman-holding-earphones_23-2148348881.jpg?t=st=1716098589~exp=1716102189~hmac=c1a0fdd781e42d1987566ee282a7900cbb0ebdee278c68d8570c27ad18d521b6&w=900';
const img3 =
  'https://img.freepik.com/premium-photo/wireless-earbuds-wired-tangled-earphones-brown-pink-background-top-view-flat-lay_175682-24386.jpg?w=996';
const img4 =
  'https://img.freepik.com/premium-photo/fruity-gummy-worms-bright-colors_1234738-8256.jpg?w=900';
const img5 =
  'https://img.freepik.com/premium-photo/3d-rendering-pair-headphones-case-pink-background_844516-480.jpg?w=900';

const AddQueries = () => {
  const [saving, setSaving] = useState(false);
  const axiosSecure = useAxiosSec();
  const dateTime = new Date().toLocaleString('en-BD', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Include AM/PM indicator
  });
  // console.log(dateTime); // Output: 11/05/2024 11:42 PM (assuming current Bangladesh time)
  const { userDta } = useAuth();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async ({ formData }) => {
      const { data } = await axiosSecure.post(`/queries`, formData);
      console.log(data);
    },
    onError: () => {
      Swal.fire({
        title: 'Oppps ....!',
        text: 'Can not post query. Check your network !',
        icon: 'error',
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Good Job',
        text: 'Your Query has been successfully posted.',
        timer: 2200,
      });
      queryClient.invalidateQueries({ queryKey: ['my-query'] });
      console.log('Updated Query');
    },
  });

  const handleAddQuery = async (e) => {
    setSaving(true);
    e.preventDefault();
    const dta = e.target;
    const productName = dta.productName.value;
    const productBrand = dta.productBrand.value;
    const image = dta.image.files[0];
    const imgUrl = new FormData();
    imgUrl.append('image', image);
    const queryTitle = dta.queryTitle.value;
    const details = dta.detail.value;
    const userName = userDta.displayName;
    const userEmail = userDta.email;
    const userImg = userDta.photoURL;
    const recommendationCount = 0;

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        imgUrl
      );
      const productImage = data.data.display_url;
      // console.log(productImage);

      const formData = {
        productName,
        productBrand,
        productImage,
        queryTitle,
        details,
        userName,
        userEmail,
        userImg,
        dateTime,
        recommendationCount,
      };
      // console.log(formData);
      await mutateAsync({ formData });
      dta.reset();
      setSaving(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Alt Query|| Add Query</title>
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
              <Link to={'/my-queries'}>
                <button className="border-b border-mClr tracking-wider">
                  My Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-[700px] mx-auto my-10">
        <div className="w-full rounded-[5px] py-4 md:py-6 px-4 md:px-8 lg:px-20 mb-28 border-2 border-mClr dark:bg-slate-300">
          <div>
            <h1 className="text-[40px] text-slate-800 dark:text-slate-800 text-center">
              Add New Queries
            </h1>
            <p className="text-center text-slate-600 dark:text-slate-600 sm:text-lg font-normal mx-auto pt-2 pb-10">
              Share your product query and discover alternatives. Your input
              helps build a diverse knowledge base for informed decisions.
            </p>
          </div>
          <div>
            <form
              className="flex flex-col gap-5 w-full dark:text-white"
              onSubmit={handleAddQuery}
            >
              <TextField
                id="outlined-textarea"
                label="Product Name"
                placeholder="Product Name"
                required
                name="productName"
              />
              <TextField
                id="outlined-textarea"
                label="Product Brand"
                placeholder="Brand Name"
                required
                name="productBrand"
                className="text-3xl"
              />
              {/* Image Fild */}
              <div className="">
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
                    name="image"
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
                label="Query Title"
                placeholder="Enter your query title."
                required
                name="queryTitle"
                className="text-3xl"
              />
              <TextField
                id="outlined-textarea"
                label="Boycoing Reason Details"
                placeholder="Explain in detail why you are boycotting this product..."
                required
                name="detail"
                multiline
                rows={3}
                className="text-3xl"
              />

              <button
                disabled={saving}
                className="w-full py-1.5 bg-mClr rounded border-2 border-mClr text-white text-lg font-bold sm:text-xl mb-5 hover:-skew-x-12 duration-300 active:scale-95 hover:bg-transparent hover:text-mClr disabled:text-white disabled:bg-mClr"
              >
                {saving ? (
                  <ImSpinner9 className="animate-spin text-2xl mx-auto" />
                ) : (
                  'Add Query'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
