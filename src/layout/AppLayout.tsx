import AppSidebar from "../components/layout/AppSidebar";
import AppContent from "../components/layout/AppContent";
import AppHeader from "../components/layout/AppHeader";
import AppFooter from "../components/layout/AppFooter";

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <AppContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default AppLayout;
