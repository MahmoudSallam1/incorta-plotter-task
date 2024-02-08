import AppSidebar from "../components/AppSidebar";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";

function AppLayout() {
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

export default AppLayout;
