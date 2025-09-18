"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    job: "CEO, Tech Innovations Inc.",
    img: "assets/img/testimonials/1.jpg",
    text: "Xclusive transformed our corporate gala into an unforgettable experience. Their attention to detail, professional service, and creative vision exceeded all our expectations. Our guests are still talking about it months later!"
  },
  {
    id: 2,
    name: "Michael Chen",
    job: "Marketing Director, Global Brands",
    img: "assets/img/testimonials/2.jpg",
    text: "Working with Xclusive was a game-changer for our product launch event. Their innovative approach and flawless execution helped us create buzz that lasted for months. Highly recommended!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    job: "Event Coordinator, Luxury Hotels",
    img: "assets/img/testimonials/1.jpg",
    text: "Xclusive's team brought our wedding vision to life in ways we never imagined. Every detail was perfect, and they made our special day truly magical. We couldn't have asked for better partners."
  }
];

const Feedback = ({ dark }) => {
  useEffect(() => {
    oridoUtilits.dataImage();
  }, []);

  const { setPortfolioModal, modalToggle } = useContext(context);

  return (
    <div className="orido_tm_section w-full h-auto clear-both float-left">
      <div className="orido_tm_portfolio w-full h-auto clear-both float-left bg-[#fafafb] px-0 pt-[120px] pb-[110px]">
        <div className="container">
          <div className="orido_tm_main_title w-full float-left">
            <h3 className="tracking-[-2px] text-[56px] font-bold">
              <span className="relative">
                What Our
                <br />
                Clients Say
              </span>
            </h3>
          </div>
          <div className="portfolio_list w-full h-auto clear-both float-left mt-[65px] relative">
            <Swiper
              {...sliderProps.project}
              className="owl-carousel gallery_zoom relative"
            >
              {testimonialsData.map((item) => (
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
                      <span className="category text-[20px] inline-block mb-[13px] text-purple-600 font-bold">
                        Testimonial
                      </span>
                      <h3 className="title text-[32px] tracking-[-1px] font-medium">
                        <span className="inline-block relative">{item.name}</span>
                      </h3>
                      <p className="text-[16px] text-[#666] mt-[10px] mb-[15px]">
                        {item.text}
                      </p>
                      <div className="job text-[18px] text-[#888] font-medium">
                        {item.job}
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

export default Feedback;