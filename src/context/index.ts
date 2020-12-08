import { createContext } from "react";

interface AppContextInterface {
  images: any[];
  imgId: string;
  setImages: any;
  setImgId: Function;
  setSearchString: Function;
  setPercent: Function;
}

const AppContext = createContext<AppContextInterface>({
  images: [],
  imgId: "",
  setImages: () => {},
  setImgId: () => {},
  setSearchString: () => {},
  setPercent: () => {},
});

export default AppContext;
