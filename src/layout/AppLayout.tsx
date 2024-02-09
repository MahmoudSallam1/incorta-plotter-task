import AppHeader from "../components/layout/AppHeader";
import AppFooter from "../components/layout/AppFooter";
import AppPlotter from "../plotter/AppPlotter";

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <AppPlotter />
      <AppFooter />
    </div>
  );
}

export default AppLayout;
