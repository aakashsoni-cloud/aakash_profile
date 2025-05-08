import { useReducer } from "react";

const initialCart = [];
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id != action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      throw new Error(`UnExpected action type: ${action.type}`);
  }
}

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const handleAddItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const handleRemoveItem = (item) => {
    console.log(item);
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalPrice = cart.reduce((acc, curr) => {
    acc += curr.amount;
    return acc;
  }, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {`Added ${item.name} of amount ${item.amount}, quantity ${item.quantity}`}
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button
        onClick={() =>
          handleAddItem({ id: new Date(), name: "Item 1", amount: 10 })
        }>
        Add Item
      </button>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
