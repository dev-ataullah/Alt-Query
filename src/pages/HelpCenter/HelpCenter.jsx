import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaAccusoft, FaSearch } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import Swal from 'sweetalert2';
import { MdManageAccounts } from 'react-icons/md';
import useAxios from '../../Hooks/useAxios';

const HelpCenter = () => {
  const axioss = useAxios();
  const [modal, setModal] = useState(false);
  const [imgErr, setImgErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleHelp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setModal(true);
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (help) => {
      console.log(help);
      const { data } = await axioss.post('/help', help);
      console.log(data);
    },
    onSuccess: () => {
      console.log('Sened your message');
      toast.success('Successfully Send Problem.');
      setLoading(false);
      setModal(false);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setImgErr(false);
    const photo = data.photo[0];
    if (photo.name === '' || photo.size === 0) {
      setImgErr(true);
      return;
    }
    const problem_title = data.problem_title;
    const details = data.details;
    const fromImg = new FormData();
    fromImg.append('image', photo);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        fromImg
      );
      const screenshot = data.data.display_url;
      const help = {
        problem_title,
        screenshot,
        details,
      };
      //   console.log(help);
      //   return;
      await mutateAsync(help);
      reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        title: 'Oops...!',
        text: `Sorry, Item could not be Updated ! "${error.message}"`,
        icon: 'error',
      });
    }
    // reset();
  };
  console.log(errors);

  return (
    <div className="relative">
      <Toaster />
      {modal && (
        <div className="absolute  top-36 left-1/2 -translate-x-1/2 w-[600px] min-h-48 bg-red-300 rounded-md z-30">
          <div className="mx-auto overflow-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 border px-8 py-10 rounded-md bg-slate-800 text-white"
            >
              <div>
                <input
                  className="w-full bg-transparent shadow-md shadow-slate-500 px-3 py-2 border rounded"
                  type="text"
                  placeholder="Your Problem Title"
                  {...register('problem_title', { required: true })}
                />

                {errors.problem_title && (
                  <span className="text-red-500">
                    Please Input Your Problem Title
                  </span>
                )}
              </div>
              <div>
                <div className="relative">
                  <label
                    htmlFor="img"
                    className={`absolute left-0 top-0 bg-slate-600 px-4 py-[12px] text-base botder text-white border border-r-0 rounded-l cursor-pointer`}
                  >
                    Problem Screenshot
                  </label>
                  <input
                    id="img"
                    className="w-full bg-transparent shadow-md shadow-slate-500 px-3 py-1 border rounded pl-16"
                    type="file"
                    placeholder="Name"
                    {...register('photo', { required: true })}
                  />
                </div>
                {errors.photo && (
                  <span className="text-red-500">
                    Please Upload Problem Screenshot
                  </span>
                )}
                {imgErr && (
                  <span className="text-red-500">
                    Please Upload Problem Screenshot
                  </span>
                )}
              </div>

              <div>
                <textarea
                  className="w-full bg-transparent shadow-md shadow-slate-500 px-3 py-2 border rounded min-h-20"
                  placeholder="Problem Details"
                  {...register('details', {
                    required: true,
                    minLength: 30,
                  })}
                />

                {errors.details?.type === 'required' && (
                  <p className="text-red-500">Please Input Problem Details</p>
                )}

                {errors.details?.type === 'minLength' && (
                  <p className="text-red-500">
                    Please Input Problem Details Minimum 30 Character
                  </p>
                )}
              </div>
              <button
                disabled={loading}
                className="rounded w-full py-2 font-semibold shadow-md shadow-slate-400 border cursor-pointer duration-200 hover:shadow-lg hover:shadow-slate-200"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin text-2xl mx-auto" />
                ) : (
                  'Send Your Problem'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="w-full h-full absolute bg-[#0000006d]"
        ></div>
      )}
      <div className="w-full h-72 bg-lime-200 dark:bg-lime-500 px-5">
        <h1 className="text-3xl sm:text-4xl text-center pt-32">
          How Can I Help You?
        </h1>
        <div className="relative text-center w-full sm:w-96 mx-auto mt-4">
          <input
            className="w-full rounded-md bg-transparent"
            placeholder="Search Help"
            type="text"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer text-slate-500">
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="w-11/12 mx-auto py-20">
        <div className="w-full flex items-center gap-6 text-center">
          <div
            onClick={handleHelp}
            className="w-full md:w-1/2 rounded-md bg-green-200 border shadow-md shadow-slate-400 hover:shadow-lg flex flex-col items-center gap-5 px-9 py-14 cursor-pointer"
          >
            <span className="text-6xl">
              <MdManageAccounts />
            </span>
            <h1 className="text-3xl to-slate-700 font-semibold">
              Account Problem
            </h1>
          </div>
          <div
            onClick={handleHelp}
            className="w-full md:w-1/2 rounded-md bg-lime-100 border shadow-md shadow-slate-400 hover:shadow-lg flex flex-col items-center gap-5 px-9 py-14 cursor-pointer"
          >
            <span className="text-6xl">
              <FaAccusoft />
            </span>
            <h1 className="text-3xl to-slate-700 font-semibold">
              Others Problem
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
