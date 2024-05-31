// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';

// image input
import slide1 from '../../assets/banner/5.jpg';
import slide2 from '../../assets/banner/1.jpg';
import slide3 from '../../assets/banner/3.jpg';
import slide4 from '../../assets/banner/4.jpg';
import slide5 from '../../assets/banner/2.jpg';
import slide6 from '../../assets/banner/6.jpg';
import { Link } from 'react-router-dom';

// import Nav from '../Nav/Nav';

const Banner = () => {
  return (
    <div className="relative text-white ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        className="mySwiper h-[420px] md:min-h-screen"
      >
        <SwiperSlide>
          <div
            className="h-[420px] md:min-h-screen relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 space-y-2left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[900px] space-y-0 sm:space-y-5">
                  <h1
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                    className="text-3xl md:text-5xl lg:text-6xl leading-loose"
                  >
                    Unraveling the Essence of Exceptional Products
                  </h1>
                  <p
                    data-aos="zoom-in-down"
                    data-aos-duration="900"
                    className="max-w-[700px] mx-auto p-4 text-base md:text-lg"
                  >
                    {`Delve into the essence of each product through comprehensive reviews and insightful recommendations, guiding others toward remarkable discoveries.`}
                  </p>
                  <div data-aos="zoom-in-up" data-aos-duration="1000">
                    <Link to={'/queries'}>
                      <button className="text-xl mt-0 sm:mt-8 py-2 px-11 bg-mainColor rounded duration-300 hover:-skew-x-12 hover:bg-[#1aa3f3]">
                        All Queries
                      </button>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[420px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[900px] space-y-0 sm:space-y-5">
                  <h1
                    data-aos="zoom-in-down"
                    data-aos-duration="3000"
                    className="text-3xl md:text-5xl lg:text-6xl  leading-loose"
                  >
                    Elevate Your Shopping Experience with Insights
                  </h1>
                  <p
                    data-aos="zoom-in-down"
                    data-aos-duration="900"
                    className="max-w-[700px] mx-auto p-4 text-base md:text-lg"
                  >
                    {`Enhance your shopping journey with user-generated insights, empowering you to make informed decisions and uncover the best products suited to your needs.`}
                  </p>

                  <Link to={'/queries'}>
                    <button className="text-xl mt-0 sm:mt-8 py-2 px-11 bg-mainColor rounded duration-300 hover:-skew-x-12 hover:bg-[#1aa3f3]">
                      All Queries
                    </button>{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[420px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide3})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[900px] space-y-0 sm:space-y-5">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl  leading-loose">
                    Curating Excellence, Unveiling Hidden Treasures
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Experience curated collections of exceptional products
                    curated by our community, revealing hidden treasures and
                    enhancing your shopping experience.
                  </p>
                  <Link to={'/queries'}>
                    <button className="text-xl mt-0 sm:mt-8 py-2 px-11 bg-mainColor rounded duration-300 hover:-skew-x-12 hover:bg-[#1aa3f3]">
                      All Queries
                    </button>{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[420px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide4})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[900px] space-y-0 sm:space-y-5">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl  leading-loose">
                    Forge Meaningful Connections, Share Experiences
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Forge connections with fellow enthusiasts, exchange
                    experiences, and discover new products together, fostering a
                    vibrant and supportive community.
                  </p>
                  <Link to={'/queries'}>
                    <button className="text-xl mt-0 sm:mt-8 py-2 px-11 bg-mainColor rounded duration-300 hover:-skew-x-12 hover:bg-[#1aa3f3]">
                      All Queries
                    </button>{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[420px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide5})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[900px] space-y-0 sm:space-y-5">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl  leading-loose">
                    Discover Unique Finds for Every Niche
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Explore a diverse array of products tailored to your
                    interests, from tech gadgets to artisanal crafts, and
                    unearth hidden gems.
                  </p>
                  <Link to={'/queries'}>
                    <button className="text-xl mt-0 sm:mt-8 py-2 px-11 bg-mainColor rounded duration-300 hover:-skew-x-12 hover:bg-[#1aa3f3]">
                      All Queries
                    </button>{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[420px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide6})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 max-w-[900px] space-y-0 sm:space-y-5">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl  leading-loose">
                    Empowering Consumer Voices, Shaping Quality
                  </h1>
                  <p className="max-w-[700px] mx-auto p-4 text-base md:text-lg">
                    Engage in lively discussions, share insights, and influence
                    product standards by contributing your reviews and
                    recommendations within our vibrant community.
                  </p>
                  <Link to={'/queries'}>
                    <button className="text-xl mt-0 sm:mt-8 py-2 px-11 bg-mainColor rounded duration-300 hover:-skew-x-12 hover:bg-[#1aa3f3]">
                      All Queries
                    </button>{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
