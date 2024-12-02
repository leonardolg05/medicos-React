export const reducer = (state, action) => {
    debugger;
    switch (action.type) {
      case "GET_DOCTORS":
        return { ...state, doctors: action.payload };
      case "ADD_CART":
        return { ...state, cart: [...state.cart, action.payload] };
      default:
        throw new Error("Acción no existente");
    }
  };