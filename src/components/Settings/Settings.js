import React from "react";
import { NavLink, Outlet, useLocation } from "react-router";

function isSettingsRouteActive(currentPath) {
  return currentPath.startsWith("/settings");
}

function isDefaultNavLinkActive(currentPath) {
  return currentPath === "/settings" || currentPath === "/settings/management";
}

const Settings = () => {
  const location = useLocation();
  const isSettingsActive = isSettingsRouteActive(location.pathname);

  return (
    <div className="flex">
      <nav
        className={`bg-gray-100 flex flex-col items-end p-5  mt-10 ${
          isSettingsActive ? "active-settings-nav" : ""
        }`}
      >
        <NavLink
          to="management"
          className={() =>
            ` px-3 py-2 rounded-md mb-5 ${
              isDefaultNavLinkActive(location.pathname)
                ? "bg-red-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          Items
        </NavLink>
        <NavLink
          to="metrics"
          className={({ isActive }) =>
            ` px-3 py-2 rounded-md ${
              isActive
                ? "bg-red-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          Metrics
        </NavLink>
      </nav>
      <main className="flex-1">
        {" "}
        {/* Take the remaining space */}
        <Outlet />
      </main>
    </div>
  );
};

export default Settings;
