import React from "react";

type ImageProps = {
  setState: Function;
};

export default function Image({ setState }: ImageProps) {
  const deleteHandler = () => {
    setState("delete");
  };

  return (
    <div className="img-container relative rounded-2xl overflow-hidden">
      <div className="mask absolute w-full h-full bg-black bg-opacity-50 duration-300">
        <div className="h-full relative font-mont">
          <button
            className="px-3 text-white bg-red-400 hover:bg-red-500 rounded-full absolute top-3 right-3"
            onClick={deleteHandler}
          >
            delete
          </button>
          <p className=" text-white text-lg absolute bottom-0 left-0 p-3">Morbi consequat lectus non orci maximus</p>
        </div>
      </div>
      <img className="w-full" src="http://placehold.it/90x90" alt="" />
    </div>
  );
}
