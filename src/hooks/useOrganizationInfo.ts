import {useMutation} from '@tanstack/react-query'
import type { OrganizationInfo } from '../types/user'

import {createOrganizationinfo} from '../api/organizationInfoApi'


export const useOrganizationInfo=()=>{
   return useMutation({
    mutationFn:(data:OrganizationInfo)=>createOrganizationinfo(data),
    onSuccess:(data)=>{
        console.log(`organization info created `,data);
        
    },
    onError:(error:any)=>{
        console.error(`organization info is not created`,error.message);
        
    }

   }
   );
}