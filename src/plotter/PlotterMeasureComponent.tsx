import { Droppable } from "react-beautiful-dnd";
import { DataColumn } from "../models/DataColumn";
import { AppDeleteButton } from "../components/ui/AppButton";
import { PlotterConst } from "../constants";
import AppDroppableCard from "../components/ui/AppDroppableCard";

interface PlotterMeasureProps {
  measures: DataColumn[];
  handleClearMeasures: () => void;
}

function PlotterMeasureComponent({
  measures,
  handleClearMeasures,
}: PlotterMeasureProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full p-4">
      <Droppable droppableId={PlotterConst.MEASURE}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`border-dashed border-2 border-gray-300 p-4 mb-2  lg:mr-0  lg:flex-1 ${
              snapshot.isDraggingOver ? "border-gray-500" : ""
            } ${measures.length > 0 ? "bg-gray-200" : ""}`}
          >
            <h2 className="text-lg font-semibold">Measures</h2>
            <div className="flex flex-col lg:flex-row">
              {" "}
              {measures.map((column: DataColumn) => (
                <AppDroppableCard title={column.name} key={column.name} />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <AppDeleteButton text="Clear" onClick={handleClearMeasures} />
    </div>
  );
}

export default PlotterMeasureComponent;
