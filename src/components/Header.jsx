import LogoKemenag from "../assets/diktis01.png";
import blurOn from "../assets/blur_on.svg";
import searchIcon from "../assets/search (1).svg";
import cancelIcon from "../assets/cancel.svg";
import bellIcon from "../assets/Bell.svg";
import avatarIcon from "../assets/Avatar.svg";

const Header = () => {
  return (
    <header className="flex bg-[#f4f5fa]">
      <div className="flex w-[240px] gap-2 mx-4 items-center ">
        <div>
          <img
            className="w-[64px]"
            src={LogoKemenag}
            alt="logo kementrian agama RI"
          />
        </div>
        <div className=" w-[132px] ">
          <h1 className="text-sm font-semibold">DIKTIS KEMENAG</h1>
          <p className="text-xs font-normal text-[#969696]">
            Ditjen Pendidikan Islam <br />
            Direktorat PTKI
          </p>
        </div>
      </div>
      <div className="flex w-full gap-2 py-4 items-center">
        <div className="w-14 h-14 bg-white rounded-lg p-3">
          <img src={blurOn} alt="blur" />
        </div>
        <div className="flex flex-col gap-2 pl-[14px] py-1">
          <p className="text-xl font-medium">Subdit Akademik Direktorat PTKI</p>
          <p className="text-[#969696]">Direktorat Jenderal Pendidikan Islam</p>
        </div>
        <div className="flex gap-2 items-center pl-[14px]">
          <div className="bg-white w-[688px] rounded-[48px] p-2 flex items-center">
            <div className="flex p-3 gap-2">
              <img src={searchIcon} alt="search" />
              <input
                className="w-[600px] h-6 text-[#969696] outline-none"
                placeholder="Pencarian"
              />
            </div>
            <div className="pr-3 px-[10px]">
              <img src={cancelIcon} alt="cancle" />
            </div>
          </div>
        </div>
        <div className="mr-6 px-1  flex-auto flex items-center justify-end">
          <div className="w-12 h-10 flex justify-center items-center">
            <img src={bellIcon} alt="bell" />
          </div>
          <img src={avatarIcon} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
