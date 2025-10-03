import React, { useState } from "react";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import OrganizationInfoPage from "../pages/OrganizationInfoPage";
import { usePersonalInfo } from "../hooks/usePersonalInfo";
import { useOrganizationInfo } from "../hooks/useOrganizationInfo";
import type { personalinfo, OrganizationInfo } from "../types/user";

const OnboardingForm: React.FC = () => {
  const [step, setStep] = useState(2);
  const personalMutation = usePersonalInfo();
  const organizationMutation = useOrganizationInfo();

  const handlePersonalSubmit = (data: personalinfo) => {
    personalMutation.mutate(data, {
      onSuccess: () => setStep(2),
    });
  };

  const handleOrganizationSubmit = (data: OrganizationInfo) => {
    organizationMutation.mutate(data);
  };

  return (
    <div>
      {step === 1 && <PersonalInfoPage onNext={handlePersonalSubmit} />}
      {step === 2 && <OrganizationInfoPage onSubmit={handleOrganizationSubmit} />}

      {personalMutation.isPending && <p>Submitting personal info...</p>}
      {organizationMutation.isPending && <p>Submitting organization info...</p>}

      {organizationMutation.isSuccess && <p> Onboarding Completed!</p>}
    </div>
  );
};

export default OnboardingForm;
