import FormLogin from "./FormLogin";
import LogoKemenag from "../assets/diktis01.png";

const HeroLoginPage = () => {
  return (
    <>
      <div className="flex py-8 px-6 text-white">
        <div>
          <img
            className="w-[72px]"
            src={LogoKemenag}
            alt="logo kementrian agama RI"
          />
        </div>
        <div className=" w-[290px] ">
          <h1 className="text-2xl font-semibold">KEMENTRIAN AGAMA RI</h1>
          <p className="text-xs font-medium">
            Direktoran Jenderal Pendidikan Islam <br />
            Direktorat Pendidikan Tinggi Keagamaan Islam
          </p>
        </div>
      </div>
      <div className="px-16 flex justify-center">
        <div className="py-5 text-white flex-1 flex-col gap-5 justify-start flex">
          <h2 className="text-[34px] font-semibold">
            Pengajuan program studi baru
          </h2>
          <h4 className="text-2xl font-normal">Mudah dan cepat!</h4>
          <button className="text-sm font-semibold px-[22px] py-[7px] w-fit bg-white text-black">
            Ayo Daftar!
          </button>
        </div>
        <FormLogin />
      </div>
    </>
  );
};

export default HeroLoginPage;
