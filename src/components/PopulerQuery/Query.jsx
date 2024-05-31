import { checkPropTypes as PropTypes } from 'prop-types';
const Query = ({ img, text }) => {
  return (
    <div className="relative h-64 sm:h-80 pb-10 w-full rounded-md hover:scale-105 hover:-translate-y-4 duration-300">
      <div
        className="h-full w-full rounded-md bg-cover bg-center bg-no-repeat bg-gray-200"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <h1 className="text-xl text-center w-11/12 mx-auto absolute bottom-1 bg-[#e2e8f0e9] rounded-md left-1/2 -translate-x-1/2 text-slate-800 p-2">
        {text}
      </h1>
    </div>
  );
};

export default Query;
Query.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};
