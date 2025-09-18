const About = () => {
  return (
    <div
      className="orido_tm_section w-full h-auto clear-both float-left"
      id="about"
    >
      <div className="orido_tm_about w-full h-auto clear-both float-left bg-[#6244C5] px-0 pt-[180px] pb-[120px] mb-[120px]">
        <div className="about_in w-full h-auto max-w-[1070px] mx-auto my-0 flex items-center">
          <div className="left w-1/2 pr-[50px]">
            <div className="box about_text bg-[#FFC448] inline-block overflow-hidden pb-[85px] relative">
              <h3 className="year font-oswald tracking-[-4px] font-extrabold text-[395px] relative mr-[-30px] mt-[-95px] text-[#6244C5] leading-[1]">
                10
              </h3>
              <span className="experience text-[24px] pl-[50px] mt-[6px] inline-block">
                Years of Experience
              </span>
              <h3 className="name text-[80px] text-[#6244C5] font-bold tracking-[-4px] leading-[1] uppercase absolute bottom-[-30px] left-[-20px] w-[300%]">
                John Smith
              </h3>
            </div>
          </div>
          <div className="right w-1/2 relative">
            <span className="element absolute top-0 right-full mr-[15px] mt-[-20px]">
              <img
                className="svg w-[80px] h-[80px] text-transparent"
                src="assets/img/svg/element.svg"
                alt
              />
            </span>
            <div className="orido_tm_main_title w-full float-left mb-[30px]">
              <h3 className="text-white tracking-[-2px] text-[56px] font-bold">
                <span className="relative">About Me</span>
              </h3>
            </div>
            <div className="text w-full float-left mb-[50px]">
              <p className="text-[rgba(255,255,255,.7)] font-light leading-[32px]">
                With 10 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
            </div>
            <div className="short w-full float-left flex items-center">
              <div className="orido_tm_boxed_button">
                <a href="assets/img/cv/1.jpg" download>
                  Download CV{" "}
                  <img className="svg" src="assets/img/svg/paper.svg" alt />
                </a>
              </div>
              <img
                className="max-w-[200px] max-h-[200px] ml-[50px]"
                src="assets/img/signature.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
