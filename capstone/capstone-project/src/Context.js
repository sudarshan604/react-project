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
    const isCardConten = cardItem.some((card) => card.id === newItem.id);
    if (isCardConten) {
      const newCard = cardItem.filter((card) => card.id !== newItem.id);
      // console.log([newCard]);
      setCardItem(newCard);
    } else {
      setCardItem((prev) => [...prev, newItem]);
    }
  }

  function removeCartItem(item) {
    const newCartItem = cardItem.filter((card) => card.id !== item.id);
    setCardItem(newCartItem);
  }
  function emptyCart() {
    setCardItem([]);
  }
  useEffect(() => {
    let url =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(url)
      .then((res) => res.json())
      .then((dat) => setAllPhotos(dat));
  }, []);

  return (
    <context.Provider
      value={{
        allPhotos,
        cardItem,
        toggleFavourite,
        addCardItem,
        removeCartItem,
        emptyCart,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export { UserContextProvider, context };
