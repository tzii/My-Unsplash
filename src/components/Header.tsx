import React from "react";
import Logo from "../images/logo.svg";

type HeaderProps = {
  setState: Function;
};

export default function Header({ setState }: HeaderProps) {
  const addHandler = () => {
    setState("add");
  };

  return (
    <header className="font-noto min-w-640 py-1 shadow bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 my-2 flex justify-between items-center ">
        <div className="flex">
          <img className="mr-8" src={Logo} alt="" />
          <form>
            <label htmlFor="search" className="relative">
              <input
                className="h-10 w-96 pl-9 border-2 border-gray-300 focus:border-gray-400 rounded-lg text-gray-700"
                type="text"
                name="search"
                id="search"
                placeholder="Search by name"
              />
              <i className="fas fa-search text-gray-300 absolute pos-center left-3"></i>
            </label>
          </form>
        </div>
        <div>
          <button
            className="h-10 mr-4 px-4 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow duration-300"
            onClick={addHandler}
          >
            Add a photo
          </button>
        </div>
      </div>
    </header>
  );
}
