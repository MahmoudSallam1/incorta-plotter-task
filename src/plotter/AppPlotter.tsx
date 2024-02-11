import { useEffect, useState } from "react";
import { DataColumn } from "../models/DataColumn";
import PlotterSideColumnsComponent from "./PlotterSideColumnsComponent";
import { DragDropContext } from "react-beautiful-dnd";
import PlotterDimensionComponent from "./PlotterDimensionComponent";
import PlotterMeasureComponent from "./PlotterMeasureComponent";
import PlotterVisualizerComponent from "./PlotterVisualizerComponent";
import { PlotterAPI } from "../network/api/PlotterAPI";
import { PlotterConst } from "../constants";
import AppErrorCard from "../components/ui/AppErrorCard";

function AppPlotter() {
  const [dimensions, setDimensions] = useState<DataColumn[]>([]);
  const [measures, setMeasures] = useState<DataColumn[]>([]);
  const [columns, setColumns] = useState<DataColumn[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      // drag to dimensions
      if (
        result.destination.droppableId === PlotterConst.DIMENSION &&
        column.function === PlotterConst.DIMENSION
      ) {
        setDimensions([...dimensions, column]);
        setColumns(columns.filter((col) => col.name !== columnName));
        // drag to measure
      } else if (
        result.destination.droppableId === PlotterConst.MEASURE &&
        column.function === PlotterConst.MEASURE
      ) {
        setMeasures([...measures, column]);
        setColumns(columns.filter((col) => col.name !== columnName));
      } else {
        //drag to the wrong drop zone, revert the changes
        setColumns(columns);
      }
    }
  };

  useEffect(() => {
    PlotterAPI.getColumns()
      .then((columnsData) => {
        setColumns(columnsData.columns);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = "Failed to fetch columns. Please try again later.";
        setError(errorMessage || error.message);
        setLoading(false);
      });
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <main className="flex flex-1 flex-col lg:flex-row">
        <PlotterSideColumnsComponent columns={columns} loading={loading} />
        {error && <AppErrorCard message={error} />}
        {!loading && !error && (
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
        )}
      </main>
    </DragDropContext>
  );
}

export default AppPlotter;
