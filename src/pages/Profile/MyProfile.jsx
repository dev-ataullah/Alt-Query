import MultyImgBanner from '../../components/MultyImgBanner/MultyImgBanner';
import img1 from '../../assets/banner/4.jpg';
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet';
const MyProfile = () => {
  const { userDta } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Alt Query|| Profile</title>
      </Helmet>
      <MultyImgBanner img1={img1} />
      <div className="py-64 text-center">
        <div className=" border-2 border-mClr w-96 rounded-md p-5 mx-auto">
          <h1 className="text-4xl text-center pb-5">My Profile </h1>
          <img className="rounded-full mx-auto" src={userDta.photoURL} alt="" />
          <h1 className="text-3xl text-slate-800 dark:text-slate-100 pt-5">
            {userDta.displayName}
          </h1>
          <p className="text-lg text-slate-800 dark:text-slate-100">
            {userDta.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
