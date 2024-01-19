import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "use-shopping-cart";

const CartIcon = () => {
  const { cartDetails } = useShoppingCart();
  const cartItems = Object.values(cartDetails ?? {});
  return (
    <Link href={"/cart"} className="relative">
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className="absolute left-3 bottom-3 rounded-full text-sm font-bold w-4 h-4 bg-gray-900 text-white flex items-center justify-center pb-1">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
