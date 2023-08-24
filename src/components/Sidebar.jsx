import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex w-[240px] flex-col bg-[#f4f5fa] h-screen">
      <NavLink
        className="h-14 pl-2 pr-4 w-full flex items-center"
        to="/beranda"
      >
        <div className="template bg-center bg-no-repeat p-2 m-1 bg-template-icon w-10 h-10 rounded-full flex items-center justify-center bg-[#E0E0E0]"></div>
        <p className="mx-2 my-1 font-medium">Beranda</p>
      </NavLink>
      <NavLink
        className="h-14 pl-2 w-full flex items-center"
        to="/usulan-prodi-baru"
      >
        <div className="album bg-center bg-no-repeat p-2 m-1 bg-album-icon w-10 h-10 rounded-full flex items-center justify-center bg-[#E0E0E0]"></div>
        <p className="mx-2 my-1 font-medium">Usulan Prodi Baru</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
