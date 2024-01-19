import { FetchProducts } from "@/app/actions/getStripeProducts";
import ProductsCard from "./ProductsCard";
import Link from "next/link";

const TopProducts = async () => {
  const products = await FetchProducts();
  const topProducts = products.filter(
    (product) => product.metadata?.topRated === "true"
  );
  return (
    <div className="py-10 border-t">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <h1 className="text-xl uppercase border-b border-gray-900 text-gray-900">
            Top Products
          </h1>
          <Link href={"/shop"}>
            <span>View More </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
