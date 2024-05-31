import img from '../../assets/banner/5.jpg';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import Loding from '../Loding/Loding';
import useAxiosSec from '../../Hooks/useAxiosSec';
import { ImSpinner9 } from 'react-icons/im';

const Login = () => {
  // Naviget, login done then go to Home
  const naviget = useNavigate();
  const location = useLocation();
  const axiosSecu = useAxiosSec();
  // console.log(location);
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);

  const {
    gitHubLogin,
    googleLogin,
    emlPassLogin,
    userDta,
    setLoading,
    isLoading,
  } = useAuth();

  useEffect(() => {
    if (userDta && !location.state) {
      naviget('/');
      console.log('login to home');
    }
  }, [naviget, userDta, location.state]);
  const handleLoginSubmit = (e) => {
    setEmailErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const email = formDta.get('email');
    const pass = formDta.get('password');
    console.log(email, pass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (pass.length < 6) {
      setPassErr('Please enter a valid password.');
      return;
    }
    // Email password Login
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
      });
      naviget('/');
      return;
    }
    emlPassLogin(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        naviget(location?.state ? location.state : '/');
        const jwtRequet = async () => {
          const { data } = await axiosSecu.post(`/jwt`, {
            email: user?.email,
          });
          console.log('JWT Token,', data);
        };
        jwtRequet();
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false);
        Swal.fire({
          title: 'Oops...!',
          text: 'Please Enter Valid Email And Password !',
          icon: 'error',
        });
      });
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        const user = result.user;
        naviget(location?.state ? location.state : '/');
        const jwtRequet = async () => {
          const { data } = await axiosSecu.post(`/jwt`, {
            email: user?.email,
          });
          console.log('JWT Token,', data);
        };
        jwtRequet();
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
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
    <div className="w-11/12 md:w-full mx-auto -mt-20 mb-14">
      <div className="h-28 sm:h-36"></div>
      <div className="flex flex-col md:flex-row items-center md:w-11/12 lg:w-9/12 mx-auto border-mClr border-2 rounded gap-6 shadow-2xl">
        <div
          className="w-full md:w-1/2 h-72 sm:h-96 md:h-[500px]"
          style={{
            backgroundImage: 'url(' + img + ')',
            backgroundPosition: 'center',
          }}
        ></div>
        {/* login form */}
        <div className="w-full md:w-1/2 p-5 md:pl-0">
          <h1 className="text-3xl pb-8 text-slate-800 dark:text-slate-100 font-black">
            Sign in to Alt Query
          </h1>
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
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
                  className="cursor-pointer text-xl absolute top-1/2 -translate-y-1/2 right-3 text-slate-800 dark:text-slate-100"
                >
                  {eye ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {passErr && (
                <p className="text-sm text-red-500 italic pt-1">{passErr}</p>
              )}
            </div>

            <div className="flex justify-between items-center text-slate-800 dark:text-slate-100">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="cursor-pointer form-checkbox text-mClr focus:ring-mClr h-4 w-4"
                />
                {'   '}
                <label> Remember me</label>
              </div>

              <p className="underline cursor-pointer">Forgot Password</p>
            </div>

            <button
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md text-center text-white hover:text-mClr disabled:hover:text-white font-bold bg-mClr active:scale-95 duration-150 cursor-pointer hover:bg-transparent border-2 border-mClr disabled:bg-mClr`}
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin text-2xl mx-auto" />
              ) : (
                'Login'
              )}
            </button>
          </form>
          <p className="pt-3 text-slate-800 dark:text-slate-100">
            {`Don't have an account? `}
            <Link to={'/register'} className="underline text-mClr">
              Create Account
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
  );
};

export default Login;
