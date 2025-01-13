import { HeaderData, ProductType } from "@/types";

export const headerData: HeaderData[] = [
  { title: "Home", href: "/" },
  { title: "Men", href: "/men-s-fashion" },
  { title: "Women", href: "/woman" },
  { title: "kids", href: "/kids" },
  { title: "new", href: "/new" },
  { title: "featured", href: "/featured" },
  { title: "gift", href: "/gift" },
];

export const productTypes: ProductType[] = [
  { title: "Tshirt", value: "tshirt" },
  { title: "Jacket", value: "jacket" },
  { title: "Pants", value: "pants" },
  { title: "Hoodie", value: "hoodie" },
  { title: "Short", value: "short" },
  { title: "Others", value: "others" },
];
