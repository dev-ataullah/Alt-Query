import { MdOutlineArrowOutward } from 'react-icons/md';
import Marquee from 'react-fast-marquee';
const LatestBlogs = () => {
  return (
    <div className="mb-24">
      <div className="text-center">
        <h1
          data-aos="fade-right"
          className="text-center text-slate-800 dark:text-slate-100 text-3xl md:text-4xl pt-20 pb-5 inline-block"
        >
          Insightful Reads Await!
        </h1>
        <p
          data-aos="fade-left"
          className="text-slate-600 dark:text-slate-200 text-center max-w-[650px] mx-auto pb-14"
        >
          Explore our latest blog posts for valuable insights, tips, and news on
          alternative products. Stay informed and inspired with our curated
          content.
        </p>
      </div>
      <div>
        <Marquee speed={45}>
          <div className="w-[380px] md:w-[450px] shadow-xl mr-8">
            <div
              className="h-52  sm:h-64 w-full bg-cover bg-center rounded-t-md"
              style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/two-attractive-chef-females-start-prepare-vegetable-juice-blender_613910-9687.jpg?t=st=1715783110~exp=1715786710~hmac=99bb97669c5066eac9e8f3df16b8e311d3edabe4ecba4b8ccd384b8a64a9cc6f&w=900')`,
              }}
            ></div>
            <div className="border p-3 rounded-b-md">
              <div className="py-3 flex items-start">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100">
                  Kitchen Chronicles, Culinary Delights Await!
                </h1>
                <button className="text-3xl hover:scale-110 duration-200 hover:translate-x-1 hover:-translate-y-1 text-slate-900 dark:text-slate-50 ">
                  <MdOutlineArrowOutward />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-200 h-24">
                Embark on a culinary journey with our handpicked selection of
                kitchen essentials. From gourmet cookware to time-saving
                gadgets, elevate your cooking game and unleash your inner chef.
              </p>
              <div className="flex items-center gap-2 mt-3 justify-center">
                <button className="text-balance px-6 py-1.5 bg-[#68701586] rounded text-white">
                  #foods
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#6fe88987] rounded text-white">
                  #kitcen
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#0c8f8da8] rounded text-white">
                  #Chronicles
                </button>
              </div>
            </div>
          </div>
          <div className="w-[380px] md:w-[450px] shadow-xl mr-8">
            <div
              className="h-52  sm:h-64 w-full bg-cover bg-center rounded-t-md"
              style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/surprised-pretty-caucasian-woman-with-wrapped-hair-towel-sitting-table-with-makeup-tools-holding-mirror-lipstick_141793-123208.jpg?w=900')`,
              }}
            ></div>
            <div className="border p-3 rounded-b-md">
              <div className="py-3 flex items-start">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100">
                  Beauty Buzz, Your Guide to Glam
                </h1>
                <button className="text-3xl hover:scale-110 duration-200 hover:translate-x-1 hover:-translate-y-1 text-slate-900 dark:text-slate-50 ">
                  <MdOutlineArrowOutward />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-200 h-24">
                Dive into the world of beauty with our curated selection of
                products. From skincare essentials to makeup must-haves, unlock
                the secrets to radiant skin and effortless beauty.
              </p>
              <div className="flex items-center gap-2 mt-3 justify-center">
                <button className="text-balance px-6 py-1.5 bg-[#68701586] rounded text-white">
                  #foods
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#6fe88987] rounded text-white">
                  #kitcen
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#0c8f8da8] rounded text-white">
                  #Chronicles
                </button>
              </div>
            </div>
          </div>
          <div className="w-[380px] md:w-[450px] shadow-xl mr-8">
            <div
              className="h-52  sm:h-64 w-full bg-cover bg-center rounded-t-md"
              style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5157.jpg?t=st=1715783410~exp=1715787010~hmac=31e6ec59aff3f65c3d4eb2bee0171d0720bdf6437b7058476437338adb85bd64&w=900')`,
              }}
            ></div>
            <div className="border p-3 rounded-b-md">
              <div className="py-3 flex items-start">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100">
                  Tech Trends, Stay Ahead of the Curve
                </h1>
                <button className="text-3xl hover:scale-110 duration-200 hover:translate-x-1 hover:-translate-y-1 text-slate-900 dark:text-slate-50 ">
                  <MdOutlineArrowOutward />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-200 h-24">
                Explore the latest tech innovations and gadgets shaping the
                future. From smart home devices to wearable tech, stay informed
                and embrace the cutting-edge of technology.
              </p>
              <div className="flex items-center gap-2 mt-3 justify-center">
                <button className="text-balance px-6 py-1.5 bg-[#68701586] rounded text-white">
                  #foods
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#6fe88987] rounded text-white">
                  #kitcen
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#0c8f8da8] rounded text-white">
                  #Chronicles
                </button>
              </div>
            </div>
          </div>
          <div className="w-[380px] md:w-[450px] shadow-xl mr-8">
            <div
              className="h-52  sm:h-64 w-full bg-cover bg-center rounded-t-md"
              style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/eco-business-join-hand-together-as-teamwork-unity-gyre_31965-321408.jpg?w=900')`,
              }}
            ></div>
            <div className="border p-3 rounded-b-md">
              <div className="py-3 flex items-start">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100">
                  Sustainable Swaps, Go Green Today!
                </h1>
                <button className="text-3xl hover:scale-110 duration-200 hover:translate-x-1 hover:-translate-y-1 text-slate-900 dark:text-slate-50 ">
                  <MdOutlineArrowOutward />
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-200 h-24">
                Discover eco-conscious alternatives to everyday products. From
                reusable straws to biodegradable packaging, make a positive
                impact on the environment while upgrading your lifestyle.
              </p>
              <div className="flex items-center gap-2 mt-3 justify-center">
                <button className="text-balance px-6 py-1.5 bg-[#68701586] rounded text-white">
                  #foods
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#6fe88987] rounded text-white">
                  #kitcen
                </button>
                <button className="text-balance px-6 py-1.5 bg-[#0c8f8da8] rounded text-white">
                  #Chronicles
                </button>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestBlogs;
