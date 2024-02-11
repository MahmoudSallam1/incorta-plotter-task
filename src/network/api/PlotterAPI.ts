import { columns } from "../../data/columns";
import { data } from "../../data/data";
import { ColumnsResponseModel } from "../../models/ColumnsResponseModel";
import { DataColumn } from "../../models/DataColumn";
import { DataRequest } from "../../models/DataRequest";
import { DataItem, DataResponseModel } from "../../models/DataResponseModel";
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

  static async getColumns(): Promise<ColumnsResponseModel> {
    const response = await axiosClient({
      method: "GET",
      url: "/columns",
    });
    return response.data as ColumnsResponseModel;
  }
  static async getData(dataRequest: DataRequest): Promise<DataResponseModel> {
    const response = await axiosClient({
      method: "POST",
      url: "/data",
      data: dataRequest,
    });
    return response.data as DataResponseModel;
  }
}
