import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "use-shopping-cart";

const CartIcon = () => {
  const { cartDetails } = useShoppingCart();
  const cartItems = Object.values(cartDetails ?? {});
  return (
    <Link href={"/cart"} className="relative">
      <AiOutlineShoppingCart />
    </Link>
  );
};
