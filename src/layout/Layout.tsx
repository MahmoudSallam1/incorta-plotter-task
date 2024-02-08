import React from "react";
import AppSidebar from "../components/AppSidebar";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <AppContent />
      </div>
    </div>
  );
}

export default Layout;
