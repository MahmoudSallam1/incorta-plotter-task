import { DataColumn } from "../models/DataColumn";

export const columns: DataColumn[] = [
  { name: "Product", function: "dimension" },
  { name: "Year", function: "dimension" },
  { name: "Country", function: "dimension" },
  { name: "Cost", function: "measure" },
  { name: "Revenue", function: "measure" },
  { name: "Units sold", function: "measure" },
];
