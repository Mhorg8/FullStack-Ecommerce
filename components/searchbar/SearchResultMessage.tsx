import { Search } from "lucide-react";
import React from "react";

interface Props {
  search: string;
  loading: boolean;
}

const SearchResultMessage = ({ search, loading }: Props) => {
  return (
    <div className="text-center py-10 font-semibold tracking-wide">
      {search && !loading ? (
        <p>
          Nothing match with the keyword{" "}
          <span className="underline text-red-600 font-semibold">{search}</span>
          . please try something else.{" "}
        </p>
      ) : (
        <p className="text-green-600 flex items-center justify-center gap-1">
          <Search className="w-5 h-5" /> Search and explore you product from
          tulus
        </p>
      )}
    </div>
  );
};

export default SearchResultMessage;
