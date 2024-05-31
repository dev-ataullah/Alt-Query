import { FaEye, FaEyeSlash, FaTwitter, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TbPasswordFingerprint } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner9 } from 'react-icons/im';
import img from '../../assets/banner/7.jpg';
import { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../provider/Provider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loding from '../Loding/Loding';
import useAxiosSec from '../../Hooks/useAxiosSec';
import axios from 'axios';

const Register = () => {
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [nameErr, setNameErr] = useState(null);
  const [imgErr, setImgErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);
  const [confPassErr, setConfPassErr] = useState(null);
  const axiosSecu = useAxiosSec();

  // Firebase data
  const {
    emlPassRegister,
    gitHubLogin,
    googleLogin,
    logOutAcc,
    userDta,
    profileUpdate,
    setLoading,
    isLoading,
  } = useContext(ContextAuth);

  // Naviget, login done then go to Login
  const naviget = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userDta && !location.state) {
      naviget('/');
      console.log('login to home');
    }
  }, [naviget, userDta, location.state]);

  // const [imgNam, setImgNam] = useState({});
  const handleSignUpSubmit = async (e) => {
    setNameErr(null);
    setImgErr(null);
    setEmailErr(null);
    setPassErr(null);
    setConfPassErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const name = formDta.get('name');
    const photo = formDta.get('profile');
    // setImgNam({ nam: name, pic: photo });
    const email = formDta.get('email');
    const pass = formDta.get('password');
    const confPass = formDta.get('confirmPass');
    const fromDtaImg = new FormData();
    fromDtaImg.append('image', photo);
    console.log(name, photo, email, pass, confPass);

    if (name.length < 2) {
      setNameErr('Please enter your valid name.');
      return;
    } else if (photo.name === '' || photo.size === 0) {
      setImgErr('Please enter your valid photo.');
      return;
    } else if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (!isValidPass.test(pass)) {
      setPassErr('Please input Uppercase, Lowercase and at least 6 digits.');
      return;
    } else if (pass !== confPass) {
      setConfPassErr('Password is not matched.');
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        fromDtaImg
      );
      const imageProfile = data.data.display_url;
      console.log(imageProfile);

      const result = await emlPassRegister(email, pass);
      const jwtRequet = async () => {
        const { data } = await axiosSecu.post(`/jwt`, {
          email: result?.user?.email,
        });
        console.log('JWT Token,', data);
      };
      jwtRequet();
      // Update Profile
      await profileUpdate(name, imageProfile);
      Swal.fire({
        title: 'Good job!',
        text: 'Your account has been successfully created. Please Login Now.',
        icon: 'success',
      });
      await logOutAcc();
      await naviget('/login');
      // naviget(location?.state ? location.state : '/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        title: 'Oops...!',
        text: `Sorry, your account could not be Created ! "${error.message}"`,
        icon: 'error',
      });
    }
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        const user = result.user;
        const jwtRequet = async () => {
          const { data } = await axiosSecu.post(`/jwt`, {
            email: user?.email,
          });
          console.log('JWT Token,', data);
        };
        jwtRequet();

        naviget(location?.state ? location.state : '/');
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false)
        console.log(errorMessage);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };

  if (userDta) {
    return <Loding />;
  }
  return (
    <div>
      <div className="w-11/12 md:w-full mx-auto -mt-20 mb-14">
        <div className="h-28 sm:h-36"></div>
        <div className="flex flex-col md:flex-row-reverse items-center md:w-11/12 lg:w-9/12 mx-auto border-mClr border-2 rounded gap-6 shadow-2xl">
          <div
            className="w-full md:w-1/2 h-72 sm:h-96 md:h-[665px] lg:h-[630px] bg-no-repeat bg-cover"
            style={{
              backgroundImage: 'url(' + img + ')',
              backgroundPosition: 'center',
            }}
          ></div>
          {/* login form */}
          <div className="w-full md:w-1/2 p-5 md:pr-0">
            <h1 className="text-3xl pb-8 text-slate-800 dark:text-slate-100 font-black">
              Sign up to Alt Query
            </h1>
            <form className="space-y-4" onSubmit={handleSignUpSubmit}>
              {/* Name Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <FaUserAlt />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      nameErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                {nameErr && (
                  <p className="text-sm text-red-500 italic pt-1">{nameErr}</p>
                )}
              </div>
              {/* Image Fild */}
              <div className="">
                <div className="relative">
                  <label
                    htmlFor="small_size"
                    className={`absolute left-0 top-0 bg-slate-800 dark:bg-slate-400  dark:font-medium px-3 rounded-l-md py-[11px] border-slate-400 dark:border-slate-100 text-base botder ${
                      imgErr
                        ? 'text-red-500 dark:text-red-500'
                        : 'text-white dark:text-slate-800'
                    }`}
                  >
                    Choose Profile
                  </label>
                  <input
                    className={`pl-5 block w-full mb-1 text-gray-900  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 text-base dark:placeholder-gray-400 ${
                      imgErr
                        ? 'border border-red-500 dark:border-red-500'
                        : 'border border-slate-400 dark:border-slate-100'
                    }`}
                    id="small_size"
                    type="file"
                    name="profile"
                    placeholder="Choose Profile"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const validImageTypes = [
                          'image/jpeg',
                          'image/png',
                          'image/gif',
                          'image/bmp',
                          'image/webp',
                        ];
                        if (!validImageTypes.includes(file.type)) {
                          alert('Please select a valid image file.');
                          e.target.value = ''; // Clear the input
                        }
                      }
                    }}
                  />
                </div>

                {imgErr && (
                  <p className="text-sm text-red-500 italic">{imgErr}</p>
                )}
              </div>
              {/* Email Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <MdEmail />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      emailErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Your Email"
                    name="email"
                  />
                </div>
                {emailErr && (
                  <p className="text-sm text-red-500 italic pt-1">{emailErr}</p>
                )}
              </div>
              {/* Password Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <RiLockPasswordFill />
                  </div>
                  <input
                    type={eye ? 'text' : 'password'}
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      passErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Password"
                    name="password"
                  />
                  <div
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-xl absolute top-1/2 -translate-y-1/2 right-3"
                  >
                    {eye ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                {passErr && (
                  <p className="text-sm text-red-500 italic pt-1">{passErr}</p>
                )}
              </div>
              {/* Confirm Password Fild */}
              <div className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-600 dark:text-gray-200">
                    <TbPasswordFingerprint />
                  </div>
                  <input
                    type="password"
                    id="input-group-1"
                    className={`bg-gray-50 py-2 text-base border  text-gray-900 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md ${
                      confPassErr
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-400 dark:border-gray-200'
                    }`}
                    placeholder="Confirm Password"
                    name="confirmPass"
                  />
                </div>
                {confPassErr && (
                  <p className="text-sm text-red-500 italic pt-1">
                    {confPassErr}
                  </p>
                )}
              </div>
              <p></p>
              <label className="text-slate-800 dark:text-slate-100">
                <input type="checkbox" /> I agree to the
                <Link to={'/privecy-policy'} className="text-mClr">
                  {' '}
                  Privacy Policy
                </Link>
              </label>
              <button
                disabled={isLoading}
                className={`w-full py-2 px-4 rounded-md text-center text-white hover:text-mClr disabled:hover:text-white font-bold bg-mClr active:scale-95 duration-150 hover:bg-transparent border-2 border-mClr disabled:bg-mClr tracking-widest`}
              >
                {isLoading ? (
                  <ImSpinner9 className="animate-spin text-2xl mx-auto" />
                ) : (
                  'Sign up'
                )}
              </button>
            </form>
            <p className="pt-3 text-slate-800 dark:text-slate-100">
              Already have an account?{' '}
              <Link to={'/login'} className="underline text-mClr">
                Login
              </Link>
            </p>
            <div className="w-full relative h-5 my-5 flex items-center justify-center">
              <div className="h-[1px] w-full bg-mClr"></div>
              <span className="absolute px-3 font-medium text-gray-900 dark:text-slate-100 -translate-x-1/2 bg-white left-1/2 dark:bg-[#353b48]">
                or
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 xl:gap-3 w-full text-slate-900 dark:text-stone-100">
            <button
              disabled={isLoading}
              onClick={() => socialLogin(googleLogin)}
              className="py-2 px-1 w-full font-medium border hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-1 border-mClr"
            >
              <span className=" text-2xl">
                <FcGoogle />
              </span>
              Login With Google
            </button>
            <button
              disabled={isLoading}
              onClick={() => socialLogin(gitHubLogin)}
              className="py-2 px-1 w-full font-medium border hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-1 border-mClr"
            >
              <span className="text-mClr dark:text-white text-2xl">
                <FaTwitter />
              </span>
              Login With Twitter
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
