import { useEffect, useState } from "react";
const useProductDetails = (itemId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://secret-temple-83800.herokuapp.com/product/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [itemId]);
  return [product,setProduct]
};

export default useProductDetails;