import React, { useContext } from "react";
import { Masonry } from "react-masonry-responsive";
import AppContext from "../context";
import Image from "./Image";

// react-magic-grid
type GridProps = {
  setState: Function;
};

export default function GridImages({ setState }: GridProps) {
  const { images } = useContext(AppContext);
  return (
    <div className="container mt-10 mx-auto px-4 min-w-640">
      <Masonry
        gap={30}
        items={images.map((image) => ({ key: image._id, node: <Image setState={setState} image={image} /> }))}
        minColumnWidth={300}
      />
    </div>
  );
}
