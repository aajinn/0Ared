import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col  min-h-screen p-6">{children}</div>;
};

export default Layout;
