import { IoCloseCircle } from "react-icons/io5";

export function Aside({ asideStatus, setAsideStatus, children }) {
  return (
    <>
      <div
        className={`bg-gray-500/25 fixed top-0 left-0 w-full h-full -z-0 backdrop-blur-[1px]  ${
          asideStatus ? "translate-x-0" : "translate-x-[100%]"
        }`}
      ></div>
      <aside
        className={`flex flex-col gap-2 fixed top-0 right-0 h-full w-[30%] min-w-[600px] shadow-md shadow-gray-400 p-4 py-6 bg-white z-30 transform transition-transform duration-300 ${
          asideStatus ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <button
          className="absolute top-2 right-2 text-sky-600 font-bold text-xl"
          onClick={() => {
            setAsideStatus(false);
          }}
        >
          <IoCloseCircle className="size-8" />
        </button>

        <section className=" h-full w-full ">{children}</section>
      </aside>
    </>
  );
}
