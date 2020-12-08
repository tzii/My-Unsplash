import { useEffect, useState } from "react";
import { searchImage } from "./api";
import GridImages from "./components/GridImages";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AppContext from "./context";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

export default function App() {
  const [state, setState] = useState("none");
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [imgId, setImgId] = useState("");
  const [noti, setNoti] = useState<undefined | { status: string; msg: string }>();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(80);
    console.log(80);
    searchImage(searchString).then((res) => {
      setImages(res);
      setPercent(100);
    });
  }, [searchString]);

  return (
    <AppContext.Provider value={{ images, imgId, setImages, setImgId, setSearchString, setPercent }}>
      <LoadingBar color="#f11946" progress={percent} onLoaderFinished={() => setPercent(0)} waitingTime={500} />
      <Header setState={setState} noti={noti} />
      <GridImages setState={setState} />
      <Modal state={state} setState={setState} setNoti={setNoti} />
      <Footer />
    </AppContext.Provider>
  );
}
