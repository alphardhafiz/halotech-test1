import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import UsulanProdiBaru from "./pages/UsulanProdiBaru";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="beranda" element={<Beranda />} />
        <Route path="usulan-prodi-baru" element={<UsulanProdiBaru />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
