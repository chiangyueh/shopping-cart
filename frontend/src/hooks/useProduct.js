import { useEffect, useState } from "react";

const useProduct = (getImg) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(()=>{
    getImg().then(res=>{
        setResult(res)
        setLoading(false)
    })
  },[loading])
  return result
};

export default useProduct;
