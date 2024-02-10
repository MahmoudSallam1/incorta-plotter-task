import { columns } from "../../data/columns";
import { data } from "../../data/data";
import { DataColumn } from "../../models/DataColumn";
import { DataItem } from "../../models/DataItem";

export class PlotterAPI {
  static async listColumns(): Promise<DataColumn[]> {
    try {
      const response = await new Promise<DataColumn[]>((resolve) => {
        setTimeout(() => {
          resolve(columns);
        }, 500);
      });
      return response;
    } catch (error) {
      throw new Error("Failed to fetch columns...");
    }
  }

  static async listData(): Promise<DataItem[]> {
    try {
      const response = await new Promise<DataItem[]>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 500);
      });
      return response;
    } catch (error) {
      throw new Error("Failed to fetch data...");
    }
  }
}
