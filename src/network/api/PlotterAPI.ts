import { DataColumn } from "../../models/DataColumn";

export class PlotterAPI {
  static async listColumns(): Promise<DataColumn[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Product", function: "dimension" },
          { name: "Year", function: "dimension" },
          { name: "Country", function: "dimension" },
          { name: "Cost", function: "measure" },
          { name: "Revenue", function: "measure" },
          { name: "Units sold", function: "measure" },
        ]);
      }, 1000);
    });
  }
}
