import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "./ProductCard";
import { getProducts } from "../utils/getProducts";
import { useEffect, useState } from "react";

function MySwiper() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function get() {
      const products = await getProducts();
      setProducts(products);
    }
    get();
  }, []);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      space={20}
      slide={3}
      navigation
      // onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: {
          slide: 1, 
          space: 10,
        },
        768: {
          slide: 2,
          space: 15,
        },
        1024: {
          slide: 3, 
          space: 20,
        },
      }}
    >
      {products &&
        products?.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex justify-center">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default MySwiper;
