import { Outlet } from "react-router-dom";

export default function SpecialLayout() {
  return (
    <div className="pt-20 text-center">
      <Outlet />
    </div>
  );
}