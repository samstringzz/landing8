"use client";
import { context } from "@/context/context";
import { oridoUtilits } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Newsletter = () => {
  useEffect(() => {
    oridoUtilits.dataImage();
  }, []);

  const { setPortfolioModal, modalToggle } = useContext(context);

  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="orido_tm_portfolio w-full h-auto clear-both float-left bg-main-color px-0 pt-[120px] pb-[110px] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-[50px] left-[50px]">
          <div className="w-[20px] h-[20px] bg-[#FFC448] rounded-full mb-[10px]"></div>
          <div className="w-[40px] h-[40px] border-2 border-[#FFC448] rounded-full mb-[20px]"></div>
          <div className="w-[15px] h-[15px] border border-white rounded-full mb-[5px]"></div>
          <div className="w-[12px] h-[12px] border border-gray-400 rounded-full"></div>
        </div>
        
        <div className="absolute top-[80px] right-[80px]">
          <div className="w-[60px] h-[60px] border-2 border-[#FFC448] rounded-full opacity-50"></div>
        </div>
        
        <div className="absolute top-[200px] left-[100px]">
          <div className="w-[0] h-[0] border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-black"></div>
        </div>
        
        <div className="absolute bottom-[100px] left-[80px]">
          <svg className="w-[80px] h-[40px] text-gray-400" viewBox="0 0 100 50">
            <path d="M10,25 Q30,10 50,25 T90,25" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="contact_content flex items-center justify-between">
            {/* Left Content */}
            <div className="left_content w-1/2 pr-[50px]">
              <div className="orido_tm_main_title w-full float-left mb-[40px]">
                <h3 className="tracking-[-2px] text-[56px] font-bold text-white">
                  <span className="relative">
                    Let's create
                    <br />
                    something amazing
                  </span>
                </h3>
              </div>
              
              <div className="text mb-[40px]">
                <p className="text-white text-[18px] leading-[28px] max-w-[500px]">
                  Ready to plan your next unforgettable event? Get in touch with our team and let's bring your vision to life with our premium event planning services.
                </p>
              </div>
              
              <div className="buttons mb-[60px]">
                <div className="orido_tm_boxed_button">
                  <a className="anchor bg-[#FFC448] text-main-color px-[40px] py-[15px] rounded-[25px] font-semibold text-[16px] hover:bg-[#ffb733] transition-all duration-300" href="#contact">
                    Get In Touch{" "}
                    <img className="svg ml-[10px]" src="assets/img/svg/send.svg" alt />
                  </a>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="contact_info">
                <div className="contact_item mb-[20px]">
                  <span className="text-gray-300 text-[14px] block mb-[5px]">Call:</span>
                  <span className="text-white text-[20px] font-bold">+1 (234) 567 890</span>
                </div>
                <div className="contact_item">
                  <span className="text-gray-300 text-[14px] block mb-[5px]">Email:</span>
                  <span className="text-white text-[20px] font-bold">info@xclusive.com</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Contact Form */}
            <div className="right_content w-1/2 pl-[50px]">
              <div className="contact_form">
                <form className="space-y-[20px]">
                  <div className="form_group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full py-[15px] px-[20px] text-[16px] bg-white text-gray-900 rounded-[8px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FFC448] placeholder-gray-500"
                      required
                    />
                  </div>
                  
                  <div className="form_group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full py-[15px] px-[20px] text-[16px] bg-white text-gray-900 rounded-[8px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FFC448] placeholder-gray-500"
                      required
                    />
                  </div>
                  
                  <div className="form_group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full py-[15px] px-[20px] text-[16px] bg-white text-gray-900 rounded-[8px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FFC448] placeholder-gray-500"
                      required
                    />
                  </div>
                  
                  <div className="form_group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      className="w-full py-[15px] px-[20px] text-[16px] bg-white text-gray-900 rounded-[8px] border-0 focus:outline-none focus:ring-2 focus:ring-[#FFC448] placeholder-gray-500 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form_group">
                    <button
                      type="submit"
                      className="w-full bg-[#FFC448] text-main-color py-[15px] px-[30px] rounded-[8px] font-semibold text-[16px] hover:bg-[#ffb733] transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                
                {/* Social Media Section */}
                <div className="social_section mt-[40px]">
                  <div className="orido_tm_follow flex items-center">
                    <span className="text-[16px] font-medium text-gray-300 mr-[20px]">Follow me:</span>
                    <ul className="flex items-center">
                      <li className="mr-[20px]">
                        <a
                          className="inline-block relative w-[56px] h-[56px] bg-white rounded-full transition-all duration-300 hover:bg-[#FFC448]"
                          href="#"
                        >
                          <img
                            className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                            src="assets/img/svg/social/be.svg"
                            alt
                          />
                        </a>
                      </li>
                      <li className="mr-[20px]">
                        <a
                          className="inline-block relative w-[56px] h-[56px] bg-white rounded-full transition-all duration-300 hover:bg-[#FFC448]"
                          href="#"
                        >
                          <img
                            className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                            src="assets/img/svg/social/dribbble.svg"
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block relative w-[56px] h-[56px] bg-white rounded-full transition-all duration-300 hover:bg-[#FFC448]"
                          href="#"
                        >
                          <img
                            className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                            src="assets/img/svg/social/instagarm.svg"
                            alt
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;