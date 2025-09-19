"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const galleryData = [
  {
    id: 1,
    title: "Corporate Gala 2024",
    category: "Corporate Events",
    img: "assets/img/portfolio/1.jpg",
    description: "An elegant corporate gala featuring premium dining and networking opportunities."
  },
  {
    id: 2,
    title: "Wedding Celebration",
    category: "Weddings",
    img: "assets/img/portfolio/2.jpg",
    description: "A beautiful wedding celebration with custom decorations and premium catering."
  },
  {
    id: 3,
    title: "Product Launch",
    category: "Product Launches",
    img: "assets/img/portfolio/3.jpg",
    description: "An exclusive product launch event with media coverage and VIP guests."
  },
  {
    id: 4,
    title: "Charity Fundraiser",
    category: "Charity Events",
    img: "assets/img/portfolio/4.jpg",
    description: "A successful charity fundraiser with live entertainment and auctions."
  },
  {
    id: 5,
    title: "Birthday Celebration",
    category: "Private Events",
    img: "assets/img/portfolio/5.jpg",
    description: "An extravagant birthday celebration with custom themes and entertainment."
  }
];

const Gallery = () => {
  useEffect(() => {
    oridoUtilits.dataImage();
  }, []);

  const { setPortfolioModal, modalToggle } = useContext(context);

  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="gallery"
    >
      <div className="orido_tm_portfolio w-full h-auto clear-both float-left bg-[#FFC448] px-0 pt-[120px] pb-[110px]">
        <div className="container">
          <div className="orido_tm_main_title w-full float-left">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                Our Event
                <br />
                Gallery
              </span>
            </h3>
          </div>
          <div className="portfolio_list w-full h-auto clear-both float-left mt-[65px] relative">
            <Swiper
              {...sliderProps.project}
              className="owl-carousel gallery_zoom relative"
            >
              {galleryData.map((item) => (
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

export default Gallery;
