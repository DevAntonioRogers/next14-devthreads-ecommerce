import { FetchProducts } from "@/app/actions/getStripeProducts";
import ProductsCard from "./ProductsCard";
import Link from "next/link";

const TopProducts = async () => {
  const products = await FetchProducts();
  const topProducts = products.filter(
    (product) => product.metadata?.topRated === "true"
  );
  return <div>TopRated</div>;
};

export default TopProducts;
