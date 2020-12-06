import React, { useEffect } from "react";

type ModalProps = {
  state: string;
  setState: Function;
};

export default function Modal({ state, setState }: ModalProps) {
  useEffect(() => {
    if (state !== "none") {
      document.body.classList.add("overflow-hidden");
    } else document.body.classList.remove("overflow-hidden");
  }, [state]);

  const submitHandler = () => {
    setState("none");
  };

  return (
    <>
      {state === "add" ? (
        <div className="fixed z-30 top-4 left-0 w-full">
          <div className="modal mx-auto p-7 rounded-2xl font-noto bg-white flex flex-col w-500 animate-slide-down">
            <h5 className="text-gray-700 text-lg">Add a new photo</h5>
            <label className="text-gray-600 text-sm mt-4" htmlFor="label-input">
              Label
            </label>
            <input
              className="text-gray-700 px-4 py-2 mt-2 border border-gray-400 focus:border-gray-600 rounded-xl"
              type="text"
              name=""
              id="label-input"
              placeholder="Suspendisse elit massa"
            />
            <label className="text-gray-600 text-sm mt-3" htmlFor="photo-url">
              Photo URL
            </label>
            <input
              className="text-gray-700 px-4 py-2 border border-gray-400 focus:border-gray-600 rounded-xl mt-2"
              type="text"
              name=""
              id="photo-url"
              autoComplete="off"
              placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            />
            <label className="text-gray-600 text-sm mt-4" htmlFor="label-password">
              Password
            </label>
            <input
              className="text-gray-700 px-4 py-2 mt-2 border border-gray-400 focus:border-gray-600 rounded-xl"
              type="text"
              name=""
              id="label-password"
              placeholder="Password"
            />
            <div className="mt-3 flex flex-row-reverse">
              <button
                className="h-10 mr-4 px-4 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow transition"
                onClick={submitHandler}
              >
                Submit
              </button>
              <button
                className="h-10 mr-4 px-4 text-gray-300 bg-white hover:bg-gray-50 hover:shadow rounded-lg transition"
                onClick={() => setState("none")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : state === "delete" ? (
        <div className="fixed z-30 top-4 left-0 w-full">
          <div className="modal mx-auto p-7 rounded-2xl font-noto bg-white flex flex-col w-500 animate-slide-down">
            <h5 className="text-gray-700 text-lg">Are you sure?</h5>
            <label className="text-gray-600 text-sm mt-4" htmlFor="label-password">
              Password
            </label>
            <input
              className="text-gray-700 px-4 py-2 mt-2 border border-gray-400 focus:border-gray-600 rounded-xl"
              type="Password"
              name=""
              id="label-password"
              placeholder="********"
            />
            <div className="mt-3 flex flex-row-reverse">
              <button
                className="h-10 mr-4 px-4 text-white bg-green-500 rounded-lg shadow transition"
                onClick={submitHandler}
              >
                Submit
              </button>
              <button
                className="h-10 mr-4 px-4 text-gray-300 bg-white hover:bg-gray-50 hover:shadow rounded-lg transition"
                onClick={() => setState("none")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={
          "modal-backdrop bg-black duration-300" +
          (state !== "none" ? " fixed z-20 top-0 left-0 w-full h-full bg-opacity-50" : " bg-opacity-0")
        }
        onClick={() => setState("none")}
      ></div>
    </>
  );
}
