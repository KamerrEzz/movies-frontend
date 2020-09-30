import { useEffect, useState } from "react";

const useInitalState = (API) => {
  //ver y actualizar estados
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    //Crear nuestra logica
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []); //se escucha alguna proviedad de va a cambiar

  return videos
};

export default useInitalState;
