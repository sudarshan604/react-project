export const reducer = (state, action) => {
  if (action.type === "TESTING") {
    const addPeople = [...state.people, action.addPeople];
    return {
      ...state,
      people: addPeople,
      isModalOpen: true,
      ModalContent: "item added",
    };
  }
  if (action.type === "NO_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      ModalContent: "please add item",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((p) => p.id !== action.itemId);
    return { ...state, people: newPeople };
  }
  throw new Error("no matching action type");
};
