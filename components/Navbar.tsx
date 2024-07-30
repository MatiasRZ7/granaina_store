"use client";
import { useLanguage } from "@/lib/languageContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import useCart from "@/lib/hooks/useCart";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage(); // Obtiene el idioma actual
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  const isProductPage = pathname.includes("products/");

  // Define los textos en ambos idiomas
  const texts = {
    home: language === "es" ? "Inicio" : "Home",
    wishlist: language === "es" ? "Lista de Deseos" : "Wishlist",
    orders: language === "es" ? "Pedidos" : "Orders",
    searchPlaceholder: language === "es" ? "Buscar..." : "Search...",
    cart:
      language === "es"
        ? `Carrito (${cart.cartItems.length})`
        : `Cart (${cart.cartItems.length})`,
  };
  return (
    <div
      className={`${
        isProductPage ? "relative" : "sticky"
      } top-0 z-10 py-4 px-10 flex gap-2 justify-between items-center bg-gradient-to-l from-azul to-azul-claro max-sm:px-2`}
    >
      <Link href="/">
        <Image
          src="/LOGO 3 blanco.png"
          alt="Logo Riviera maya tour"
          width={100}
          height={120}
        />
      </Link>
      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-white ${pathname === "/" && "text-white"}`}
        >
          {texts.home}
        </Link>
        <Link
          href={user ? "/wishlist" : "sign-in"}
          className={`hover:text-white ${
            pathname === "/wishlist" && "text-white"
          }`}
        >
          {texts.wishlist}
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-white ${
            pathname === "/orders" && "text-white"
          }`}
        >
          {texts.orders}
        </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px] bg-white rounded"
          placeholder={texts.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query !== "") {
              router.push(`/search/${query}`);
              setQuery("");
            }
          }}
        />
        <button
          disabled={query === ""}
          onClick={() => {
            router.push(`/search/${query}`);
            setQuery("");
          }}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-white" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">{texts.cart}</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold top-12 right-5 lg:hidden">
            <Link href="/" className="hover:text-white">
              {texts.home}
            </Link>
            <Link
              href={user ? "/wishlist" : "sign-in"}
              className="hover:text-white"
            >
              {texts.wishlist}
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-white"
            >
              {texts.orders}
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">{texts.cart}</p>
            </Link>
          </div>
        )}
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
      <button onClick={toggleLanguage} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        {language === 'es' ? 'English' : 'Español'}
      </button>
    </div>
  );
};

export default Navbar;
