import React, { useEffect, useState } from "react";

import { columns as columnsData } from "../data/columns";
import { DataColumn } from "../models/DataColumn";
import PlotterSideColumnsComponent from "./PlotterSideColumnsComponent";
import { DragDropContext } from "react-beautiful-dnd";
import PlotterDimensionComponent from "./PlotterDimensionComponent";
import PlotterMeasureComponent from "./PlotterMeasureComponent";

function AppPlotter() {
  const [dimensions, setDimensions] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [columns, setColumns] = useState<DataColumn[]>([]);

  const handleClearDimensions = () => {
    setColumns([...columns, ...dimensions]);
    setDimensions([]);
  };

  const handleClearMeasures = () => {
    setColumns([...columns, ...measures]);
    setMeasures([]);
  };

  const handleDragEnd = () => {};

  useEffect(() => {
    setColumns(columnsData);
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-1 h-screen">
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
        </div>
      </div>
    </DragDropContext>
  );
}

export default AppPlotter;
