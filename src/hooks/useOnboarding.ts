import { useMutation } from "@tanstack/react-query";
import { createOnboarding } from "../api/userApi";
import type { OnboardingRequest, OnboardingResponse } from "../types/user";

export const useOnboardingMutation = () => {
  return useMutation<OnboardingResponse, Error, OnboardingRequest>({
    mutationFn: createOnboarding,
    onSuccess: (data) => {
      console.log(" Onboarding success:", data);
    },
    onError: (error) => {
      console.error("Onboarding failed:", error.message);
    },
  });
};
