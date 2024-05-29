"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import useCart from "@/lib/hooks/useCart";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  const isProductPage = pathname.includes('products/');
  return (
    <div className={`${isProductPage ? 'relative' : 'sticky'} top-0 z-10 py-4 px-10 flex gap-2 justify-between items-center bg-gradient-to-r from-amarillo to-verde-claro max-sm:px-2`}>
      <Link href="/">
        <Image
          src="/LOGO 3 (2).png"
          alt="Logo Riviera maya tour"
          width={100}
          height={120}
        />
      </Link>
      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-1 ${
            pathname === "/" && "text-red-1"
          }`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/wishlist" && "text-red-1"
          }`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/orders" && "text-red-1"
          }`}
        >
          Orders
        </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px] bg-claro-crema rounded"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => {
            router.push(`/search/${query}`);
            setQuery("");
          }}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      <div className=" relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1
          hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div
            className="absolute flex flex-col gap-4 p-3 rounded-lg border bg-white
          text-base-bold top-12 right-5 lg:hidden"
          >
            <Link href="/" className="hover:text-red-1">
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "sign-in"}
              className="hover:text-red-1"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-1"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1
          hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
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
    </div>
  );
};

export default Navbar;
