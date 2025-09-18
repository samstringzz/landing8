"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const productsData = [
  {
    id: 1,
    title: "Sneakers",
    price: "₦150",
    rating: "⭐⭐⭐⭐⭐",
    img: "assets/img/portfolio/1.jpg",
    description: "Premium quality sneakers for all occasions."
  },
  {
    id: 2,
    title: "Wrist Watch",
    price: "₦200",
    rating: "⭐⭐⭐⭐⭐",
    img: "assets/img/portfolio/2.jpg",
    description: "Elegant wrist watch with modern design."
  },
  {
    id: 3,
    title: "Green Handbag",
    price: "₦180",
    rating: "⭐⭐⭐⭐⭐",
    img: "assets/img/portfolio/3.jpg",
    description: "Stylish green handbag for everyday use."
  }
];

const Products = () => {
  useEffect(() => {
    oridoUtilits.dataImage();
  }, []);

  const { setPortfolioModal, modalToggle } = useContext(context);

  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="products"
    >
      <div className="orido_tm_portfolio w-full h-auto clear-both float-left bg-[#fafafb] px-0 pt-[120px] pb-[110px]">
        <div className="container">
          <div className="orido_tm_main_title w-full float-left">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                Our
                <br />
                Products
              </span>
            </h3>
          </div>
          <div className="portfolio_list w-full h-auto clear-both float-left mt-[65px] relative">
            <Swiper
              {...sliderProps.project}
              className="owl-carousel gallery_zoom relative"
            >
              {productsData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="list_inner">
                    <div className="image relative overflow-hidden">
                      <img
                        className="opacity-0 relative min-w-full"
                        src="assets/img/thumbs/37-40.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url={item.img}
                      />
                    </div>
                    <div className="details w-full float-left mt-[30px]">
                      <span className="category text-[20px] inline-block mb-[13px]">
                        {item.price}
                      </span>
                      <h3 className="title text-[32px] tracking-[-1px] font-medium">
                        <span className="inline-block relative">{item.title}</span>
                      </h3>
                      <p className="text-[16px] text-[#666] mt-[10px]">
                        {item.description}
                      </p>
                      <div className="rating mt-[10px]">
                        <span className="text-[14px]">{item.rating}</span>
                      </div>
                    </div>
                    <a
                      className="orido_tm_full_link absolute inset-0 z-[5] zoom"
                      href={item.img}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <a className="prev_button" href="#">
              <img
                className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[-1px]"
                src="assets/img/svg/prev.svg"
                alt
              />
            </a>
            <a className="next_button" href="#">
              <img
                className="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[1px]"
                src="assets/img/svg/next.svg"
                alt
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;