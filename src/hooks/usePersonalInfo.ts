import type { personalinfo } from "../types/user";
import { useMutation } from "@tanstack/react-query";
import { createPersonalInfo } from "../api/personalInfoApi";

export const usePersonalInfo=()=>{
    return useMutation({
        mutationFn:(data:personalinfo)=>createPersonalInfo(data),
        onSuccess:(data)=>{
            console.log(`personal info is created `,data);
            
        },
        onError:(error:any)=>{
            console.error(`personalinfo is not creater`,error.message);
            
        }

    });
}