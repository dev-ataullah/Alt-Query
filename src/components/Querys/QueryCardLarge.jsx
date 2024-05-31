import { PropTypes } from 'prop-types';
import { FaRegCommentDots } from 'react-icons/fa';
import { PiShareFatBold } from 'react-icons/pi';
import { RiHandHeartLine } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
const QueryCardLarge = ({ dta }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="min-w-full max-w-full rounded-lg bg-slate-100 font-sans shadow-lg dark:bg-slate-800"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 p-5">
        {/* Post Image */}
        <div className="overflow-hidden w-full md:w-1/2 rounded-md">
          <div
            className="w-full h-72 sm:h-[450px] lg:h-96 hover:scale-110 duration-[2.5s]"
            style={{
              backgroundImage: `url(${dta.productImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
        {/* Post content */}
        <div className="mt-3 space-y-2 px-4 w-full md:w-1/2">
          <div className="flex items-center justify-between gap-0">
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
              className="flex cursor-pointer flex-col gap-2 rounded-full text-slate-900 dark:text-slate-100 text-2xl"
            >
              <FiExternalLink />
            </Link>
          </div>
          {/* -============ */}
          <div className="space-y-3">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-mClr">
              {dta.queryTitle}
            </h1>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white/90">
              {dta.productName}
            </h2>
            <p className="text-lg font-semibold text-slate-800 dark:text-white/90">
              <span className="font-bold">Brand: </span>
              {dta.productBrand}
            </p>
            <p className="text-lg text-gray-500 dark:text-white/50">
              {dta.details.slice(0, 180)}
              <Link
                className="cursor-pointer text-[#3e96d4]"
                to={`/query-details/${dta._id}`}
              >
                {dta.details.length > 188 && '... See more'}
              </Link>
            </p>
          </div>
          {/* icons */}
          <div className="pt-4 flex justify-between px-2 sm:px-8 pb-4">
            <Tooltip title="Support">
              <button className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white/90">
                <span className="text-2xl">
                  <RiHandHeartLine />
                </span>
                <h2 className="">{Math.floor((Math.random() + 1) * 10)}K</h2>
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
    </div>
  );
};

export default QueryCardLarge;
QueryCardLarge.propTypes = {
  dta: PropTypes.object,
};
