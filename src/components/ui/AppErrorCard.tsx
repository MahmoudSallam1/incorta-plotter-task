interface AppErrorCardProps {
  message: string;
}

function AppErrorCard({ message }: AppErrorCardProps) {
  return (
    <div className="flex justify-center items-center m-auto">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {message}</span>
      </div>
    </div>
  );
}

export default AppErrorCard;
