"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import { useRouter } from "next/navigation";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const cart = useCart();
  const handleDateSelect = (date: Date | undefined, event?: any) => {
    if (date) {
      setSelectedDate(date);
    }
  };
  const router = useRouter();
  return (
    <div className="sm:flex sm:justify-between">
      <div className="max-w-[400px] flex flex-col gap-4 sm:mr-16">
        <div className="flex justify-between items-center">
          <p className="text-heading3-bold">{productInfo.title}</p>
          <HeartFavorite product={productInfo} />
        </div>
        <div className="flex gap-2">
          <p className="text-base-medium text-grey-2">Categoria:</p>
          <p className="text-base-bold">{productInfo.category}</p>
        </div>
        <p className="text-heading3-bold">${productInfo.price}</p>

        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Descripcion:</p>
          <p className="text-small-medium">{productInfo.description}</p>
        </div>

        {productInfo.colors.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base-medium text-grey-2">Colors:</p>
            <div className="flex gap-2 ">
              {productInfo.colors.map((color, index) => (
                <p
                  key={index}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedColor === color && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </p>
              ))}
            </div>
          </div>
        )}

        {productInfo.sizes.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-base-medium text-grey-2">Sizes:</p>
            <div className="flex gap-2 ">
              {productInfo.sizes.map((size, index) => (
                <p
                  key={index}
                  className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                    selectedSize === size && "bg-black text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <p className="text-base-medium text-grey-2">Personas:</p>
          <div className="flex gap-4 items-center select-none">
            <MinusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p className="text-body-bold">{quantity}</p>
            <PlusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>
        </div>
        <button
          className="outline text-sm py-2 px-2 w-40 rounded-lg hover:bg-verde-fuerte hover:text-white transition-all duration-300 ease-in-out"
          onClick={() => {
            if (selectedDate) {
              cart.addItem({
                item: productInfo,
                quantity,
                color: selectedColor,
                size: selectedSize,
                dateAdded: selectedDate,
              });
              setTimeout(() => {
                router.push("/cart");
              }, 1000);
            }
          }}
        >
          Add to Cart
        </button>
      </div>
      <div className="sm:ml-4 mb-2">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-lg border"
          selectedDateStyle="bg-verde-claro text-black"
        />
        {selectedDate && (
          <p className="justify-center items-center flex">
            <div className="bg-verde-claro rounded-md shadow-lg border-black border-2 py-1 px-1">
              Fecha seleccionada: {selectedDate.toLocaleDateString()}
            </div>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
