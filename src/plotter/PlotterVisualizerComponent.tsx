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
import { DataItem } from "../models/DataResponseModel";
import { useEffect, useState } from "react";
import { PlotterAPI } from "../network/api/PlotterAPI";
import AppLoadingSpinner from "../components/ui/AppLoadingSpinner";
import AppErrorCard from "../components/ui/AppErrorCard";

interface PlotterVisualizerProps {
  dimensions: DataColumn[];
  measures: DataColumn[];
}

function PlotterVisualizerComponent({
  dimensions,
  measures,
}: PlotterVisualizerProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (dimensions.length > 0 && measures.length > 0) {
      setLoading(true);
      PlotterAPI.getData({
        dimension: dimensions.length > 0 ? dimensions[0].name : "",
        measures: measures && measures.map((measure) => measure.name),
      })
        .then((data) => {
          setData(data.data);
          setLoading(false);
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Failed to fetch data. Please try again later.";
          setError(errorMessage);
          setLoading(false);
        });
    }
  }, [dimensions, measures]);

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
      {loading && <AppLoadingSpinner />}
      {error && <AppErrorCard message={error} />}
      {!loading && !error && dimensions.length > 0 && measures.length > 0 && (
        <LineChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dimensions[0].name} />
          <YAxis
            label={{
              value: dimensions[0].name,
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          {measures.map((measure, index) => (
            <Line
              key={index}
              strokeWidth={2}
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
