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

export const faqsData = [
  {
    question: "What services does Tulus offer ?",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus nullam porttitor interdum class penatibus orci",
  },
  {
    question: "How can i get support for Tulus products ?",
    answer:
      "Suscipit taciti risus vitae suspendisse praesent habitant. Nostra metus ",
  },
  {
    question: "Does Tulus offer training for its products ?",
    answer:
      "Amet nec amet dui porttitor; convallis non inceptos integer. Leo lobortis neque ",
  },
  {
    question: "What industries does Tulus serve ?",
    answer:
      "Suscipit gravida tortor in quam platea. Mus ex ante nostra aptent aliquam neque. Dui accumsan sapien maecenas, praesent scelerisque fermentum. Ligula luctus dis penatibus; auctor vel elementum gravida. Vivamus facilisis mi vestibulum, bibendum consectetur vehicula class.",
  },
];
