import { columns } from "../../data/columns";
import { data } from "../../data/data";
import { DataColumn } from "../../models/DataColumn";
import { DataItem } from "../../models/DataItem";
import axiosClient from "../config/axioxClient";

export class PlotterAPI {
  static async listMockColumns(): Promise<DataColumn[]> {
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

  static async listMockData(): Promise<DataItem[]> {
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

  static async listColumns(): Promise<DataColumn[]> {
    try {
      const response = await axiosClient({
        method: "GET",
        url: "/columns",
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch columns...");
    }
  }
  static async listData(): Promise<DataItem[]> {
    try {
      const response = await axiosClient({
        method: "POST",
        url: "/data",
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data...");
    }
  }
}
