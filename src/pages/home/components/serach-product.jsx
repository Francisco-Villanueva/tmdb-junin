import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export function SearchProduct() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      searchParams.set("search", searchQuery);
    } else {
      searchParams.delete("search");
    }

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <form
      className="flex items-center relative bg-slate-100 text-gray-600 rounded-md p-2  w-64"
      onSubmit={handleSubmit}
    >
      <FaSearch className="absolute right-2" />
      <input
        type="text"
        className="bg-transparent  rounded-md pr-8 pl-2 py-1 outline-none text-sm w-full"
        placeholder="What are you looking for?"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
}
