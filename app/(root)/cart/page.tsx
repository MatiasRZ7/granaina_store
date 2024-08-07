"use client";
import React, { useContext } from "react";
import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { LanguageContext } from "@/lib/languageContext";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const total = cart.getTotal();
  const totalfiftyPercent = total * 0.5;
  const totalRounded = parseFloat(totalfiftyPercent.toFixed(2));
  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const { language } = useContext(LanguageContext);

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("/sign-in");
      } else {
        console.log({
          cartItems: cart.cartItems,
          customer,
          total: totalRounded,
        });
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            customer,
            total: totalRounded,
          }),
        });
        const data = await res.json();
        window.location.href = data.url;
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20 py-36 px-10 max-lg:flex-col">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">
          {language === "es" ? "Carrito de Compras" : "Shopping Cart"}
        </p>
        <hr className="my-6" />
        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">
            {language === "es" ? "No hay artículos en el carrito" : "No item in cart"}
          </p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem.item._id}
                className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-verde-claro px-6 py-5 items-center max-sm:items-start justify-between
               transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src={cartItem.item.media[0]}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="Product Image"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    {cartItem.dateAdded && (
                      <p className="text-small-medium">
                        {language === "es" ? "Tour el dia:" : "Tour on:"}{" "}
                        {new Date(cartItem.dateAdded).toLocaleDateString()}
                      </p>
                    )}
                    <p className="text-small-medium">${cartItem.item.price}</p>
                    <p className="text-small-medium">
                      {language === "es" ? "Lugar de recogida:" : "Pickup location:"} {cartItem.hotelName}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() =>
                      cart.decreaseAdultQuantity(cartItem.item._id)
                    }
                  />
                  <p className="text-body-bold">{cartItem.adultQuantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() =>
                      cart.increaseAdultQuantity(cartItem.item._id)
                    }
                  />{" "}
                  {language === "es" ? "(Adultos)" : "(Adults)"}
                  <MinusCircle className="hover:text-red-1 cursor-pointer"  onClick={() =>
                      cart.decreaseChildrenQuantity(cartItem.item._id)
                    } />
                  <p className="text-body-bold">{cartItem.childrenQuantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() =>
                      cart.increaseChildrenQuantity(cartItem.item._id)
                    }
                  />{" "}
                  {language === "es" ? "(Niños)" : "(Children)"}
                </div>

                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-verde-claro rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          {language === "es" ? "Resumen" : "Summary"}{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? (language === "es" ? "artículos" : "items") : (language === "es" ? "artículo" : "item")
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold bg-amarillo rounded-lg shadow-lg m-1 p-2">
          <div>
            <span>{language === "es" ? "Monto a pagar:" : "Amount to pay:"}</span>
            <span className="text-small-bold block mt-1">
              {language === "es" ? "(Equivale al 50% de la reserva del Tour)" : "(Equivalent to 50% of the tour reservation)"}
            </span>
          </div>
          <span>${totalRounded}</span>
        </div>
        <button
          className="border rounded-lg text-body-bold bg-white py-3 w-full
         hover:bg-verde-fuerte hover:text-white transition-all duration-300 ease-in-out"
          onClick={handleCheckout}
        >
          {language === "es" ? "Proceder al Pago" : "Proceed to Checkout"}
        </button>
        <div className="flex justify-between text-small-bold py-2">
          <span>{language === "es" ? "El 50% restante se paga el dia del tour." : "The remaining 50% is paid on the day of the tour."}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;