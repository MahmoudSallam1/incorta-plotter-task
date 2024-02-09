interface AppDroppableCardProps {
  title: string;
}
function AppDroppableCard({ title = "Drop Card" }: AppDroppableCardProps) {
  return (
    <div
      className={`relative bg-blue-500 text-white w-full lg:w-1/6 border border-gray-300 p-4 rounded-md shadow-md cursor-move transition duration-300 ease-in-out 
        border-blue-500 hover:border-blue-500 hover:border-2 mt-2 mr-2`}
    >
      {title}
      <div className="absolute top-0 right-0 mt-1.5 mr-1 flex flex-col">
        <div className="flex">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
        </div>
        <div className="flex mt-0.5">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
        </div>
        <div className="flex mt-0.5">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
        </div>
      </div>
    </div>
  );
}

export default AppDroppableCard;
