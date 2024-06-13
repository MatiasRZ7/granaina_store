type CollectionType = {
  _id: string;
  title: string;
  products: number;
  image: string;
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  price: number;
  cost: number;
  sizes: [string];
  colors: [string];
  createdAt: string;
  updatedAt: string;
  metadata: {
    dateAdded: string;
    hotelName: string;
    pickupTime: string;
    childrenQuantity: number;
    adultQuantity: number;
  };
};

type UserType = {
  clerkId: string;
  wishlist: [string];
  createdAt: string;
  updatedAt: string;
};
type OrderType = {
  shippingAddress: Object;
  _id: string;
  customerClerkId: string;
  products: [OrderItemType];
  shippingRate: string;
  totalAmount: number;
  dateAdded: string;
  hotelName: string;
  childrenQuantity: number;
  adultQuantity: number;
};
type OrderItemType = {
  product: ProductType;
  dateAdded: string;
  hotelName: string;
  color: string;
  size: string;
  quantity: number;
  _id: string;
  childrenQuantity: number;
  adultQuantity: number;
};
