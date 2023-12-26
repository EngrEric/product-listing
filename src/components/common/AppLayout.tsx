import { FC } from "react";
import { Outlet } from "react-router-dom";

/**
 * This component is essentially a layout component that wraps the main content of the application
 * @returns
 */
const AppLayout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
