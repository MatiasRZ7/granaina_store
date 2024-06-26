import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

// CartItem is the type of the item in the cart
interface CartItem {
  item: ProductType;
  quantity: number;
  childrenQuantity?: number;
  color?: string;
  size?: string;
  dateAdded: string;
  hotelName?: string;
  pickupTime?: string;
  adultQuantity?: number;
}

// CartStore is the type of the store
interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  increaseChildrenQuantity: (idToIncrease: string) => void;
  decreaseChildrenQuantity: (idToDecrease: string) => void;
  increaseAdultQuantity: (idToIncrease: string) => void;
  decreaseAdultQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}
// create a store for the cart
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [], // initial value of the cart
      // function to add an item to the cart with the initial value of the cart
      addItem: (data: CartItem) => {
        const { item, quantity, childrenQuantity, adultQuantity, color, size, dateAdded, hotelName, pickupTime } = data;
        const currentItems = get().cartItems; // get the current items in the cart
        const isExisting = currentItems.find(
          (cartItem) => cartItem.item._id === item._id
        ); // check if the item is already in the cart
        if (isExisting) {
          return toast("Item already in cart", { icon: "🛒" });
        }
        // if the item is not in the cart, add it to the cart
        const newItem = {
          item,
          quantity,
          color,
          childrenQuantity,
          adultQuantity,
          size,
          dateAdded,
          hotelName,
          pickupTime,
        };
         // Check if dateAdded is defined
         if (newItem.dateAdded) {
          console.log("dateAdded is of type:", typeof newItem.dateAdded);
          console.log(newItem.dateAdded);
        } else {
          console.log("dateAdded is not defined");
        }
        set({
          cartItems: [
            // ...currentItems means to keep the current items in the cart
            ...currentItems,
            // add the new item to the cart
            newItem,
          ],
        });
        toast.success("Item added to cart", { icon: "🛒" });
      },
      // function to remove an item from the cart
      removeItem: (idToRemove: String) => {
        // filter the items in the cart to remove the item with the given id
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );
        // set the new items in the cart
        set({
          cartItems: newCartItems,
        });

        toast.success("Item removed from cart");
      },
      increaseQuantity: (idToIncrease: String) => {
        // increase the quantity of the item with the given id
        const newCartItems = get().cartItems.map((cartItem) =>
          // if the item id is the same as the given id, increase the quantity
          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Item quantity increased");
      },
      decreaseQuantity: (idToDecrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) }
            : cartItem
        );
        set({ cartItems: newCartItems.filter(item => item.quantity > 0) });
        toast.success("Item quantity decreased");
      },
      increaseChildrenQuantity: (idToIncrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, childrenQuantity: (cartItem.childrenQuantity || 0) + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Children quantity increased");
      },
      decreaseChildrenQuantity: (idToDecrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, childrenQuantity: Math.max(0, (cartItem.childrenQuantity || 0) - 1) }
            : cartItem
        );
        set({ cartItems: newCartItems.filter(item => item.quantity > 0 || (item.childrenQuantity || 0) > 0) });
        toast.success("Children quantity decreased");
      },
      increaseAdultQuantity: (idToIncrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, adultQuantity: (cartItem.adultQuantity || 0) + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Adult quantity increased");
      },
      decreaseAdultQuantity: (idToDecrease: String) => {
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, adultQuantity: Math.max(0, (cartItem.adultQuantity || 0) - 1) }
            : cartItem
        );
        set({ cartItems: newCartItems.filter(item => item.quantity > 0 || (item.childrenQuantity || 0) > 0 || (item.adultQuantity || 0) > 0) });
        toast.success("Adult quantity decreased");
      },
      // clear the cart
      clearCart: () => {
        set({ cartItems: [] });
      },
      getTotal: () => {
        return get().cartItems.reduce(
          (acc, cartItem) => acc + cartItem.item.price * (cartItem.adultQuantity || 0) + (cartItem.childrenQuantity || 0) * (cartItem.item.price - 10),
          0
        );
      },
    }),
    // store the cart in the local storage
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
