import React, { useState } from "react";
import GridImages from "./components/GridImages";
import Header from "./components/Header";
import Modal from "./components/Modal";

export default function App() {
  const [state, setState] = useState("none");

  return (
    <>
      <Header setState={setState} />
      <GridImages setState={setState} />
      <Modal state={state} setState={setState} />
    </>
  );
}
