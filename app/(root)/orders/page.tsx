import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);
  console.log(orders);
  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading3-bold my-10 ">Your Orders</p>
      {!orders ||
        (orders.length === 0 && (
          <p className="text-body-bold my-5">You have no orders yet.</p>
        ))}

      <div className="flex flex-col gap-10">
        {orders?.map((order: OrderType) => (
          <div className="flex flex-col gap-8 p-4 hover:bg-grey-1">
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold">Order Id: {order._id}</p>
              <p className="text-base-bold">Total: ${order.totalAmount}</p>
            </div>

            <div className="flex flex-col gap-5">
              {order.products.map((orderItem: OrderItemType) => (
                <div className="flex gap-4">
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    width={100}
                    height={100}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-small-medium">
                      Tour:{" "}
                      <span className="text-small-bold">
                        {orderItem.product.title}
                      </span>
                    </p>
                    <p className="text-small-medium">
                      Precio Adulto tour:{" "}
                      <span className="text-small-bold">${orderItem.product.price}</span>
                    </p>

                    <p className="text-small-medium">
                      Cantidad:{" "}
                      <span className="text-small-bold">{orderItem.quantity}</span>
                    </p>
                    {order.dateAdded && (
                      <p className="text-small-medium">
                        Fecha del Tour:{" "}
                        <span className="text-small-bold">
                          {new Date(order.dateAdded).toLocaleDateString()}
                        </span>
                      </p>
                    )}
                    {order.hotelName && (
                      <p className="text-small-medium">
                        Nombre del hotel:{" "}
                        <span className="text-small-bold">
                          {order.hotelName}
                        </span>
                      </p>
                    )}
                    {order.childrenQuantity && (
                      <p className="text-small-medium">
                        Cantidad niños:{" "}
                        <span className="text-small-bold">
                          {order.childrenQuantity}
                        </span>
                      </p>
                    )}
                    {order.adultQuantity && (
                      <p className="text-small-medium">
                        Cantidad adultos:{" "}
                        <span className="text-small-bold">
                          {order.adultQuantity}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic"