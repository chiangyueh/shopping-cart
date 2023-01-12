import { getImg } from "./api/axios";
import Cart from "./component/Cart";
import Product from "./component/Product";
import useProduct from "./hooks/useProduct";
const App = () => {
  const data = useProduct(getImg);
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="basis-2/3 relative overflow-y-scroll">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FF5500"
              fillOpacity="1"
              d="M0,192L30,197.3C60,203,120,213,180,202.7C240,192,300,160,360,160C420,160,480,192,540,181.3C600,171,660,117,720,96C780,75,840,85,900,80C960,75,1020,53,1080,58.7C1140,64,1200,96,1260,101.3C1320,107,1380,85,1410,74.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
          <div className="min-w-[476px] w-[80%] h-[80%] m-auto flex flex-col gap-5 absolute top-0">
            <span className="text-6xl text-white mb-28">請選擇商品</span>
            {data
              ? data.map((product) => (
                  <Product product={product} key={product._id}></Product>
                ))
              : ""}
          </div>
        </div>
        <div className="basis-1/3 bg-[#f8f8f8] overflow-y-scroll">
          <Cart></Cart>
        </div>
      </div>
    </>
  );
};

export default App;
