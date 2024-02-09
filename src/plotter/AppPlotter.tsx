import React, { useEffect, useState } from "react";

import { columns as columnsData } from "../data/columns";
import { DataColumn } from "../models/DataColumn";
import PlotterSideColumnsComponent from "./PlotterSideColumnsComponent";
import { DragDropContext } from "react-beautiful-dnd";
import PlotterVisualizerComponent from "./PlotterVisualizerComponent";

function AppPlotter() {
  const [dimensions, setDimensions] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [columns, setColumns] = useState<DataColumn[]>([]);

  const handleDragEnd = () => {};

  useEffect(() => {
    setColumns(columnsData);
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <PlotterSideColumnsComponent columns={columns} />
      <PlotterVisualizerComponent />
    </DragDropContext>
  );
}

export default AppPlotter;
