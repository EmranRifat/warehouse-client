import { useEffect, useState } from "react";

const useProducts = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://ware-house-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};
export default useProducts;
