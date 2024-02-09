import { useEffect, useState } from "react";

import { columns as columnsData } from "../data/columns";
import { DataColumn } from "../models/DataColumn";
import PlotterSideColumnsComponent from "./PlotterSideColumnsComponent";
import { DragDropContext } from "react-beautiful-dnd";
import PlotterDimensionComponent from "./PlotterDimensionComponent";
import PlotterMeasureComponent from "./PlotterMeasureComponent";
import PlotterVisualizerComponent from "./PlotterVisualizerComponent";

function AppPlotter() {
  const [dimensions, setDimensions] = useState<DataColumn[]>([]);
  const [measures, setMeasures] = useState<DataColumn[]>([]);
  const [columns, setColumns] = useState<DataColumn[]>([]);

  const handleClearDimensions = () => {
    setColumns([...columns, ...dimensions]);
    setDimensions([]);
  };

  const handleClearMeasures = () => {
    setColumns([...columns, ...measures]);
    setMeasures([]);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const columnName = result.draggableId;
    const column = columns.find((item) => item.name === columnName);

    if (column) {
      if (
        result.destination.droppableId === "dimensions" &&
        column.function === "dimension"
      ) {
        setDimensions([...dimensions, column]);
        setColumns(columns.filter((col) => col.name !== columnName));
      } else if (
        result.destination.droppableId === "measures" &&
        column.function === "measure"
      ) {
        setMeasures([...measures, column]);
        setColumns(columns.filter((col) => col.name !== columnName));
      } else {
        // If dragged to the wrong drop zone, revert the changes
        setColumns(columns); // Restore the columns
      }
    }
  };

  useEffect(() => {
    setColumns(columnsData);
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <main className="flex flex-1">
        <PlotterSideColumnsComponent columns={columns} />
        <div className="w-full">
          <PlotterDimensionComponent
            dimensions={dimensions}
            handleClearDimensions={handleClearDimensions}
          />
          <PlotterMeasureComponent
            measures={measures}
            handleClearMeasures={handleClearMeasures}
          />
          <PlotterVisualizerComponent
            dimensions={dimensions}
            measures={measures}
          />
        </div>
      </main>
    </DragDropContext>
  );
}

export default AppPlotter;
