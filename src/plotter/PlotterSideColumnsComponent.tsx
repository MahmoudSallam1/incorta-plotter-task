import { Droppable, Draggable } from "react-beautiful-dnd";
import { DataColumn } from "../models/DataColumn";
import AppLoadingSpinner from "../components/ui/AppLoadingSpinner";
import { PlotterConst } from "../constants";

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
              <div>
                <div>
                  <h3 className="text-base font-medium mb-2 text-gray-600">
                    Dimensional Columns
                  </h3>
                  {dimensionalColumns.map(
                    (column: DataColumn, index: number) => (
                      <Draggable
                        key={column.name}
                        draggableId={column.name}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`relative border border-gray-300 bg-white p-4 rounded-md shadow-md cursor-move transition duration-300 ease-in-out ${
                              snapshot.isDragging
                                ? "border-blue-500"
                                : "hover:border-blue-500"
                            } ${
                              snapshot.isDragging ? "" : "hover:border-2"
                            } mt-2`}
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
                        )}
                      </Draggable>
                    )
                  )}
                </div>
                {measureColumns.length > 0 && (
                  <div className="border-t border-gray-300 mt-4 pt-4">
                    <h3 className="text-base font-medium mb-2 text-gray-600">
                      Measure Columns
                    </h3>
                    {measureColumns.map((column: DataColumn, index: number) => (
                      <Draggable
                        key={column.name}
                        draggableId={column.name}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`relative border border-gray-300 bg-white p-4 rounded-md shadow-md cursor-move transition duration-300 ease-in-out ${
                              snapshot.isDragging
                                ? "border-blue-500"
                                : "hover:border-blue-500"
                            } ${
                              snapshot.isDragging ? "" : "hover:border-2"
                            } mt-2`}
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
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default PlotterSideColumnsComponent;
