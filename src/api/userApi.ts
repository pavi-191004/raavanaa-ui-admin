import axios from "axios";
import type { OnboardingRequest, OnboardingResponse } from "../types/user";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/onboarding`;

export const createOnboarding = async (
  data: OnboardingRequest
): Promise<OnboardingResponse> => {
  const res = await axios.post<OnboardingResponse>(API_URL, data);
  return res.data;
};


export const updateOnboarding = async (
  data: OnboardingRequest
): Promise<OnboardingResponse> => {
  const res = await axios.put<OnboardingResponse>(API_URL, data);
  return res.data;
};
