import { Product } from "@/sanity.types";
import React from "react";
import { Accordion } from "../ui/accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const ProductCharacteristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center justify-between w-full">
          <span>{product.name}: Characteristics</span>
          <ChevronDown className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <p className="flex items-center justify-between">
            Brand: <span className="font-semibold tracking-wide">Unknown</span>
          </p>
          <p className="flex items-center justify-between">
            Collection:{" "}
            <span className="font-semibold tracking-wide">24512</span>
          </p>
          <p className="flex items-center justify-between">
            Type:{" "}
            <span className="font-semibold tracking-wide">
              {product.variant}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Stock:{" "}
            <span className="font-semibold tracking-wide">
              {product.stock ? "Available" : "Out of Stock"}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Intro:{" "}
            <span className="font-semibold tracking-wide">{product.intro}</span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
