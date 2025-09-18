const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header fixed top-0 left-0 right-0 z-[10] py-[25px] px-[150px] transition-all duration-300 middle:hidden">
      <div className="header_in w-full flex items-center justify-between">
        <div className="logo">
          <a href="#">
            <img
              className="max-w-[170px] max-h-[90px]"
              src={`assets/img/logo/${dark ? "light" : "logo"}.png`}
              alt
            />
          </a>
        </div>
        <div className="menu relative">
          {/* Navigation links removed */}
        </div>
        <div className="button">
          {/* Purchase Now button removed */}
        </div>
      </div>
    </div>
  );
};
export default Header;
