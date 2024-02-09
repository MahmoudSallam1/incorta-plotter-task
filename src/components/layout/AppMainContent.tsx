import React from "react";

interface AppMainContentProps {
  children: React.ReactNode;
}
function AppMainContent({ children }: AppMainContentProps) {
  return (
    <div className="flex-1 p-4 bg-white">
      <h1 className="text-center pt-4">Main Content</h1>

      {children}
    </div>
  );
}

export default AppMainContent;
