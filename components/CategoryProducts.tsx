"use client";
import { Category, Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ProductLoading from "./productGrid/ProductLoading";
import { AnimatePresence, motion } from "motion/react";
import NoProductsAvailable from "./productGrid/NoProductsAvailable";
import ProductList from "./productGrid/ProductList";

interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState<string>(slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setIsLoading(true);

      // Corrected query to fetch products belonging to a specific category
      const query = `*[_type == "product" && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`;

      const data = await client.fetch(query, { categorySlug });
      // Set the fetched products into the state
      setProducts(data);
    } catch (error) {
      console.error("Error on fetching products", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);

  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5 ">
      <div className="flex flex-col md:min-w-40 border gap-1 sticky top-20">
        {categories.map((category) => (
          <Button
            onClick={() => setCurrentSlug(category.slug?.current as string)}
            className={`bg-transparent border-0 rounded-none text-darkColor shadow-none hover:bg-darkColor/80 hover:text-white font-semibold hoverEffect border-b last:border-b-0 ${category.slug?.current === currentSlug && "bg-darkColor text-white border-darkColor"}`}
            key={category._id}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div className="w-full">
        {isLoading ? (
          <ProductLoading />
        ) : (
          <>
            {products.length ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductList products={products} />
                </motion.div>
              </AnimatePresence>
            ) : (
              <NoProductsAvailable selectedTab={currentSlug} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
