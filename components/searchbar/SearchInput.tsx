"use client";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput = ({ search, setSearch }: Props) => {
  return (
    <form className="relative" onSubmit={(e) => e.preventDefault()}>
      <Input
        placeholder="Search your product here..."
        className="flex-1 rounded-md py-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <X
          onClick={() => setSearch("")}
          className="w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect"
        />
      )}

      <button
        className={`absolute right-0 top-0  w-10 h-full flex items-center justify-center rounded-e-md hover:bg-darkColor hover:text-white ${search.length >= 3 ? "bg-darkColor text-white" : "bg-darkColor/10"}`}
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
