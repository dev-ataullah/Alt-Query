import { Link } from 'react-router-dom';
import err from '../../assets/error/err3.png';

const Error = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
      <img className="max-h-full mb-28 relative" src={err} alt="" />
      <Link to={'/'} className="">
        <button className="py-2 px-5 bg-mClr text-white rounded-md font-semibold absolute bottom-6 left-1/2 -translate-x-1/2 hover:bg-sClr">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
