import { columns } from "../../data/columns";
import { data } from "../../data/data";
import { DataColumn } from "../../models/DataColumn";
import { DataItem } from "../../models/DataItem";

export class PlotterAPI {
  static async listColumns(): Promise<DataColumn[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(columns);
      }, 500);
    });
  }
  static async listData(): Promise<DataItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  }
}
