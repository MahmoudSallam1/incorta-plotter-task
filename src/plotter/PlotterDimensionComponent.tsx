import { Droppable } from "react-beautiful-dnd";
import { DataColumn } from "../models/DataColumn";
import { AppDeleteButton } from "../components/ui/AppButton";
import { PlotterConst } from "../constants";
import AppDroppableCard from "../components/ui/AppDroppableCard";

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
              <AppDroppableCard key={column.name} title={column.name} />
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
