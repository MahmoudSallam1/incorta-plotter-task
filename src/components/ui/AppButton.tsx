interface AppButtonProps {
  text: string;
  onClick?: () => void;
}
export function AppPrimaryButton({ text = "Button", onClick }: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-3 px-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 lg:ml-4"
    >
      {text}
    </button>
  );
}

export function AppDeleteButton({ text = "Delete", onClick }: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-3 px-6 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 lg:ml-4"
    >
      {text}
    </button>
  );
}
