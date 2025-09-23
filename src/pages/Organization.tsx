import React from "react";
import { useForm } from "react-hook-form";
import type { OrganizationInfo } from "../types/user";

type Props = {
  data: OrganizationInfo;
  onNext: (values: OrganizationInfo) => void;
};

const OrganizationPage: React.FC<Props> = ({ data, onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganizationInfo>({
    defaultValues: data,
  });

  const onSubmit = (values: OrganizationInfo) => {
    onNext(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Organization Info</h2>

      <input
        type="text"
        placeholder="Organization Name"
        {...register("organizationName", {
          required: "Organization name is required",
          minLength: {
            value: 2,
            message: "Organization name must be at least 2 characters",
          },
        })}
      />
      {errors.organizationName && (
        <p style={{ color: "red" }}>{errors.organizationName.message}</p>
      )}

      <select
        {...register("organizationType", { required: "Organization type is required" })}
      >
        <option value="" hidden>Select Type</option>
        <option value="college">College</option>
        <option value="university">University</option>
        <option value="institute">Institute</option>
        <option value="company">Company</option>
      </select>
      {errors.organizationType && (
        <p style={{ color: "red" }}>{errors.organizationType.message}</p>
      )}

      <button type="submit">Next</button>
    </form>
  );
};

export default OrganizationPage;
