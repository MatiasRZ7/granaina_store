"use client";
import Head from "next/head";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const SuccessfulPayment = () => {
  const cart = useCart();
  // clear the cart after successful payment
  useEffect(() => {
    cart.clearCart();
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <Head>
        <GoogleTagManager gtmId="AW-16611348871" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16611348871"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16611348871');
          `}
        </script>
        <script>
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16611348871/Mb92CKGl0LoZEIej9PA9',
              'value': 1.0,
              'currency': 'MXN',
              'transaction_id': ''
            });
          `}
        </script>
      </Head>
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
