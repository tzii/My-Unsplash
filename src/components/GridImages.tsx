import React from "react";
import { Masonry, MasonryItem } from "react-masonry-responsive";
import Image from "./Image";

// react-magic-grid
type GridProps = {
  setState: Function;
};

export default function GridImages({ setState }: GridProps) {
  const images: MasonryItem[] = [
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
    { key: 1, node: <Image setState={setState} /> },
  ];
  return (
    <div className="container mt-10 mx-auto px-4 min-w-640">
      <Masonry gap={30} items={images} minColumnWidth={300} />
    </div>
  );
}
