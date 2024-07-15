import { useState } from "react";

export default function SearchBar({ onSearch, placeholder = "Search..." }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
        className="input input-bordered w-full"
      />
    </div>
  );
}
