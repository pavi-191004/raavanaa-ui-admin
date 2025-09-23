import React from "react";
import { useForm } from "react-hook-form";
import type { PersonalInfo } from "../types/user";

type Props = {
  data: PersonalInfo;
  onNext: (values: PersonalInfo) => void;
};

const PersonalInfoPage: React.FC<Props> = ({ data, onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    defaultValues: data,
  });

  const onSubmit = (values: PersonalInfo) => {
    onNext(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Personal Info</h2>

      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName", {
          required: "Full name is required",
          minLength: { value: 3, message: "Name must be at least 3 characters" },
        })}
      />
      {errors.fullName && <p style={{ color: "red" }}>{errors.fullName.message}</p>}

      <select {...register("roleId", { required: "Role is required" })}>
  <option value="" hidden>
    Select Role
  </option>
  <option value="superadmin">Super Admin</option>
  <option value="admin">Admin</option>
  <option value="placement_officer">Placement Officer</option>
</select>

      {errors.roleId && <p style={{ color: "red" }}>{errors.roleId.message}</p>}

      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalInfoPage;
