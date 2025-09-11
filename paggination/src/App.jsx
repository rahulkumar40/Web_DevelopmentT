import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      if (data && data.products) setProducts(data.products);
      else alert("Data not found");
    } catch (e) {
      console.log(e);
      alert("Error in fetching data");
    }
  };
  const array = new Array(Math.ceil(products.length / 10));
  array.fill(null);
  useEffect(() => {
    fetchData();
  }, []);

  const rightPage = () => {
    if (page <= array.length) setPage(page + 1);
  };
  const leftPage = () => {
    if (page > 0 && page <= array.length) setPage(page - 1);
  };
  return (
    <>
      {products.length > 0 && (
        <div className="parent_product">
          {products.slice(page * 10 - 10, page * 10).map((item) => {
            return (
              <div key={item.id} className="product_items">
                <p className="product_title">{item.title}</p>
                <div className="product_image">
                  <img
                    className="product_image_container"
                    src={item.thumbnail}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="paggination_page_number">
          <span onClick={leftPage} style={{display:page==0? 'none':"inline-block"}}>left</span>
          {array.map((_, i) => {
            return (
              <span
                onClick={() => setPage(i + 1)}
                className="paggination_number"
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span onClick={rightPage} style={{display:page>=array.length ? 'none':"inline-block"}} >Right</span>
        </div>
      )}
    </>
  );
}

export default App;
