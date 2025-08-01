import { Outlet } from "react-router-dom";
import RotatingLogo from "../components/rotating_logo/RotatingLogo";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <RotatingLogo />
      <Navbar />
      <div className="pt-20 text-center">
        <Outlet />
      </div>
    </>
  );
}
