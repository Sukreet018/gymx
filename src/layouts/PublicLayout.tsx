import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <Outlet />
    </div>
  );
}

export default PublicLayout;
