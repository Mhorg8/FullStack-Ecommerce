"use client";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import ProductCard from "../ProductCard";
import Loading from "../Loading";

interface Props {
  title: string;
}

const Slider = ({ title }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[] | []>([]);
  const query = `*[_type == "product"]`;

  useEffect(() => {
    const res = async () => {
      try {
        const data = await client.fetch(query);
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to get products at slider", error);
      } finally {
        setIsLoading(false);
      }
    };

    res();
  }, [query]);

  return (
    <Container className="py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center capitalize">
        {title}
      </h2>

      {isLoading && !products && <Loading />}
      <div className="mt-10 py-10 ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className=""
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard className="shadow-lg mb-10 " product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Slider;
