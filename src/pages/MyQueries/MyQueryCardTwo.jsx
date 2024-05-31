import { FaExternalLinkAlt, FaRegCommentDots } from 'react-icons/fa';
import { RiHandHeartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Tooltip } from '@mui/material';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSec from '../../Hooks/useAxiosSec';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const MyQueryCardTwo = ({ dta, handleDelete }) => {
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(null);
  const axiosSecure = useAxiosSec();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async ({ formData, id }) => {
      const { data } = await axiosSecure.put(
        `/my-query-update/${id}`,
        formData
      );
      console.log(data);
    },
    onError: () => {
      Swal.fire({
        title: 'Oppps ....!',
        text: 'Can not update query. Check your network !',
        icon: 'error',
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Updated',
        text: 'Your query data has been successfully updated.',
        timer: 2500,
      });
      queryClient.invalidateQueries({ queryKey: ['my-query'] });
      console.log('Updated Query');
    },
  });

  const handleUpdateQuery = async (e) => {
    e.preventDefault();
    const dta = e.target;
    const productName = dta.productName.value;
    const productBrand = dta.productBrand.value;
    const productImage = dta.productImage.value;
    const queryTitle = dta.queryTitle.value;
    const details = dta.detail.value;
    const id = update._id;
    const formData = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      details,
    };

    console.log(formData);
    await mutateAsync({ formData, id });
  };

  return (
    <div className="mx-auto min-w-full max-w-[500px] rounded-lg bg-slate-100 font-sans shadow-lg dark:bg-slate-800">
      <div className="sm:min-h-[580px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-0 px-4 py-4 relative">
            {/* Avatar image  */}
            <div className="flex items-center gap-3">
              <img
                width={90}
                height={90}
                className="h-16 w-16 rounded-full border-2 border-mClr"
                src={dta.userImg}
                alt="card navigate ui"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-slate-700 dark:text-white/90 capitalize">
                  {dta.userName}
                </h2>
                <p className="text-gray-400">{dta.dateTime}</p>
              </div>
            </div>
            {/* Setting button */}
            <div className="flex items-center gap-1 text-lg font-semibold text-slate-800 dark:text-white/90">
              <div className="relative group flex flex-col items-center justify-center w-max mx-auto">
                {/* + icon  */}
                <div className="flex justify-center w-10 h-10 rounded-full items-center duration-500 text-xl">
                  <PiDotsThreeOutlineVerticalFill />
                </div>
                {/* icon container  */}
                <div className="absolute z-20 top-10 right-0 text-white duration-500 h-0 group-hover:h-[133px] hidden group-hover:block bg-slate-800 rounded-md">
                  <Link to={`/query-details/${dta._id}`}>
                    <button className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] py-2 pl-6 pr-10 hover:bg-mClr hover:text-white flex items-center gap-2 w-full rounded-t-md">
                      <span className="text-2xl">
                        <AiOutlineInfoCircle />
                      </span>
                      Details
                    </button>
                  </Link>
                  <span onClick={() => setUpdate(dta)}>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] py-2 pl-6 pr-10 hover:bg-mClr hover:text-white flex items-center gap-2 w-full"
                    >
                      <span className="text-2xl">
                        <TbEdit />
                      </span>
                      Update
                    </button>
                  </span>
                  <button
                    className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] py-2 pl-6 pr-10 hover:bg-sClr hover:text-white flex items-center gap-2 w-full rounded-b-md"
                    onClick={() => handleDelete(dta._id)}
                  >
                    <span className="text-2xl">
                      <MdDeleteForever />
                    </span>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post Image */}
          <div className="flex flex-col gap-1">
            <div className="overflow-hidden">
              <div
                className="w-full h-56 hover:scale-110 duration-[2.5s]"
                style={{
                  backgroundImage: `url(${dta.productImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
          {/* Post content */}
          <div className="mt-3 space-y-2 px-4">
            <h1 className="text-xl text-mClr">{dta.queryTitle}</h1>
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-white/90">
              {dta.productName}
            </h2>
            <p className="text-base text-gray-500 dark:text-white/50">
              {dta.details.slice(0, 130)}
              <Link
                className="cursor-pointer text-[#3e96d4]"
                to={`/query-details/${dta._id}`}
              >
                {dta.details.length > 129 && '... See more'}
              </Link>
            </p>
          </div>
        </div>
        {/* icons */}
        <div className="mt-4 flex justify-between px-8 pb-4">
          <Tooltip title="Support">
            <button className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90">
              <span className="text-2xl">
                <RiHandHeartLine />
              </span>
              <h2 className="">40K</h2>
            </button>
          </Tooltip>
          <Tooltip title="Recommendation">
            <Link
              to={`/query-details/${dta._id}`}
              className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90"
            >
              <span className="text-2xl">
                <FaRegCommentDots />
              </span>
              <h2 className="">{dta.recommendationCount}</h2>
            </Link>
          </Tooltip>
          <div className="flex items-center gap-1 text-lg font-semibold text-slate-800 dark:text-white/90">
            <div className="relative group flex flex-col items-center justify-center w-max mx-auto">
              {/* + icon  */}
              <div className="flex justify-center w-10 h-10 rounded-full items-center duration-500 text-xl">
                <FaExternalLinkAlt />
              </div>
              {/* icon container  */}
              <div className="absolute bottom-10 right-0 text-white duration-500 h-0 group-hover:h-[133px] hidden group-hover:block bg-slate-800 rounded-md">
                <Link to={`/query-details/${dta._id}`}>
                  <button className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] py-2 pl-6 pr-10 hover:bg-mClr hover:text-white flex items-center gap-2 w-full rounded-t-md">
                    <span className="text-2xl">
                      <AiOutlineInfoCircle />
                    </span>
                    Details
                  </button>
                </Link>
                <span onClick={() => setUpdate(dta)}>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] py-2 pl-6 pr-10 hover:bg-mClr hover:text-white flex items-center gap-2 w-full"
                  >
                    <span className="text-2xl">
                      <TbEdit />
                    </span>
                    Update
                  </button>
                </span>
                <button
                  className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] py-2 pl-6 pr-10 hover:bg-sClr hover:text-white flex items-center gap-2 w-full rounded-b-md"
                  onClick={() => handleDelete(dta._id)}
                >
                  <span className="text-2xl">
                    <MdDeleteForever />
                  </span>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Query Post Input Modal */}
      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? 'opacity-1 visible' : 'invisible opacity-0'
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute w-11/12 lg:w-[700px] updateModalHeightControl sm:px-12 p-5 sm:py-8 rounded-lg bg-white text-center drop-shadow-2xl dark:bg-slate-300 dark:text-white ${
            openModal
              ? 'scale-1 opacity-1 duration-300'
              : 'scale-0 opacity-0 duration-150'
          } `}
        >
          <div className="w-full">
            <h1 className="text-[40px] text-slate-800 dark:text-slate-800 text-center pb-5">
              Update Query
            </h1>
            <form
              className="flex flex-col gap-5 w-full dark:text-white"
              onSubmit={handleUpdateQuery}
            >
              <div className="relative">
                <label className="text-[#2690ce] text-left absolute -top-3 left-3 bg-white dark:bg-slate-300 px-2">
                  Product Name *
                </label>
                <input
                  name="productName"
                  type="text"
                  required
                  defaultValue={update?.productName}
                  className="w-full py-3 bg-transparent border-gray-400 rounded px-3 placeholder-gray-600 text-gray-900 text-lg outline-none border focus:border-mClr"
                />
              </div>
              <div className="relative">
                <label className="text-[#2690ce] text-left absolute -top-3 left-3 bg-white dark:bg-slate-300 px-2">
                  Product Brand *
                </label>
                <input
                  name="productBrand"
                  type="text"
                  required
                  defaultValue={update?.productBrand}
                  className="w-full py-3 bg-transparent border-gray-400 rounded px-3 placeholder-gray-600 text-gray-900 text-lg outline-none border focus:border-mClr"
                />
              </div>
              <div className="relative">
                <label className="text-[#2690ce] text-left absolute -top-3 left-3 bg-white dark:bg-slate-300 px-2">
                  Product Image URL *
                </label>
                <input
                  name="productImage"
                  type="text"
                  required
                  defaultValue={update?.productImage}
                  className="w-full py-3 bg-transparent border-gray-400 rounded px-3 placeholder-gray-600 text-gray-900 text-lg outline-none border focus:border-mClr"
                />
              </div>
              <div className="relative">
                <label className="text-[#2690ce] text-left absolute -top-3 left-3 bg-white dark:bg-slate-300 px-2">
                  Query Title *
                </label>
                <input
                  name="queryTitle"
                  type="text"
                  required
                  defaultValue={update?.queryTitle}
                  className="w-full py-3 bg-transparent border-gray-400 rounded px-3 placeholder-gray-600 text-gray-900 text-lg outline-none border focus:border-mClr"
                />
              </div>
              <div className="relative">
                <label className="text-[#2690ce] text-left absolute -top-3 left-3 bg-white dark:bg-slate-300 px-2">
                  Boycoing Reason Details *
                </label>
                <textarea
                  name="detail"
                  defaultValue={update?.details}
                  required
                  rows={3}
                  className="w-full py-3 bg-transparent border-gray-400 rounded px-3 placeholder-gray-600 text-gray-900 text-lg outline-none border focus:border-mClr leading-6"
                ></textarea>
              </div>

              <input
                onClick={() => setOpenModal(false)}
                className="w-full py-1.5 bg-mClr rounded border-2 border-mClr text-white text-lg font-bold sm:text-xl mb-5 hover:-skew-x-12 duration-300 active:scale-95 hover:bg-transparent hover:text-mClr"
                type="submit"
                value="Update Query"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCardTwo;
MyQueryCardTwo.propTypes = {
  dta: PropTypes.object,
  handleDelete: PropTypes.func,
};
