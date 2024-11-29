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
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    get();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {products &&
        products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={`product: ${product.title}`}
                className="object-contain w-full h-[200px] rounded-t-md"
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default MySwiper;
