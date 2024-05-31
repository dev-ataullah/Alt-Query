import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { GoPlus } from 'react-icons/go';
import { LuLogOut } from 'react-icons/lu';
import Swal from 'sweetalert2';

const ProfileMenu = () => {
  const { userDta, logOutAcc } = useAuth();
  const logout = () => {
    logOutAcc();
    Swal.fire({
      title: 'Logged Out',
      text: 'Your account has been successfully logged out.',
      icon: 'success',
    });
  };
  return (
    <div className="group relative cursor-pointer py-1.5 w-34">
      <div className="flex items-center justify-between pl-2 lg:pl-0 pr-2 w-full py-1.5 text-center text-white duration-200">
        <div className="relative group">
          <img
            className="size-[60px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
            src={
              userDta.photoURL
                ? userDta.photoURL
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            }
            alt="avatar navigate ui"
          />
          <span className="size-5 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2 text-mClr">
            <GoPlus />
          </span>
        </div>
      </div>
      <div className="invisible right-0 absolute z-50 flex w-60 flex-col bg-gray-100 shadow-4xl group-hover:visible text-center smallScreenMenu">
        <div>
          <h1 className="py-2 text-2xl bg-slate-800 text-white mb-2">
            {userDta.displayName ? userDta.displayName : 'User Name'}
          </h1>
        </div>

        <NavLink
          to={'/'}
          className="block md:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b"
        >
          Home
        </NavLink>
        <NavLink
          to={'/queries'}
          className="block md:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b"
        >
          All Queries
        </NavLink>
        <NavLink
          to={'/my-queries'}
          className="block md:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b"
        >
          My Added Queries
        </NavLink>
        <NavLink
          to={'/my-recommendations'}
          className="block md:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b"
        >
          My recommendations
        </NavLink>
        <NavLink
          to={'/recommendations-for-me'}
          className="block md:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b"
        >
          Recommendations For Me
        </NavLink>
        <NavLink
          to={'/about'}
          className="block lg:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b"
        >
          About Us
        </NavLink>
        <NavLink
          to={'/contact'}
          className="block lg:hidden text-black hover:bg-mClr py-1.5 hover:text-white font-semibold border-b"
        >
          Contact Us
        </NavLink>
        <NavLink
          to={'/profile'}
          className="bg-mClr py-1.5 hover:bg-[#2a93cf] text-white font-semibold border-b"
        >
          My Profile
        </NavLink>
        <button
          onClick={logout}
          className="hover:bg-[#c52323] hover:text-white font-semibold border-b bg-sClr  text-white py-3 tracking-widest flex items-center justify-center gap-3"
        >
          <span className="text-2xl">
            <LuLogOut />
          </span>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
