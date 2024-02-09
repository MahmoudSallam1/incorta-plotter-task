import { Droppable, Draggable } from "react-beautiful-dnd";
import { DataColumn } from "../models/DataColumn";

interface PlotterSideColumnsProps {
  columns: DataColumn[];
}

function PlotterSideColumnsComponent({ columns }: PlotterSideColumnsProps) {
  return (
    <div className="bg-gray-400 w-full lg:w-1/4 h-full border-r p-4">
      <Droppable droppableId="columns">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-4 border rounded-md"
            style={{ minHeight: "100px" }}
          >
            <h2 className="text-lg font-semibold mb-2">Columns</h2>
            {columns.map((column: DataColumn, index: number) => (
              <Draggable
                key={column.name}
                draggableId={column.name}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-2 bg-gray-100 rounded-md mb-2 cursor-move"
                  >
                    {column.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default PlotterSideColumnsComponent;
