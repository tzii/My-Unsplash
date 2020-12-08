import Axios from "axios";

// const urlBase = "http://localhost:5000/";
const urlBase = "https://myunsplash.herokuapp.com/";

export const uploadImage = (label: string, url: string, password: string) => {
  let data = JSON.stringify({ label, url, password });
  return Axios({
    method: "POST",
    url: urlBase + "api/upload",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  }).then((res) => res.data);
};

export const searchImage = (label: string) => {
  return Axios({
    method: "GET",
    url: urlBase + "api/search/" + label,
  }).then((res) => res.data);
};

export const deleteImage = (id: string, password: string) => {
  let data = JSON.stringify({ id, password });
  return Axios({
    method: "POST",
    url: urlBase + "api/delete",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  }).then((res) => res.data);
};
