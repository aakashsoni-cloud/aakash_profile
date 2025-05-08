import { useState, useTransition } from "react";
import Item from "./useTransition-checkout-items";

const CheckoutPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  function updateQuantityAction(newQuantity) {
    startTransition(async () => {
      const saveQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(saveQuantity);
      });
    });
  }

  function updateQuantity(quantity) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(quantity);
      }, 2000);
    });
  }

  return (
    <div>
      <h4>Checkout</h4>
      <Item action={updateQuantityAction} />
      <hr />
      <div className="total">
        <span>Total:</span>
        <span>
          {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
        </span>
      </div>
    </div>
  );
};

export default CheckoutPage;
