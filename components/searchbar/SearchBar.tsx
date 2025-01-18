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
import SearchResultMessage from "./SearchResultMessage";
import SearchLoader from "./SearchLoader";
import SearchInput from "./SearchInput";
import SearchbarItem from "./SearchbarItem";

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
                  <SearchbarItem
                    key={product._id}
                    product={product}
                    setShowResult={setShowSearch}
                  />
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
