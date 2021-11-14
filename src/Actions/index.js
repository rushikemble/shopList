import { v4 as uuidv4 } from "uuid";

const StatusDate = (d, data) => {
  if (d > data.openingDate && d < data.closingDate) {
    return "Open";
  } else {
    return "Close";
  }
};

let date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
export const addshop = (data) => {
  let finalStatus = StatusDate(date, data);

  return {
    type: "ADD_SHOP",
    payload: {
      id: uuidv4(),
      data: data,
      status: finalStatus,
    },
  };
};

export const deleteShop = (id) => {
  return {
    type: "DELETE_SHOP",
    payload: {
      id: id,
    },
  };
};

export const editShop = (editedData, modalId) => {
  const editedStatus = StatusDate(date, editedData);

  return {
    type: "EDIT_SHOP",
    payload: {
      data: editedData,
      id: modalId,
      status: editedStatus,
    },
  };
};
