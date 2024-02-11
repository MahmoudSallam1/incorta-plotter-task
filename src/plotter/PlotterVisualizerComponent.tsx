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
          const errorMessage = "Failed to fetch data. Please try again later.";
          setError(errorMessage || error.message);
          setLoading(false);
        });
    }
  }, [dimensions, measures]);

  const hasData = data && data.length > 0;
  const hasDimensions = dimensions.length > 0;
  const hasMeasures = measures.length > 0;

  const dimensionValues = hasData ? data[0]?.values : [];
  const measureValues = hasData
    ? data.slice(1).map((entry) => entry.values)
    : [];

  const chartData =
    hasData && dimensionValues.length > 0
      ? dimensionValues.map((dimValue, index) => {
          const entry = { [data[0].name]: dimValue };
          measureValues.forEach((measure, measureIndex) => {
            const measureName = data[measureIndex + 1]?.name;
            entry[measureName] = measure[index];
          });
          return entry;
        })
      : [];
  return (
    <div className="flex flex-col items-center w-full p-4 mb-4 overflow-x-auto">
      {loading && <AppLoadingSpinner />}
      {error && <AppErrorCard message={error} />}
      {!loading && !error && hasDimensions && hasMeasures && (
        <>
          {hasData && dimensionValues.length > 0 ? (
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
                  stroke={`#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`}
                />
              ))}
            </LineChart>
          ) : (
            <p>No data available</p>
          )}
        </>
      )}
    </div>
  );
}

export default PlotterVisualizerComponent;
