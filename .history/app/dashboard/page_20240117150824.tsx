import { getOrders } from "../actions/getOrders";
import getCurrentUser from "../(auth)/actions/getCurrentUser";
import Image from "next/image";
import formatPrice from "@/utils/formatPrice";

const page = async () => {
  const user = await getCurrentUser();
  const orders = await getOrders(user);
  return (
    <>
      {user ? (
        <div className="main-container">
          <div className="p-8 flex items-center justify-center gap-12 text-center">
            <div>
              <p className="text-2xl">
                Hello, {user?.name}
              </p>
              <p>{user?.email}</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl text-center underline">
              Orders
            </h1>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default page;
