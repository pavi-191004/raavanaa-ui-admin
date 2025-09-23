
export type PersonalInfo = {
  fullName: string;
  roleId: ""|"superadmin" | "admin" | "placement_officer";
};

export type OrganizationInfo = {
  organizationName: string;
  organizationType: ""|"college" | "university" | "institute" | "company";
};

export type PortalConfig = {
  website: string;
  subdomain: string;
  departments: string[];
};

export type OnboardingRequest = {
  personalInfo: PersonalInfo;
  organizationInfo: OrganizationInfo;
  portalConfig: PortalConfig;
};


export type OnboardingResponse = {
  onboardingId: string;
  message: string;
};
