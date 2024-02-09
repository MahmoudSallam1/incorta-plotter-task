function AppLoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-8 w-8 text-blue-500 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4V0C6.486 0 2 4.486 2 10h4zm3.707 2.293a7.965 7.965 0 001.414 1.414l2.586-2.586a4 4 0 11-5.656 0l2.586 2.586zM20 12a8 8 0 01-8 8v4c5.373 0 10-4.627 10-10h-4z"
        ></path>
      </svg>
      <span>Loading...</span>
    </div>
  );
}

export default AppLoadingSpinner;
