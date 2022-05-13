import { useEffect } from "react";
import React from "react";

const context = React.createContext();

function UserContextProvider(props) {
  const [allPhotos, setAllPhotos] = React.useState([]);
  const [cardItem, setCardItem] = React.useState([]);
  function toggleFavourite(id) {
    const updateArr = allPhotos.map((photo) => {
      console.log(id);
      if (id === photo.id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      } else return photo;
    });
    setAllPhotos(updateArr);
  }

  function addCardItem(newItem) {
    setCardItem((prev) => [...prev, newItem]);
  }

  useEffect(() => {
    let url =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(url)
      .then((res) => res.json())
      .then((dat) => setAllPhotos(dat));
  }, []);

  return (
    <context.Provider value={{ allPhotos, toggleFavourite, addCardItem }}>
      {props.children}
    </context.Provider>
  );
}

export { UserContextProvider, context };
