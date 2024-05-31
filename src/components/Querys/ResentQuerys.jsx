import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import QueryCard from './QueryCard';
import AllQuerySkeleton from '../../pages/Loding/AllQuerySkeleton';

const ResentQuerys = () => {
  const axiosFetch = useAxios();
  const [view, setView] = useState(6);

  const {
    data: datas = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => queryData(),
    queryKey: 'resent-query',
  });

  const queryData = async () => {
    const { data } = await axiosFetch(`/latest-queries`);
    return data;
  };

  // console.log(datas);

  if ((error, isError)) {
    Swal.fire({
      title: 'Oppps ....!',
      text: 'Querys data is not coming. Check your network!',
      icon: 'error',
    });
  }
  if (isLoading) {
    return <AllQuerySkeleton crt={[1, 2, 3, 4, 5, 6]} h={40} w={'20%'} />;
  }
  return (
    <div className="mt-16">
      <h1
        data-aos="fade-left"
        className="text-4xl text-slate-800 dark:text-slate-100 text-center pt-10 pb-4"
      >
        Resent Posted Query
      </h1>
      <p
        data-aos="fade-right"
        className="text-center text-slate-600 dark:text-slate-200 max-w-[650px] mx-auto pb-14"
      >
        Catch up on the newest queries from users. Stay updated and lend your
        expertise to those seeking alternatives. Join the conversation!
      </p>
      <div className="max-w-[500px] mx-auto sm:max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
        {datas.slice(0, view).map((dta) => (
          <QueryCard dta={dta} key={dta._id} />
        ))}
      </div>
      <div data-aos="zoom-in-up" className="text-center">
        {view > 6 ? (
          <Link to={'/queries'}>
            <button className="mt-8 border-b border-mClr px-2 text-black text-lg dark:text-white font-light">
              See all query ...
            </button>
          </Link>
        ) : (
          <button
            onClick={() => setView(datas.length)}
            className="mt-8 border-b border-mClr px-2 text-black text-lg dark:text-white font-light"
          >
            See more query ...
          </button>
        )}
      </div>
    </div>
  );
};

export default ResentQuerys;
