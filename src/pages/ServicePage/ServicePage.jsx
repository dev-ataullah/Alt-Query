const ServicePage = () => {
  return (
    <div className="container mx-auto py-16 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fa fa-search text-4xl text-blue-500 mb-4"></i>
          <h2 className="text-xl font-semibold mb-2">
            Alternative Product Recommendations
          </h2>
          <p className="text-gray-600">
            Discover better alternatives to your favorite products. Get
            personalized recommendations based on your preferences and values.
          </p>
        </div>
        {/* Service 2: Sustainable Shopping */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fa fa-leaf text-4xl text-green-500 mb-4"></i>
          <h2 className="text-xl font-semibold mb-2">Sustainable Shopping</h2>
          <p className="text-gray-600">
            Explore eco-friendly options for a greener lifestyle. Find products
            that minimize environmental impact without compromising quality.
          </p>
        </div>
        {/* Service 3: Tech Trends Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fa fa-laptop text-4xl text-purple-500 mb-4"></i>
          <h2 className="text-xl font-semibold mb-2">Tech Trends Analysis</h2>
          <p className="text-gray-600">
            Stay updated on the latest tech innovations and gadgets. Get
            insights into emerging trends and cutting-edge technologies.
          </p>
        </div>
        {/* Service 4: Beauty Product Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fa fa-heart text-4xl text-pink-500 mb-4"></i>
          <h2 className="text-xl font-semibold mb-2">Beauty Product Reviews</h2>
          <p className="text-gray-600">
            Unlock beauty secrets with our in-depth product reviews. Discover
            skincare and makeup essentials loved by our community.
          </p>
        </div>
        {/* Service 5: Culinary Delights */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fa fa-utensils text-4xl text-red-500 mb-4"></i>
          <h2 className="text-xl font-semibold mb-2">Culinary Delights</h2>
          <p className="text-gray-600">
            Elevate your cooking game with our culinary expertise. Find recipes,
            kitchen hacks, and must-have gadgets for every home chef.
          </p>
        </div>
        {/* Service 6: Wellness Tips */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fa fa-heartbeat text-4xl text-yellow-500 mb-4"></i>
          <h2 className="text-xl font-semibold mb-2">Wellness Tips</h2>
          <p className="text-gray-600">
            Prioritize self-care with our holistic health tips. Explore wellness
            practices to nurture your mind, body, and soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
