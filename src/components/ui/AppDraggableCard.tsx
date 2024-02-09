import { Draggable } from "react-beautiful-dnd";
import { DataColumn } from "../../models/DataColumn";

interface AppDraggableCardProps {
  column: DataColumn;
  index: number;
}

function AppDraggableCard({ column, index }: AppDraggableCardProps) {
  return (
    <Draggable draggableId={column.name} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`relative border border-gray-300 bg-white p-4 rounded-md shadow-md cursor-move transition duration-300 ease-in-out ${
            snapshot.isDragging ? "border-blue-500" : "hover:border-blue-500"
          } ${snapshot.isDragging ? "" : "hover:border-2"} mt-2`}
        >
          {column.name}
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
      )}
    </Draggable>
  );
}

export default AppDraggableCard;
