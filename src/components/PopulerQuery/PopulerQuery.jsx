// import img1 from '../../assets/banner/4.jpg';

import Query from './Query';
import './query.css';

const PopulerQuery = () => {
  return (
    <div>
      <h1
        data-aos="fade-right"
        className="text-2xl sm:text-4xl text-slate-800 dark:text-slate-100 text-center pt-28 pb-5"
      >
        Trending Query Products
      </h1>
      <p
        data-aos="fade-left"
        className="text-slate-600 dark:text-slate-200 text-center max-w-[650px] mx-auto pb-14"
      >
        Explore trending products recommended by users. Stay ahead with the
        latest in-demand alternatives gaining traction within our community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="cardAnim1">
          <Query
            img="https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?t=st=1715780488~exp=1715784088~hmac=5b3ebde7b61c2e6087df1bd84f6043f3de636c97f95fc38d2184a05132142d41&w=900"
            text="What car can be taken without alternative words?"
          />
        </div>
        <div className="cardAnim2">
          <Query
            img="https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?t=st=1715780290~exp=1715783890~hmac=d896d3588e08a3968324df75b099e8493941a07d6497130799812400ced4660c&w=900"
            text="Healthier substitutes for Fast Food Burgers?"
          />
        </div>
        <div className="cardAnim3">
          <Query
            img="https://img.freepik.com/free-photo/camera-photography-design-studio-editing-concept_53876-42954.jpg?t=st=1715779415~exp=1715783015~hmac=146f7fb51157de6ff064e4da0e98d6ccc250931e001aacf51d04c3f73e4b4418&w=740"
            text="Any better alternatives to Dell XPS 13 ultrabooks?"
          />
        </div>
        <div className="cardAnim4">
          <Query
            img="https://img.freepik.com/free-photo/preventive-coronavirus-vaccine-bottles_23-2148920757.jpg?t=st=1715780980~exp=1715784580~hmac=35a5689f23726ca5352de6aa70dd1a050d66cffdfaf045d706f2c637984cc170&w=740"
            text="Are other vaccines viable alternatives?"
          />
        </div>
      </div>
    </div>
  );
};

export default PopulerQuery;
