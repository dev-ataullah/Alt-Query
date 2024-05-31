import { PropTypes } from 'prop-types';
import { FaRegCommentDots } from 'react-icons/fa';
import { PiShareFatBold } from 'react-icons/pi';
import { RiHandHeartLine } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
const QueryCard = ({ dta }) => {
  const [support, setSupport] = useState(false);
  const handleSupport = () => {
    setSupport(!support);
    // console.log(e);
  };

  // console.log(Math.floor(Math.random() * 10));
  return (
    <div
      data-aos="zoom-in-up"
      className="min-w-full max-w-[500px] rounded-lg bg-slate-100 font-sans shadow-lg dark:bg-slate-800"
    >
      <div className="sm:min-h-[600px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-0 px-4 py-4">
            {/* Avatar image  */}
            <div className="flex items-center gap-3">
              <img
                width={90}
                height={90}
                className="h-16 w-16 rounded-full bg-black/40 border-2 border-mClr"
                src={dta.userImg}
                alt="card navigate ui"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90 capitalize">
                  {dta.userName}
                </h2>
                <p className="text-gray-400">{dta.dateTime}</p>
              </div>
            </div>
            {/* Setting button */}
            <Link
              to={`/query-details/${dta._id}`}
              className="hover:translate-x-1 hover:-translate-y-1 duration-200 flex cursor-pointer flex-col gap-2 rounded-full text-slate-900 dark:text-slate-100 text-2xl"
            >
              <FiExternalLink />
            </Link>
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
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white/90">
              {dta.productName}
            </h2>
            <p className="text-lg font-semibold text-slate-800 dark:text-white/90">
              <span className="font-bold">Brand: </span>
              {dta.productBrand}
            </p>
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
            <button
              onClick={() => handleSupport()}
              className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90"
            >
              <span className={`text-3xl ${support && 'text-mClr'}`}>
                <RiHandHeartLine />
              </span>
              <span className="">{Math.floor((Math.random() + 1) * 10)}K</span>
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
              <h2 className="tracking-widest">
                {dta.recommendationCount.toString().length < 2
                  ? '0' + dta.recommendationCount
                  : dta.recommendationCount}
              </h2>
            </Link>
          </Tooltip>
          <button className="flex items-center gap-1 text-lg font-semibold text-slate-800 dark:text-white/90">
            <span className="text-2xl">
              <PiShareFatBold />
            </span>
            <h2 className="">{Math.floor((Math.random() + 1) * 10)}</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
QueryCard.propTypes = {
  dta: PropTypes.object,
};
