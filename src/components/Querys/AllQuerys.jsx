import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import QueryCard from './QueryCard';
import Swal from 'sweetalert2';
import AllQuerySkeleton from '../../pages/Loding/AllQuerySkeleton';
import MultyImgBanner from '../MultyImgBanner/MultyImgBanner';
import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/6.jpg';
const img2 =
  'https://img.freepik.com/premium-photo/high-angle-view-hand-holding-drink-table_1048944-2054656.jpg?w=900';
const img3 =
  'https://img.freepik.com/free-photo/young-brunette-with-paper-bags-shop_23-2147786815.jpg?t=st=1716099082~exp=1716102682~hmac=e91263a9bfd23ae0f8b65961e882f9dffb66872bc99f10521a1f8a028e9d47e7&w=900';
const img4 =
  'https://img.freepik.com/premium-photo/fruity-gummy-worms-bright-colors_1234738-8256.jpg?w=900';
const img5 =
  'https://img.freepik.com/premium-photo/wireless-earbuds-wired-tangled-earphones-brown-pink-background-top-view-flat-lay_175682-24386.jpg?w=996';

import { Search } from '@mui/icons-material';
import { Dropdown } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from 'react-icons/tfi';
import { RiLayoutBottom2Fill } from 'react-icons/ri';
import QueryCardMeadium from './QueryCardMeadium';
import QueryCardLarge from './QueryCardLarge';
import { TbReload } from 'react-icons/tb';
import { Tooltip } from '@mui/material';
import { Helmet } from 'react-helmet';
const AllQuerys = () => {
  const [serr, setSerr] = useState(null);
  const [searchs, setSearch] = useState('');
  const [layouts, setHandleLayout] = useState('threeColum');
  const [currentPage, setCurrentPage] = useState(1);
  const [reload, setReload] = useState(false);
  const [postCount, setPostCount] = useState(0);
  const [perPage, setPerPage] = useState(6);

  // Get all query data
  const axiosFetch = useAxios();
  let {
    data: datas = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => queryData(),
    queryKey: ['all-query', currentPage, searchs, reload, perPage],
  });
  const queryData = async () => {
    const { data } = await axiosFetch(
      `/all-queries?page=${currentPage}&size=${perPage}&searchs=${searchs}`
    );
    return data;
  };
  if ((error, isError)) {
    Swal.fire({
      title: 'Oppps ....!',
      text: 'Querys data is not coming. Check your network!',
      icon: 'error',
    });
  }
  // end all query data geting ==========

  // Sorting order =============
  const [sortDta, setSortDta] = useState(null);
  if (sortDta === 'default') {
    console.log('default');
    const sorting = datas.sort((a, b) => {
      const datA = new Date(a.dateTime);
      const datB = new Date(b.dateTime);
      return datB - datA;
    });
    datas = sorting;
  } else if (sortDta === 'dateTimeDown') {
    console.log('dateTime');
    const sorting = datas.sort((a, b) => {
      const datA = new Date(a.dateTime);
      const datB = new Date(b.dateTime);
      return datB - datA;
    });
    datas = sorting;
  } else if (sortDta === 'dateTimeUp') {
    console.log('dateTime');
    const sorting = datas.sort((a, b) => {
      const datA = new Date(a.dateTime);
      const datB = new Date(b.dateTime);
      return datA - datB;
    });
    datas = sorting;
  } else if (sortDta === 'recommendationDown') {
    console.log('recommendation');
    const sorting = datas.sort(
      (a, b) => b.recommendationCount - a.recommendationCount
    );
    datas = sorting;
  } else if (sortDta === 'recommendationUp') {
    console.log('recommendationUp');
    const sorting = datas.sort(
      (a, b) => a.recommendationCount - b.recommendationCount
    );
    datas = sorting;
  }
  // End Sorting order============

  // Search functionality========
  const handleSearch = (e) => {
    setSerr(null);
    e.preventDefault();
    const search = e.target.search.value;
    if (search.length < 3) {
      setSerr(true);
      return;
    }
    setSearch(search);
    // console.log(search);
  };
  // End Search functionality========
  // console.log(layouts);

  // Pagination Functionality =============
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosFetch(`/all-queries-len?searchs=${searchs}`);
      setPostCount(data.data);
    };
    getCount();
  }, [axiosFetch, searchs]);

  const pageNo = Math.ceil(postCount / perPage);
  const pages = [
    ...Array(pageNo)
      .keys()
      .map((dta) => dta + 1),
  ];
  const handlePageSize = (e) => {
    const nom = e.target.value;
    // console.log(parseInt(nom));
    setPerPage(nom);
  };
  // End Pagination Functionality =============

  // Handle Reload=====
  const handleReload = () => {
    setCurrentPage(1);
    setSearch('');
    setReload(!reload);
    setSortDta('default');
    setPerPage(6);
  };
  // document.getElementById('reloadData').style.rotate = '50px';

  return (
    <div className="mb-16">
      <Helmet>
        <title>Alt Query || Queries</title>
      </Helmet>
      <div className="mb-10">
        {/* Banner Part */}
        <div className="h-64 sm:h-72 w-full bg-red-200 relative">
          <MultyImgBanner
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
          />
          <div className="absolute z-10 top-0 left-0 bg-[#00000073] w-full h-full">
            <div className="h-full w-10/12 mx-auto flex items-center justify-center pt-10 sm:pt-20 text-center">
              <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold text-white ">
                <Link to={'/'}>
                  <button className="border-b border-mClr tracking-wider">
                    Home
                  </button>
                </Link>
                <button className="">/</button>
                <Link to={''}>
                  <button className="border-b border-mClr tracking-wider">
                    All Querys
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        {/* Order Action layout  */}
        <div className="flex flex-col items-center gap-4 bg-gray-500 mb-3 p-4 rounded-t-md ">
          <div className="flex items-center gap-2 justify-between w-full">
            {/* Sorting Dropdown Button  */}
            <div className="sortingBtn flex items-center gap-3">
              <Dropdown label="Sort By Query" className="">
                <Dropdown.Item onClick={() => setSortDta('default')}>
                  Default
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setSortDta('dateTimeDown')}>
                  <span className="flex items-center gap-2">
                    Date & Time
                    <span>
                      <FaArrowDown />
                    </span>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortDta('dateTimeUp')}>
                  <span className="flex items-center gap-2">
                    Date & Time
                    <span>
                      <FaArrowUp />
                    </span>
                  </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setSortDta('recommendationDown')}>
                  <span className="flex items-center gap-2">
                    Recommendation
                    <span>
                      <FaArrowDown />
                    </span>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortDta('recommendationUp')}>
                  <span className="flex items-center gap-2">
                    Recommendation
                    <span>
                      <FaArrowUp />
                    </span>
                  </span>
                </Dropdown.Item>
              </Dropdown>

              <Tooltip title="Reset Layout">
                <button
                  id="reloadData"
                  onClick={handleReload}
                  className="text-[27px] p-1 border-2 text-white"
                >
                  <TbReload />
                </button>
              </Tooltip>
            </div>
            {/* End Sorting dropdown  */}

            {/* Start Layout Button  action */}
            <div className="lg:text-xl px-4 lg:px-5 py-2 bg-slate-400 rounded-md  flex items-center justify-between gap-3 lg:gap-5 text-white">
              <button
                onClick={() => setHandleLayout('threeColum')}
                className={`px-2 py-2 rounded ${
                  layouts === 'threeColum'
                    ? 'bg-mClr text-white'
                    : 'bg-slate-600'
                }`}
              >
                <TfiLayoutColumn3Alt />
              </button>
              <button
                onClick={() => setHandleLayout('twoColum')}
                className={`px-2 py-2 rounded ${
                  layouts === 'twoColum' ? 'bg-mClr text-white' : 'bg-slate-600'
                }`}
              >
                <TfiLayoutColumn2Alt />
              </button>
              <button
                onClick={() => setHandleLayout('oneColum')}
                className={`px-2 py-2 rounded ${
                  layouts === 'oneColum' ? 'bg-mClr text-white' : 'bg-slate-600'
                }`}
              >
                <RiLayoutBottom2Fill />
              </button>
            </div>
            {/* end Layout Button  action */}

            {/* Start Searching  */}
            <div className="hidden lg:flex items-center">
              <form onSubmit={handleSearch} className="relative lg:w-80">
                <div className="absolute top-1/2 -translate-y-1/2 left-2">
                  <Search className={serr ? 'text-red-500' : ''} />
                </div>
                <input
                  type="text"
                  name="search"
                  id="default-search"
                  className={`block w-full pl-9 pr-[88px] py-[12px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${
                    serr ? 'placeholder-red-500' : 'placeholder-gray-700'
                  }`}
                  placeholder="Search keyword"
                />
                <button
                  type="submit"
                  className="text-white absolute right-2 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1"
                >
                  Search
                </button>
              </form>
              {/* <button className="py-2 rounded-r-md">Search</button> */}
            </div>
          </div>
          <div className="flex lg:hidden items-center w-full">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="absolute top-1/2 -translate-y-1/2 left-1">
                <Search className={serr ? 'text-red-500' : ''} />
              </div>
              <input
                type="text"
                name="search"
                id="default-search"
                className={`block w-full pl-8 pr-[88px] py-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${
                  serr ? 'placeholder-red-500' : 'placeholder-gray-700'
                }`}
                placeholder="Search keyword"
              />
              <button
                type="submit"
                className="text-white absolute right-2 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1"
              >
                Search
              </button>
            </form>
            {/* <button className="py-2 rounded-r-md">Search</button> */}
          </div>
          {/* End Searching  */}
        </div>

        {/* Start main Card Layout  */}
        <div>
          <div>
            {isLoading ? (
              <AllQuerySkeleton crt={[1, 2, 3, 4, 5, 6]} h={60} w={'40%'} />
            ) : layouts === 'oneColum' ? (
              //  Layou 1 Colum ===============
              <div className="max-w-[500px] mx-auto sm:max-w-max grid grid-cols-1 gap-6 sm:gap-4 xl:gap-6">
                {datas.map((dta) => (
                  <QueryCardLarge dta={dta} key={dta._id} />
                ))}
              </div>
            ) : layouts === 'twoColum' ? (
              // Layout 3 Colum ============
              <div className="max-w-[500px] mx-auto sm:max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-4 xl:gap-6">
                {datas.map((dta) => (
                  <QueryCardMeadium dta={dta} key={dta._id} />
                ))}
              </div>
            ) : (
              // Layout 3 colum ============
              <div className="max-w-[500px] mx-auto sm:max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
                {datas.map((dta) => (
                  <QueryCard dta={dta} key={dta._id} />
                ))}
              </div>
            )}
          </div>

          {/* Pageination section=============== */}
          <nav
            aria-label="Page navigation example"
            className="mx-auto flex justify-end pt-9"
          >
            <ul className="flex items-center -space-x-px h-10 text-xl">
              <li>
                <select
                  onChange={handlePageSize}
                  className="flex items-center justify-center px-4 h-[38px] leading-tight outline-none border-2 rounded-l-md bg-transparent text-slate-900  font-bold hover:bg-gray-700 hover:text-white dark:bg-gray-400 dark:border-gray-300 dark:text-gray-700 dark:hover:bg-gray-200 dark:hover:text-gray-700 option"
                >
                  <option value="6">06</option>
                  <option value="9">09</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                  <option value="18">18</option>
                </select>
              </li>

              {/* Previous nutton */}
              <li>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="flex items-center justify-center px-4 h-10 leading-tight border-1 border-gray-300 bg-slate-800 text-white hover:bg-gray-700 hover:text-white dark:bg-gray-400 dark:border-gray-300 dark:text-gray-700 dark:hover:bg-gray-200 dark:hover:text-gray-700 option"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </button>
              </li>
              {pages.map((dta) => (
                <li key={dta}>
                  <button
                    onClick={() => setCurrentPage(dta)}
                    className={`flex items-center justify-center px-4 h-10 leading-tight ${
                      currentPage === dta
                        ? 'bg-mClr text-white'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    }`}
                  >
                    {dta}
                  </button>
                </li>
              ))}

              {/* Next button */}
              <li>
                <button
                  disabled={currentPage === pageNo}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="flex items-center justify-center px-4 h-10 leading-tight border-1 border-gray-300 rounded-r-md bg-slate-800 text-white hover:bg-gray-700 hover:text-white dark:bg-gray-400 dark:border-gray-300 dark:text-gray-700 dark:hover:bg-gray-200 dark:hover:text-gray-700 option"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* End main Card Layout  */}
      </div>
    </div>
  );
};

export default AllQuerys;
