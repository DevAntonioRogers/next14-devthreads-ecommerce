import Stripe from "stripe";

export const FetchProducts = async () => {
  const getProducts = async () => {
    const stripe = new Stripe(
      process.env.STRIPE_SECRET_KEY as string,
      {
        apiVersion: "2023-10-16",
      }
    );
    const products = await stripe.products.list({
      limit: 99,
    });
  };
};
