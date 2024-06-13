"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Alerta2 from "./Alerta2";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString()
  );
  const [hotelName, setHotelName] = useState("");

  const handleHotelNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHotelName(event.target.value);
  };
  const handlePickupTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTime = event.target.value;
    if (validatePickupTime(newTime)) {
      setPickupTime(newTime);
    } else {
      toast.error("Elegir un horario de recogida válido, de 8:00 a 20:00.");
    }
  };
  const [childrenQuantity, setChildrenQuantity] = useState<number>(0);
  const [adultQuantity, setAdultQuantity] = useState<number>(0);
  const cart = useCart();
  const handleDateSelect = (date: Date | undefined, event?: any) => {
    if (date) {
      setSelectedDate(date.toISOString());
    }
  };
  const [pickupTime, setPickupTime] = useState("");

  const validatePickupTime = (time: string) => {
    const timeFormat = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    if (!time.match(timeFormat)) {
      return false;
    }

    const [hours, minutes] = time.split(":").map(Number);
    if (hours < 8 || hours > 20 || (hours === 20 && minutes > 0)) {
      return false;
    }

    return true;
  };
  const router = useRouter();
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="max-w-[400px] flex flex-col gap-4 sm:mr-16 py-2">
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
        <div className="flex gap-2 cursor-pointer">
          <p className="text-base-medium text-grey-2">Adultos:</p>
          <div className="flex gap-4 items-center select-none">
            <MinusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() =>
                adultQuantity > 0 && setAdultQuantity(adultQuantity - 1)
              }
            />
            <p className="text-body-bold">{adultQuantity}</p>
            <PlusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => setAdultQuantity(adultQuantity + 1)}
            />
          </div>
        </div>
        <div
          className="flex gap-2 cursor-pointer relative"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <p className="text-base-medium text-grey-2">Niños: (4-12 años)</p>
          <div className="flex gap-4 items-center select-none">
            <MinusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() =>
                childrenQuantity > 0 &&
                setChildrenQuantity(childrenQuantity - 1)
              }
            />
            <p className="text-body-bold">{childrenQuantity}</p>
            <PlusCircle
              className="hover:text-red-1 cursor-pointer"
              onClick={() => setChildrenQuantity(childrenQuantity + 1)}
            />
          </div>
        </div>
        <button
          className="outline text-sm py-2 px-2 w-40 rounded-lg hover:bg-verde-fuerte hover:text-white transition-all duration-300 ease-in-out"
          onClick={() => {
            if (selectedDate && hotelName && hotelName.length > 5) {
              const newItem = {
                item: productInfo,
                quantity,
                childrenQuantity,
                adultQuantity,
                color: selectedColor ? selectedColor : undefined,
                size: selectedSize ? selectedSize : undefined,
                dateAdded: new Date(selectedDate).toISOString(),
                hotelName: hotelName,
              };
              console.log("Cart contents before adding item:", cart.cartItems);
              cart.addItem(newItem);
              console.log("Item added:", newItem);
              console.log("Cart contents after adding item:", cart.cartItems);
              setTimeout(() => {
                router.push("/cart");
              }, 1000);
            } else {
              toast.error(
                "Por favor, ingrese el nombre del hotel antes de agregar al carrito."
              );
            }
          }}
        >
          Add to Cart
        </button>
      </div>
      <div className="sm:ml-4 mb-2">
        <Calendar
          mode="single"
          selected={new Date(selectedDate)}
          onSelect={handleDateSelect}
          className="rounded-lg border items-center flex justify-center"
          selectedDateStyle="bg-verde-claro text-black"
          disabled={(date) => {
            if (
              productInfo.title === "NADO CON TIBURÓN BALLENA" &&
              date.getDate() === 30
            ) {
              return true;
            }
            // Available every day for specific product
            if (
              productInfo.title ===
                "YATE PRIVADO (precio por yate 1-8 personas)" ||
              productInfo.title === "TULUM + COBA + CENOTE + ALDEA MAYA" ||
              productInfo.title === "TULUM + CENOTE" ||
              productInfo.title === "SIAN KA'AN" ||
              productInfo.title === "CHICHÉN-ITZÁ" ||
              productInfo.title === "Tours en CENOTES" ||
              productInfo.title === "ISLA MUJERES" ||
              productInfo.title === "ISLA MUJERES + ISLA CONTOY" ||
              productInfo.title === "COZUMEL SNORKEL El Cielito" ||
              productInfo.title === "NADO CON DELFINES"
            ) {
              return false;
            }
            // Available only on Monday to Friday for specific product
            if (
              productInfo.title === "TULUM + AKUMAL(TORTUGAS) + CENOTE" ||
              (productInfo.title === "ISLA HOLBOX" &&
                (date.getDay() === 0 || date.getDay() === 6))
            ) {
              return true;
            }
            // Available only on Monday, Wednesday, and Friday for specific product
            if (
              productInfo.title === "TULUM + AKUMAL(TORTUGAS)" &&
              !(
                date.getDay() === 1 ||
                date.getDay() === 3 ||
                date.getDay() === 5
              )
            ) {
              return true;
            }
            // Available only on Tuesday, Thursday, and Saturday for specific products
            if (
              productInfo.title === "TULUM + CENOTE + YALKU(LAGUNA)" ||
              productInfo.title === "BACALAR"
            ) {
              return !(
                date.getDay() === 2 ||
                date.getDay() === 4 ||
                date.getDay() === 6
              );
            }
            if (
              productInfo.title === "LAS COLORADAS + RÍO LAGARTOS" &&
              !(date.getDay() === 2 || date.getDay() === 6)
            ) {
              return true;
            }
            // For all other products, disable Saturday and Sunday
            if (date.getDay() === 0 || date.getDay() === 6) {
              return false;
            }
            return false;
          }}
        />
        <div className="flex flex-col items-center justify-center space-y-4">
          {selectedDate && (
            <div className="justify-center items-center flex">
              <div className="bg-verde-claro rounded-md shadow-lg border-black border-2 py-1 px-1">
                Fecha seleccionada:{" "}
                {new Date(selectedDate).toLocaleDateString()}
              </div>
            </div>
          )}
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={hotelName}
              onChange={handleHotelNameChange}
              placeholder="Nombre del hotel"
              className="mt-2 p-2 rounded-lg border shadow-md"
              required
              minLength={5}
              maxLength={15}
            />
          </div>
          <div className="text-center text-small-bold">
            el Pick-up desde el Hotel <br /> se coordinará por E-mail o
            Whatsapp.
          </div>
          <Alerta2 />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
