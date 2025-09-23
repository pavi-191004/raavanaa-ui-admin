import React, { useState } from "react";
import PersonalInfoPage from "../pages/PersonalInfo";
import OrganizationPage from "../pages/Organization";
import PortalInfoPage from "../pages/PortalInfo";
import { useOnboardingMutation } from "../hooks/useOnboarding";
import type { PersonalInfo, OrganizationInfo, PortalConfig } from "../types/user";

const OnboardingForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    roleId: "",
  });

  const [organizationInfo, setOrganizationInfo] = useState<OrganizationInfo>({
    organizationName: "",
    organizationType: "",
  });

  const [portalConfig, setPortalConfig] = useState<PortalConfig>({
    website: "",
    subdomain: "",
    departments: [],
  });

  const mutation = useOnboardingMutation();

  const handleSubmit = (portalData: PortalConfig) => {
    setPortalConfig(portalData);
    mutation.mutate({
      personalInfo,
      organizationInfo,
      portalConfig: portalData,
    });
  };

  return (
    <div>
      {step === 1 && (
        <PersonalInfoPage
          data={personalInfo}
          onNext={(data) => {
            setPersonalInfo(data);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <OrganizationPage
          data={organizationInfo}
          onNext={(data) => {
            setOrganizationInfo(data);
            setStep(3);
          }}
        />
      )}

      {step === 3 && (
        <PortalInfoPage
          data={portalConfig}
          onSubmit={(data) => handleSubmit(data)}
        />
      )}

      {mutation.isPending && <p>Submitting...</p>}
      {mutation.isSuccess && <p>{mutation.data.message}</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </div>
  );
};

export default OnboardingForm;
