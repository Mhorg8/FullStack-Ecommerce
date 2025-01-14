"use client";
import { Search } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import SearchResultMessage from "../searchbar/SearchResultMessage";
import SearchLoader from "../searchbar/SearchLoader";
import SearchInput from "../searchbar/SearchInput";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import PriceView from "../PriceView";
import AddToCardButton from "../AddToCardButton";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    // check search state if it's null return
    if (!search) {
      setProducts([]);
      return;
    }
    // set is loading to true
    setLoading(true);

    // send request to sanity and get response
    try {
      const query = `*[_type == "product" && name match $search] | order(name asc)`;
      const params = { search: `${search}*` };
      const res = await client.fetch(query, params);

      // set response in products state
      setProducts(res);
    } catch (error) {
      console.error("Error fetching error", error);
    } finally {
      // set loading to false
      setLoading(false);
    }
  }, [search]);

  // fetch product every time search state change
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 3000);
    // return clear function
    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);

  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
      </DialogTrigger>

      <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden ">
        <DialogHeader>
          <DialogTitle className="mb-1">Product Searchbar</DialogTitle>
          {/* search input */}
          <SearchInput search={search} setSearch={setSearch} />
        </DialogHeader>

        {/* display content here */}
        <div className="w-full h-full overflow-y-scroll border border-darkColor rounded-md">
          <div>
            {loading ? (
              <SearchLoader />
            ) : products.length ? (
              // showing result of search
              <div>
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white overflow-hidden border-b last:border-b-0"
                  >
                    <div className="flex items-center p-1">
                      <Link
                        href={`/product/${product.slug?.current}`}
                        className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 border border-darkColor/20 rounded-md group"
                        onClick={() => setShowSearch(false)}
                      >
                        {product.images && (
                          <Image
                            src={urlFor(product.images[0]).url()}
                            alt={product.name || ""}
                            width={200}
                            height={200}
                            loading="eager"
                            className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                          />
                        )}
                      </Link>
                      {/* description */}
                      <div className="px-4 py-2 flex-grow">
                        <Link
                          href={`/product/${product.slug?.current}`}
                          onClick={() => setShowSearch(false)}
                        >
                          <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {product.intro}
                          </p>
                        </Link>

                        <PriceView
                          price={product.price}
                          discount={product.discount}
                          className="md:text-lg"
                        />
                      </div>
                      <div className="w-60 mt-1">
                        <AddToCardButton product={product} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // if result was false display correct error message
              <SearchResultMessage search={search} loading />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
