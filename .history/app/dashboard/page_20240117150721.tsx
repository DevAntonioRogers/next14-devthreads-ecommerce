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
              <p className="text-2xl italic">
                Hello {user?.name}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default page;
