import { CartLayout } from "layout";
import Head from "next/head";
const Cart = () => {
  return (
    <div>
      <Head>
        <title>Cart | Kaivee Healthcare</title>
        <meta
          name="description"
          content={"Checkout in Style - Your Cart Awaits! |Kaivee Healthcare "}
        />
      </Head>
      <CartLayout />
    </div>
  );
};

export default Cart;
