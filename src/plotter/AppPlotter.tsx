import { useEffect, useState } from "react";
import { DataColumn } from "../models/DataColumn";
import PlotterSideColumnsComponent from "./PlotterSideColumnsComponent";
import { DragDropContext } from "react-beautiful-dnd";
import PlotterDimensionComponent from "./PlotterDimensionComponent";
import PlotterMeasureComponent from "./PlotterMeasureComponent";
import PlotterVisualizerComponent from "./PlotterVisualizerComponent";
import { PlotterAPI } from "../network/api/PlotterAPI";
import { DataItem } from "../models/DataItem";

function AppPlotter() {
  const [dimensions, setDimensions] = useState<DataColumn[]>([]);
  const [measures, setMeasures] = useState<DataColumn[]>([]);
  const [columns, setColumns] = useState<DataColumn[]>([]);
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
        result.destination.droppableId === "dimensions" &&
        column.function === "dimension"
      ) {
        setDimensions([...dimensions, column]);
        setColumns(columns.filter((col) => col.name !== columnName));
        // drag to measure
      } else if (
        result.destination.droppableId === "measures" &&
        column.function === "measure"
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
    PlotterAPI.listColumns()
      .then((data) => {
        setColumns(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching columns:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    PlotterAPI.listData()
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <main className="flex flex-1 flex-col lg:flex-row">
        <PlotterSideColumnsComponent columns={columns} loading={loading} />
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
            data={data}
          />
        </div>
      </main>
    </DragDropContext>
  );
}

export default AppPlotter;
