import exportIcon from "../assets/IosShare.svg";
import plusIcon from "../assets/Icon.svg";
import exclamationIcon from "../assets/exclamation circle.svg";
import exclamationRedIcon from "../assets/exclamation red circle.svg";
import threedot from "../assets/Vector.svg";

import PopUpUsulanProdiBaru from "./PopUpUsulanProdiBaru";

const CardDetail = () => {
  const popUpUsulanProdi = () => {
    const popUpUsulanProdi = document.getElementById("popUpUsulanProdi");
    popUpUsulanProdi.classList.remove("hidden");
    popUpUsulanProdi.classList.add("flex");
  };

  return (
    <>
      {/* pop up */}
      <PopUpUsulanProdiBaru />

      <div className="shadow-md rounded-md">
        <div className="px-5 pt-5 flex border-b-2 border-b-[#E0E0E0]">
          <p className="px-6 py-2 font-medium text-[#0085FF] border-b-[#0085ff] border-b-2">
            Program studi yang diusulkan
          </p>
          <p className="px-6 py-2 font-medium text-[#585757]">
            Prodi yang sudah dimiliki
          </p>
        </div>
        <div className="p-5">
          <p className="text-[#1c1c1c] text-2xl font-medium">
            Program Studi yang Diusulkan
          </p>
        </div>
        <div className="p-5 flex items-center justify-between">
          <button className="p-[7px] justify-center items-center rounded-md flex border-2 gap-2 border-[#8A8D93]">
            <img src={exportIcon} alt="export" />
            <span className="text-[#8A8D93]">Export Data</span>
          </button>
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="Pencarian"
              className=" text-[#3A354161] border-2 pl-[17px] py-2 pr-3 rounded-md w-[644px]"
            />
            <button
              onClick={popUpUsulanProdi}
              className="flex items-center gap-4 justify-between py-[7px] px-4  text-white bg-[#2684FF]"
            >
              <img src={plusIcon} alt="plus" />
              <span className="font-medium">
                Ajukan usulan program Studi Baru
              </span>
            </button>
          </div>
        </div>
        <div className="p-5 flex gap-4">
          <div className="p-4 border-2 gap-2 border-[#FF9800] flex items-start bg-[#FFF3E0] rounded-lg">
            <img src={exclamationIcon} alt="exclamation" />
            <div className="">
              <h3 className="font-semibold text-[#263238]">Info</h3>
              <p className="text-justify text-sm text-[#546e7a]">
                Prodi yang diusulkan adalah Daftar prodi yang diusulkan Lembaga.
                Usulan Prodi dapat dihapus selama belum dilengkapi dokumen, atau
                jika ingin dihapus maka dokumen harus 0. Untuk melanjutkan,
                pilih menu{" "}
                <span className="font-semibold">Lengkapi Dokumen.</span>
              </p>
            </div>
          </div>
          <div className="p-4 border-2 gap-2 border-[#F44336] flex items-start bg-[#FFEBEE] rounded-lg">
            <img src={exclamationRedIcon} alt="exclamation" />
            <div className="">
              <h3 className="font-semibold text-[#263238]">Info</h3>
              <p className="text-sm text-justify text-[#546e7a]">
                Untuk setiap pengajuan Usulan Prodi pada periode ini, dokumen
                kelengkapan harus segera dilengkapi sebelum tanggal:{" "}
                <span className="font-semibold"> 30 Mei 2021</span>
              </p>
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr className="w-full text-[#969696] bg-[#F9FAFC] font-medium text-base border-b-2">
              <th className="w-1/5">Nomor Registrasi</th>
              <th className="w-1/4">Nama Prodi</th>
              <th className="w-1/7">Jenjang</th>
              <th className="w-1/12">Tanggal diusulkan</th>
              <th className="w-1/12">Tanggal Konfirmasi</th>
              <th className="w-1/4">Status Progres</th>
              <th className="text-transparent mr-0 ">.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-justify text-[#585757] font-normal  border-b-2">
              <td>21042101023</td>
              <td>Ekonomi Syariah</td>
              <td>Sarjana</td>
              <td>2021-04-21</td>
              <td>2022-09-05</td>
              <td className="flex gap-[6px] rounded-md bg-[#FED3031A] px-[6px]">
                <span className="bg-[#FED303] rounded-full w-6 h-6 flex justify-center items-center">
                  1
                </span>{" "}
                <p className="font-medium text-sm">
                  Konfirmasi Dokumen dan Lengkap
                </p>
              </td>
              <td>
                <button>
                  <img src={threedot} alt="" />
                </button>
              </td>
            </tr>
            <tr className="text-justify text-[#585757] font-normal  border-b-2">
              <td>21042101002</td>
              <td>Pendidikan Guru Madrasah Ibtidaiyah</td>
              <td>Sarjana</td>
              <td>2021-04-21</td>
              <td>2022-09-05</td>
              <td className="flex items-center gap-[6px] rounded-md bg-[#8FD79F1A] px-[6px]">
                <span className="bg-[#8FD79F] rounded-full w-6 h-6 flex justify-center items-center">
                  4
                </span>{" "}
                <p className="font-medium text-sm">Validasi BAN PT</p>
              </td>
              <td>
                <button>
                  <img src={threedot} alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardDetail;
