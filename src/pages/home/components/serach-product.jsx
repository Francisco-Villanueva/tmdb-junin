import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export function SearchProduct() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Valor para buscar: ", searchQuery);
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
