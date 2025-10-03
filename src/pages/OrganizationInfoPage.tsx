import React from "react";
import { useForm } from "react-hook-form";
import type { OrganizationInfo } from "../types/user";

type Props = {
  onSubmit: (data: OrganizationInfo) => void;
};

const departmentOptions = ["CSE", "ECE", "AIDS", "CSBS", "EEE", "AIML"] as const;

const OrganizationInfopage: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganizationInfo>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Organization Info</h2>
      <input
        {...register("organizationId", {
          required: "Organization ID is required",
          minLength: {
            value: 3,
            message: "Organization ID must be at least 3 characters",
          },
        })}
        placeholder="Organization ID"
      />
      {errors.organizationId && (
        <p style={{ color: "red" }}>{errors.organizationId.message}</p>
      )}
      <input
        {...register("organizationName", {
          required: "Organization Name is required",
          minLength: {
            value: 3,
            message: "Organization Name must be at least 3 characters",
          },
        })}
        placeholder="Organization Name"
      />
      {errors.organizationName && (
        <p style={{ color: "red" }}>{errors.organizationName.message}</p>
      )}
      <select
        {...register("organizationType", {
          required: "Organization Type is required",
        })}
      >
        <option value="">Select Type</option>
        <option value="college">College</option>
        <option value="university">University</option>
        <option value="group_of_institutions">Group of Institutions</option>
      </select>
      {errors.organizationType && (
        <p style={{ color: "red" }}>{errors.organizationType.message}</p>
      )}
      <input
        {...register("location", {
          required: "Location is required",
          minLength: {
            value: 2,
            message: "Location must be at least 2 characters",
          },
        })}
        placeholder="Location"
      />
      {errors.location && (
        <p style={{ color: "red" }}>{errors.location.message}</p>
      )}
      <input
        {...register("website", {
          required: "Website URL is required",
          pattern: {
            value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/,
            message: "Enter a valid website URL (e.g., https://example.com)",
          },
        })}
        placeholder="Website URL"
      />
      {errors.website && (
        <p style={{ color: "red" }}>{errors.website.message}</p>
      )}

     
      <input
        {...register("subdomain", {
          required: "Subdomain is required",
          pattern: {
            value: /^[a-z0-9-]+$/,
            message:
              "Subdomain can only contain lowercase letters, numbers, and hyphens",
          },
          minLength: {
            value: 3,
            message: "Subdomain must be at least 3 characters",
          },
        })}
        placeholder="Subdomain"
      />
      {errors.subdomain && (
        <p style={{ color: "red" }}>{errors.subdomain.message}</p>
      )}

      
<div>
  <p>
    <strong>Select Department:</strong>
  </p>
  {departmentOptions.map((dept) => (
    <label key={dept} style={{ marginRight: "10px" }}>
      <input
        type="radio"
        value={dept}
        {...register("departments", {
          required: "Please select one department",
        })}
      />
      {dept}
    </label>
  ))}
  {errors.departments && (
    <p style={{ color: "red" }}>{(errors.departments as any).message}</p>
  )}
</div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
  );
};

export default OrganizationInfopage;
