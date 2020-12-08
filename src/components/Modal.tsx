import { useContext, useEffect, useState } from "react";
import { deleteImage, searchImage, uploadImage } from "../api";
import AppContext from "../context";

type ModalProps = {
  state: string;
  setState: Function;
  setNoti: Function;
};

const reg = new RegExp("(http|https|ftp):[/]{2}([a-zA-Z0-9-.]+.[a-zA-Z]{2,4})");

export default function Modal({ state, setState, setNoti }: ModalProps) {
  const [labelVali, setLabelVali] = useState(true);
  const [urlVali, setURLVali] = useState(true);
  const [passVali, setPassVali] = useState(true);
  const [pass2Vali, setPass2Vali] = useState(true);
  const { setImages, imgId, setPercent } = useContext(AppContext);

  useEffect(() => {
    if (state !== "none") {
      document.body.classList.add("overflow-hidden");
    } else document.body.classList.remove("overflow-hidden");
  }, [state]);

  const addHandler = (e: any) => {
    e.preventDefault();

    if (e.target.label.value === "") {
      setLabelVali(false);
      return;
    } else setLabelVali(true);

    if (!reg.test(e.target.url.value)) {
      setURLVali(false);
      return;
    } else setURLVali(true);

    if (e.target.passwordd.value === "") {
      setPassVali(false);
      return;
    } else setPassVali(true);

    setPercent(80);
    uploadImage(e.target.label.value, e.target.url.value, e.target.passwordd.value).then((res) => {
      searchImage("").then(setImages);
      setPercent(100);
      setNoti(res);
    });
    setState("none");
  };

  const deleteHandler = (e: any) => {
    e.preventDefault();
    if (e.target.passwordd.value === "") {
      setPass2Vali(false);
      return;
    } else setPass2Vali(true);

    setPercent(80);
    deleteImage(imgId, e.target.passwordd.value).then((res) => {
      searchImage("").then(setImages);
      setPercent(100);
      setNoti(res);
    });
    setState("none");
  };
  return (
    <>
      {state === "add" ? (
        <div className="fixed z-30 top-4 left-0 w-full">
          <form
            className="modal mx-auto p-7 rounded-2xl font-noto bg-white flex flex-col w-500 animate-slide-down"
            onSubmit={addHandler}
          >
            <h5 className="text-gray-700 text-lg">Add a new photo</h5>
            <label className="text-gray-600 text-sm mt-4" htmlFor="label">
              Label
            </label>
            <input
              className={
                "text-gray-700 px-4 py-2 mt-2 border rounded-xl" +
                (labelVali ? " border-gray-400 focus:border-gray-600" : " border-red-400 focus:border-red-600")
              }
              type="text"
              name=""
              id="label"
              placeholder="Suspendisse elit massa"
              autoComplete="off"
            />
            <label className="text-gray-600 text-sm mt-3" htmlFor="url">
              Photo URL
            </label>
            <input
              className={
                "text-gray-700 px-4 py-2 mt-2 border rounded-xl" +
                (urlVali ? " border-gray-400 focus:border-gray-600" : " border-red-400 focus:border-red-600")
              }
              type="text"
              name=""
              id="url"
              autoComplete="off"
              placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            />
            <label className="text-gray-600 text-sm mt-4" htmlFor="passwordd">
              Password
            </label>
            <input
              className={
                "text-gray-700 px-4 py-2 mt-2 border rounded-xl" +
                (passVali ? " border-gray-400 focus:border-gray-600" : " border-red-400 focus:border-red-600")
              }
              type="text"
              name=""
              id="passwordd"
              placeholder="Password"
              autoComplete="off"
            />
            <div className="mt-3 flex flex-row-reverse">
              <button
                type="submit"
                className="h-10 mr-4 px-4 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow transition"
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
          </form>
        </div>
      ) : state === "delete" ? (
        <div className="fixed z-30 top-4 left-0 w-full">
          <form
            className="modal mx-auto p-7 rounded-2xl font-noto bg-white flex flex-col w-500 animate-slide-down"
            onSubmit={deleteHandler}
          >
            <h5 className="text-gray-700 text-lg">Are you sure?</h5>
            <label className="text-gray-600 text-sm mt-4" htmlFor="passwordd">
              Password
            </label>
            <input
              className={
                "text-gray-700 px-4 py-2 mt-2 border rounded-xl" +
                (pass2Vali ? " border-gray-400 focus:border-gray-600" : " border-red-400 focus:border-red-600")
              }
              type="Password"
              name=""
              id="passwordd"
              placeholder="********"
              autoComplete="off"
            />
            <div className="mt-3 flex flex-row-reverse">
              <button type="submit" className="h-10 mr-4 px-4 text-white bg-green-500 rounded-lg shadow transition">
                Submit
              </button>
              <button
                className="h-10 mr-4 px-4 text-gray-300 bg-white hover:bg-gray-50 hover:shadow rounded-lg transition"
                onClick={() => setState("none")}
              >
                Cancel
              </button>
            </div>
          </form>
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
