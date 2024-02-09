import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { DataColumn } from "../models/DataColumn";
import { DataItem } from "../models/DataItem";

interface PlotterVisualizerProps {
  dimensions: DataColumn[];
  measures: DataColumn[];
  data: DataItem[];
}

function PlotterVisualizerComponent({
  dimensions,
  measures,
  data,
}: PlotterVisualizerProps) {
  const chartData = data.map((_, index) => {
    const entry = {};
    dimensions.forEach((dim) => {
      const dimData = data.find((item) => item.name === dim.name);
      if (dimData) {
        entry[dim.name] = dimData.values[index];
      }
    });
    measures.forEach((measure) => {
      const measureData = data.find((item) => item.name === measure.name);
      if (measureData) {
        entry[measure.name] = measureData.values[index];
      }
    });
    return entry;
  });
  return (
    <div className="flex flex-col items-center w-full p-4 mb-4 overflow-x-auto">
      {dimensions.length > 0 && measures.length > 0 && (
        <LineChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dimensions[0].name} />
          <YAxis />
          <Tooltip />
          <Legend />
          {measures.map((measure, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={measure.name}
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </LineChart>
      )}
    </div>
  );
}

export default PlotterVisualizerComponent;
