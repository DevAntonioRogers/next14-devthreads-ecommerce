import { FetchProducts } from "@/app/actions/getStripeProducts";
import ProductsCard from "./ProductsCard";
import Link from "next/link";

const TopProducts = async () => {
  const products = await FetchProducts();
  const topProducts = products.filter(
    (product) => product.metadata?.topRated === "true"
  );
  return (
    <section className="py-10 border-t">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <h1 className="text-xl uppercase border-b border-gray-900 text-gray-900">
            Top Products
          </h1>
          <Link href={"/shop"} className="hover:underline">
            <span>View More &#8594;</span>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 grid-cols-2">
          {topProducts.map((product) => (
            <ProductsCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
