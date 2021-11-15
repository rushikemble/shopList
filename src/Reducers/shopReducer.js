const initialData = JSON.parse(localStorage.getItem("shop")) || [];

const shopReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_SHOP": {
      state = [...state, action.payload];

      localStorage.setItem("shop", JSON.stringify(state));
      return state;
      break;
    }

    case "DELETE_SHOP": {
      const shopList = state.filter((element) =>
        element.id === action.payload.id ? null : element
      );
      localStorage.setItem("shop", JSON.stringify(shopList));

      return state;
    }

    case "EDIT_SHOP": {
      const shopUpdate = state.filter((element) =>
        element.id === action.payload.id
          ? Object.assign(element, action.payload)
          : element
      );
      state = shopUpdate;
      localStorage.setItem("shop", JSON.stringify(state));

      return state;
      break;
    }

    default:
      return state;
  }
};

export default shopReducer;
