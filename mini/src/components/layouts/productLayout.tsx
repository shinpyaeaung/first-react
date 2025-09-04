import { Outlet } from "react-router";

export default function productLayout() {
  return (
    <>
      <div className="bg-cyan-700">This is product layout</div>
      <Outlet />
    </>
  );
}
