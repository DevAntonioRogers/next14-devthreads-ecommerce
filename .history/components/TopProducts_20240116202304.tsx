import { FetchProducts } from "@/app/actions/getStripeProducts";
import ProductsCard from "./ProductsCard";
import Link from "next/link";

const TopProducts = async () => {
  const products = await FetchProducts();

  return <div>TopRated</div>;
};

export default TopProducts;
