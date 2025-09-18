const Home = ({ dark }) => {
  return (
    <div
      className="orido_tm_hero w-full min-h-[100vh] relative float-left"
      id="home"
    >
      <div className="container min-h-[100vh]">
        <div className="content min-h-[100vh] relative flex items-center justify-between">
          <div className="details w-1/2 pr-[50px]">
            <div className="short mb-[32px]">
              <h3 className="text-[80px] font-medium tracking-[-4px] mb-[11px]">
                Hi, I'm Alika Maya{" "}
                <img
                  className="svg w-[45px] h-[45px] relative left-[-7px]"
                  src="assets/img/svg/hi.svg"
                  alt
                />
              </h3>
              <span className="job inline-block relative text-[24px] pl-[97px]">
                Empowering Lives Through Style & Inspiration
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="orido_tm_down absolute left-[150px] bottom-[45px]">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`assets/img/svg/${
              dark ? "down_button_light" : "down_button"
            }.svg`}
            alt
          />
        </a>
      </div>
      <div className="avatar absolute w-1/2 right-0 bottom-[-8px]">
        <div className="img relative inline-block">
          <img
            className="max-w-[700px] max-h-[760px]"
            src={`assets/img/hero/${dark ? "2" : "1"}.jpg`}
            alt
          />
          <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img
                className="anim_circle"
                src="assets/img/hero/welcome.png"
                alt
              />
              <img className="svg" src="assets/img/svg/play.svg" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
