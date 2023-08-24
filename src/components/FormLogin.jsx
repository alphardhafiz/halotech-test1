import showPassword from "../assets/ant-design_eye-invisible-filled.svg";
import hidePassword from "../assets/ant-design_eye-filled.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormLogin = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [hidePasswordIcon, setHidePasswordIcon] = useState(showPassword);
  const navigate = useNavigate();

  const login = () => {
    navigate("/usulan-prodi-baru");
  };

  const changePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setHidePasswordIcon(hidePassword);
    } else {
      setPasswordType("password");
      setHidePasswordIcon(showPassword);
    }
  };
  return (
    <div className="flex-1 z-10">
      <form
        onSubmit={login}
        className="bg-white shadow-md p-10 w-[531px] mx-auto flex flex-col gap-5 rounded-[20px] justify-start"
      >
        <div className="py-5">
          <p className="text-sm font-normal">Selamat datang!</p>
          <p className="text-[55px] font-semibold">Silakan login</p>
        </div>
        <div>
          <label className="pb-5 inline-block">Masukkan alamat email</label>
          <input
            type="email"
            className="w-full caret-[#C33418] rounded-[9px] px-6 py-5 border-2 outline-none focus:border-blue-500 text-[#808080]"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className="pb-5 inline-block">Masukkan password</label>
          <div className="relative">
            <input
              type={passwordType}
              className="w-full caret-[#C33418] rounded-[9px] px-6 py-5 border-2 outline-none focus:border-blue-500 "
              placeholder="Password"
              required
            />
            <img
              onClick={changePasswordType}
              className="absolute bottom-5 right-6"
              src={hidePasswordIcon}
              alt="showPassword"
            />
          </div>
        </div>
        <div>
          <a
            href="#"
            className="text-[#4285F4] inline-block w-full text-sm font-normal text-right"
          >
            Lupa Password
          </a>
        </div>
        <div>
          <button className="bg-[#0089ED] py-4 px-2 rounded-md font-semibold text-sm text-white w-full">
            Log In
          </button>
        </div>
        <div>
          <p className="text-[#8d8d8d] text-sm text-center">
            Belum memiliki akun?{" "}
            <a href="#" className="text-[#0089ED]">
              Daftar sekarang
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
