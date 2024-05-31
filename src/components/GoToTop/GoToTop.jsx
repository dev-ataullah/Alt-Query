import { FaArrowUp } from 'react-icons/fa';
const hansleTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const GoToTop = () => {
  return (
    <div
      onClick={hansleTop}
      className="bottom-3 right-3 rounded-full bg-slate-700 z-30 fixed text-white text-xl p-3 hover:-translate-y-2 duration-300 cursor-pointer"
    >
      <FaArrowUp />
    </div>
  );
};

export default GoToTop;
