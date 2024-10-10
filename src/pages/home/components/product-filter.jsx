import { useEffect, useState } from "react";
import { getCategories } from "../services";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "antd";

export function ProductFilters() {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategories();
        setFilters(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    const filterQuery = event.target.value;
    if (filterQuery) {
      searchParams.set("filter", filterQuery);
    }
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const handleClearFilters = () => {
    searchParams.delete("filter");
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  return (
    <div className="flex gap-2">
      <select onChange={handleSubmit}>
        {filters.map((filter) => (
          <option value={filter.slug} key={filter.slug}>
            {filter.name}
          </option>
        ))}
      </select>

      {searchParams.get("filter") && (
        <Button onClick={handleClearFilters}>clear</Button>
      )}
    </div>
  );
}
