import { Link } from 'react-router-dom';

const MiddleBanner = () => {
  return (
    <div className="relative mt-32 mb-20 h-[500px] sm:h-[600px] w-full">
      <div
        className="bg-fixed bg-gradient-to-r from-[#0de46eca] to-[#07f81b8b] bg-cover bg-no-repeat bg-bottom h-full w-full"
        style={{
          backgroundImage: `url('https://i.ibb.co/5R441Gz/434534ret.jpg')`,
        }}
      ></div>
      <div className="w-48 h-36 absolute -top-14 right-0 grid grid-cols-12">
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
        <span className="h-1 w-1 bg-white"></span>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#22342a28] to-[#bef2bc24]">
        <div className="w-11/12 max-w-[1700px] mx-auto h-full flex flex-col justify-center">
          <h1
            data-aos="fade-right"
            className="text-3xl sm:text-5xl text-slate-50 max-w-[800px] leading-[1.320]"
          >
            Discover Better Alternatives with AltQuery!
          </h1>
          <p
            data-aos="fade-right"
            className="max-w-[600px] py-8 text-base sm:text-lg text-slate-100"
          >
            Explore, share, and find superior product options. Post your
            queries, get recommendations, and tailor your browsing experience.
            Join us in revolutionizing how you shop!
          </p>
          <Link
            to={'/queries'}
            data-aos="fade-right"
            className="px-10 py-2 max-w-40 sm:max-w-44 shadow-lg rounded-md text-xl bg-mClr text-white hover:translate-x-4 sm:hover:translate-x-6 duration-300"
          >
            Explore
          </Link>
        </div>
      </div>
      {/* <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 -bottom-28">
        <div className="md:w-96 h-48 sm:h-56 bg-gradient-to-r from-[#10f678] to-[#c49f0a] rounded-md"></div>
        <div className="md:w-96 h-48 sm:h-56 bg-gradient-to-r from-[#e81fc3] to-[#0ad2d9] rounded-md"></div>
      </div> */}
    </div>
  );
};

export default MiddleBanner;
