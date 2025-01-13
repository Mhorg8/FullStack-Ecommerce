import { footerLink, HeaderData, ProductType } from "@/types";
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

export const quickLinksData: footerLink[] = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
];

export const categoriesData: footerLink[] = [
  { title: "Men's Fashion", href: "/men-s-fashion" },
  { title: "Women's Fashion", href: "/women-s-fashion" },
  { title: "Kids", href: "/kids" },
  { title: "Tshirt", href: "/t-shirt" },
  { title: "Accessories", href: "/accessories" },
  { title: "Others", href: "/others" },
];
