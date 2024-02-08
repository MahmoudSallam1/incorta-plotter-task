import React from "react";
import { AppDeleteButton, AppPrimaryButton } from "../ui/AppButton";

function AppContent() {
  return (
    <div className="flex-1 p-4 bg-white">
      <h1 className="text-center pt-4">Main Content</h1>
      <p className="text-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <AppPrimaryButton text="Button" onClick={() => console.log("Hello")} />
      <AppDeleteButton text="Delete" />
    </div>
  );
}

export default AppContent;
