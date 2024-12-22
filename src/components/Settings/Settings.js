import React from "react";
import { NavLink, Outlet } from "react-router";

const Settings = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="management"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Item Management
        </NavLink>
        <NavLink
          to="metrics"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Metrics
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Settings;
