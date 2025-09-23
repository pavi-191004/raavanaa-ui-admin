import React from "react";
import { useForm } from "react-hook-form";
import type { PortalConfig } from "../types/user";

type Props = {
  data: PortalConfig;
  onSubmit: (values: PortalConfig) => void;
};

const PortalInfoPage: React.FC<Props> = ({ data, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PortalConfig>({
    defaultValues: data,
  });

  const handleFinalSubmit = (values: PortalConfig) => {
    // Convert departments string → array
    const cleanedData = {
      ...values,
      departments: values.departments.map((d) => d.trim()),
    };
    onSubmit(cleanedData);
  };

  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)}>
      <h2>Portal Info</h2>

      <input
        type="url"
        placeholder="Website"
        {...register("website", {
          required: "Website is required",
          pattern: {
            value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
            message: "Enter a valid website URL",
          },
        })}
      />
      {errors.website && <p style={{ color: "red" }}>{errors.website.message}</p>}

      <input
        type="text"
        placeholder="Subdomain"
        {...register("subdomain", {
          required: "Subdomain is required",
          minLength: { value: 2, message: "Subdomain must be at least 2 characters" },
        })}
      />
      {errors.subdomain && <p style={{ color: "red" }}>{errors.subdomain.message}</p>}

      <input
        type="text"
        placeholder="Departments (comma separated)"
        {...register("departments", {
          required: "At least one department is required",
          validate: (value) =>
            value.length > 0 || "Enter at least one department",
        })}
      />
      {errors.departments && (
        <p style={{ color: "red" }}>{errors.departments.message as string}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default PortalInfoPage;
