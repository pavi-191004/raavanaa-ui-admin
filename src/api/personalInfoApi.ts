import axios from "axios";
import type { personalinfo } from "../types/user";

const API_url=import.meta.env.VITE_API_BASE_URL;

export const createPersonalInfo=async(
    data:personalinfo
):Promise<personalinfo>=>{
    const res=await axios.post(`${API_url}/personalinfo`,data)
  return res.data;
}