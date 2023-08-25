import { useEffect, useState } from "react";
import closeIcon from "../assets/Close.svg";
import exclamationIcon from "../assets/exclamation circle.svg";
import axios from "axios";

const PopUpUsulanProdiBaru = () => {
  const [prodiList, setProdiList] = useState([]);
  const [jenjang, setJenjang] = useState("");

  useEffect(() => {
    const getProdiData = async () => {
      try {
        const { data } = await axios.get(
          `http://api17002.prodidikti.halotec.my.id/api/prodi-master/jenjang/${jenjang}`
        );
        setProdiList(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProdiData();
  }, [jenjang]);

  const closePopUp = () => {
    const popUpUsulanProdi = document.getElementById("popUpUsulanProdi");
    popUpUsulanProdi.classList.remove("flex");
    popUpUsulanProdi.classList.add("hidden");
  };

  return (
    <div
      id="popUpUsulanProdi"
      className=" hidden justify-center items-center fixed left-0 top-0 w-full h-full bg-[#22222246]"
    >
      <div className="z-10 w-[1000px] bg-white  rounded-md">
        <div className="flex justify-between p-5  pb-5 border-b-2">
          <h1 className="text-[#3A3541DE] font-medium text-xl">
            Formulir Usulan Profi Baru
          </h1>
          <img
            className="hover:cursor-pointer"
            onClick={closePopUp}
            src={closeIcon}
            alt="close"
          />
        </div>
        <div className="p-4 border-2 gap-2 mx-10 mt-[30px] mb-10 border-[#FF9800] flex items-start bg-[#FFF3E0] rounded-lg">
          <img src={exclamationIcon} alt="exclamation" />
          <div className="">
            <h3 className="font-semibold text-[#263238]">Info</h3>
            <p className="text-justify text-sm text-[#546e7a]">
              Prodi yang diusulkan harus didaftarkan melalui form ini dan
              melengkapi seluruh dokumen yang disyaratkan. Pastikan sudah
              membaca Petunjuk Teknis terkait prasyarat usulan Prodi kaitannya
              dengan Prodi yang eksisting. Jika tidak memenuhi prasyarat
              tersebut, maka usulan akan dipending atau dikembalikan.
            </p>
          </div>
        </div>
        <form className="mx-10 flex flex-col gap-4 mb-5">
          <div className="flex justify-between">
            <label htmlFor="jenjang" className="py-4">
              Jenjang
            </label>
            <select
              name="jenjang"
              id="jenjang"
              className="text-sm w-3/4 text-[#3A3541DE] border-2 p-4 rounded-md"
              onChange={(e) => setJenjang(e.target.value)}
            >
              <option className="text-[#3A354161]">Pilih Jenjang</option>
              <option value="1">Sarjana</option>
              <option value="2">Magister</option>
              <option value="3">Doctor</option>
            </select>
          </div>
          <div className="flex justify-between">
            <label htmlFor="jenjang" className="py-4">
              Bidang Program Studi
            </label>
            <select
              name="jenjang"
              id="jenjang"
              className="text-sm w-3/4 text-[#3A3541DE] border-2 p-4 rounded-md"
            >
              <option className="text-[#3A354161]">Pilih Bidang Prodi</option>
              <option value="Agama">Agama</option>
            </select>
          </div>
          <div className="flex justify-between">
            <label htmlFor="jenjang" className="py-4">
              Kategori
            </label>
            <select
              name="jenjang"
              id="jenjang"
              className="text-sm w-3/4 text-[#3A3541DE] border-2 p-4 rounded-md"
            >
              <option className="text-[#3A354161]">
                Pilih Kategori/Kelompok
              </option>
              <option value="Ushuluddin">Ushuluddin</option>
              <option value="Syari'ah">{"Syari'ah"}</option>
              <option value="Adab">Adab</option>
              <option value="Dakwah">Dakwah</option>
              <option value="Tarbiyah">Tarbiyah</option>
              <option value="Ekonomi dan Bisnis Islam">
                Ekonomi dan Bisnis Islam
              </option>
              <option value="Psikologi">Psikologi</option>
            </select>
          </div>
          {/* Prodi */}
          <div className="flex justify-between">
            <label htmlFor="jenjang" className="py-4">
              Prodi
            </label>
            <select
              name="jenjang"
              id="jenjang"
              className="text-sm w-3/4 text-[#3A3541DE] border-2 p-4 rounded-md"
            >
              <option className="text-[#3A354161]">Pilih Prodi</option>
              {prodiList.map((prodi) => (
                <option key={prodi.id} value={prodi.namProdi}>
                  {prodi.namaProdi}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div className="border-t-2 py-5 flex justify-end gap-3 px-10">
          <button
            onClick={closePopUp}
            className="rounded-[5px] w-32 border-[1px] py-2 border-[#8A8D93] text-[#8A8D93] font-medium"
          >
            Batal
          </button>
          <button
            onClick={closePopUp}
            className="rounded-[5px] w-32 border-[1px] py-2 border-[#2684FF] text-white bg-[#2684FF] font-medium"
          >
            Daftar Prodi
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpUsulanProdiBaru;
