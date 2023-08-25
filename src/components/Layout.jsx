import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [loader, setLoader] = useState("Loading....");
  useEffect(() => {
    setTimeout(() => {
      setLoader("");
    }, 5000);
  }, []);

  return (
    <div>
      {loader ? (
        <div className="w-full h-screen flex items-center justify-center bg-transparent">
          <span className="text-4xl animate-fade">Loading...</span>
          <div className="h-8 ml-3 w-8 border-[8px] border-[#0F56B3] border-t-[8px] mt-3 border-t-transparent rounded-full animate-spin border-opacity-60"></div>
        </div>
      ) : (
        <>
          <Header />
          <menu className="flex">
            <Sidebar />
            <Outlet />
          </menu>
        </>
      )}
    </div>
  );
};

export default Layout;
