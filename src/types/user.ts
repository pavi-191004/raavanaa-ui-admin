export type personalinfo={
    fullName:string;
    designation:string;
    contactNumber:number;
    roleId:"superadmin"|"admin"|"placement officer";

};

export type OrganizationInfo = {
  organizationId: string;
  organizationName: string;
  organizationType: "college" | "university" | "group_of_institutions"; 
  location: string;
  website: string;
  subdomain: string;
  departments: "CSE"
  | "ECE"
  | "AIDS"
  | "CSBS"
  | "EEE"
  | "AIML";
};
