import { FaArrowRight } from 'react-icons/fa6';
export default function Blog() {
  return (
    <>
      <div className="py-28 flex-col items-center justify-center  px-4">
        <h1
          role="heading"
          className="text-center xl:text-4xl md:text-4xl text-2xl font-bold text-slate-800 dark:text-slate-100"
        >
          Read Our Latest
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 dark:text-slate-100 mt-4 max-w-[550px] mx-auto"
        >
          Stay informed with our latest updates. Explore insightful content and
          discover the latest trends shaping the world of alternative products.
        </p>
        <div className="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img
                src="https://img.freepik.com/free-vector/save-planet-concept-illustration_23-2148510056.jpg?t=st=1715789317~exp=1715792917~hmac=ff1fcb49a1697f80e43c78bca0e84e26cabdb95f582f234a0b1c7c22da163d8e&w=740"
                alt="woman smiling"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-slate-100">
                Sustainable Swaps for a Greener Lifestyle
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-slate-100">
                  45 min read
                </p>
                <FaArrowRight />
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-slate-100">
                26, Feburary 2024
              </p>
            </div>
            <div className="lg:mt-10">
              <img
                src="https://i.ibb.co/WkCydhJ/blog-4.png"
                alt="coffe pouring"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-slate-100">
                Exploring the Latest Innovations in Gadgets and Electronics
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-slate-100">
                  35 min read
                </p>
                <FaArrowRight />
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-slate-100">
                23, Feburary 2024
              </p>
            </div>
          </div>
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/SmNSVs8/blog-2.png"
                alt="plant held by a man"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-slate-100">
                Unveiling the Secrets to Radiant Skin and Hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-slate-100">
                  45 min read
                </p>
                <FaArrowRight />
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-slate-100">
                23, Feburary 2024
              </p>
            </div>
            <div className="lg:mt-10">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-corporate-social-responsibility-concept_23-2148920442.jpg?t=st=1715789421~exp=1715793021~hmac=05631b6e4a22a0c7c5a0179e7cf1a2679ad15664c673e085c8ef0ec83d1f0082&w=740"
                alt="lady with plant"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-slate-100">
                Delicious Recipes and Kitchen Hacks for Every Home Chef
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-slate-100">
                  55 min read
                </p>
                <FaArrowRight />
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-slate-100">
                30, Feburary 2024
              </p>
            </div>
          </div>
          <div className="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/TLJdmSt/new-img-2.png"
                alt="Delighful breakfast"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-slate-100">
                Trends, Tips, and Must-Haves for the Stylish You
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-slate-100">
                  5 min read
                </p>
                <FaArrowRight />
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-slate-100">
                23, Feburary 2024
              </p>
            </div>
            <div className="xl:mt-10">
              <img
                src="https://i.ibb.co/c8dPSYB/blog-6.png"
                alt="hats with image frame in middle"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-slate-100">
                Holistic Health Tips and Self-Care Practices for a Balanced Life
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-slate-100">
                  27 min read
                </p>
                <FaArrowRight />
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-slate-100">
                23, Feburary 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
