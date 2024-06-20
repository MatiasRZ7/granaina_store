"use client";
import Head from "next/head";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();
  // clear the cart after successful payment
  useEffect(() => {
    cart.clearCart();
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-red-1">
        Pago efectuado correctamente.
      </p>
      <p>Muchas gracias por su compra</p>
      <p>
        {" "}
        Puede ver su orden{" "}
        <Link className="text-red-1" href="/orders">
          aqui
        </Link>
      </p>
      <p>Un agente se pondrá en contacto con usted en breve.</p>
      <Link
        href="/"
        className="p-4 border text-base-bold hover:bg-black hover:text-white"
      >
        IR A LA PÁGINA PRINCIPAL
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
