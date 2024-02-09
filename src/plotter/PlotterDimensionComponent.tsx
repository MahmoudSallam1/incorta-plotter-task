import { Droppable } from "react-beautiful-dnd";
import { DataColumn } from "../models/DataColumn";
import { AppDeleteButton } from "../components/ui/AppButton";
import { PlotterConst } from "../constants";

interface PlotterDimensionProps {
  dimensions: DataColumn[];
  handleClearDimensions: () => void;
}
function PlotterDimensionComponent({
  dimensions,
  handleClearDimensions,
}: PlotterDimensionProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full p-4">
      <Droppable
        droppableId={PlotterConst.DIMENSION}
        isDropDisabled={dimensions.length > 0}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`border-dashed border-2 border-gray-300 p-4 lg:mr-0 mb-2 lg:flex-1 ${
              snapshot.isDraggingOver ? "border-gray-500" : ""
            } ${dimensions.length > 0 ? "bg-gray-200" : ""}`}
          >
            <h2 className="text-lg font-semibold">Dimension</h2>
            {dimensions.map((column: DataColumn) => (
              <div
                key={column.name}
                className={`relative bg-blue-500 text-white w-full lg:w-1/6 border border-gray-300 p-4 rounded-md shadow-md cursor-move transition duration-300 ease-in-out 
                  border-blue-500 hover:border-blue-500 hover:border-2 mt-2`}
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
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AppDeleteButton text="Clear" onClick={handleClearDimensions} />
    </div>
  );
}

export default PlotterDimensionComponent;
