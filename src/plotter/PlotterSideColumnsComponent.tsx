import { Droppable } from "react-beautiful-dnd";
import { DataColumn } from "../models/DataColumn";
import AppLoadingSpinner from "../components/ui/AppLoadingSpinner";
import { PlotterConst } from "../constants";
import AppDraggableCard from "../components/ui/AppDraggableCard";

interface PlotterSideColumnsProps {
  columns: DataColumn[];
  loading: boolean;
}

function PlotterSideColumnsComponent({
  columns,
  loading,
}: PlotterSideColumnsProps) {
  const dimensionalColumns = columns.filter(
    (column) => column.function === PlotterConst.DIMENSION
  );
  const measureColumns = columns.filter(
    (column) => column.function === PlotterConst.MEASURE
  );
  return (
    <div className="bg-gray-100 w-full lg:w-1/4 h-full border-r p-4">
      <Droppable droppableId={PlotterConst.COLUMNS}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-4 border rounded-md"
            style={{ minHeight: "100px" }}
          >
            {loading && <AppLoadingSpinner />}
            {!loading && (
              <aside>
                <div>
                  <h3 className="text-base font-medium mb-2 text-gray-600">
                    Dimensional Columns
                  </h3>
                  {dimensionalColumns.map(
                    (column: DataColumn, index: number) => (
                      <AppDraggableCard
                        key={column.name}
                        column={column}
                        index={index}
                      />
                    )
                  )}
                </div>
                {measureColumns.length > 0 && (
                  <div className="border-t border-gray-300 mt-4 pt-4">
                    <h3 className="text-base font-medium mb-2 text-gray-600">
                      Measure Columns
                    </h3>
                    {measureColumns.map((column: DataColumn, index: number) => (
                      <AppDraggableCard
                        key={column.name}
                        column={column}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </aside>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default PlotterSideColumnsComponent;
