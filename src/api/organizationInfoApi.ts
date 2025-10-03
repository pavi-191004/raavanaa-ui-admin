import axios from "axios";
import type { OrganizationInfo } from "../types/user";

const API_url=import.meta.env.VITE_API_BASE_URL;

export const createOrganizationinfo=async(
    data:OrganizationInfo
):Promise<OrganizationInfo>=>{
    const res=await axios.post(`${API_url}/organizationinfo`,data);
    return res.data;

}
