import { useForm } from "react-hook-form";
import type { personalinfo } from "../types/user";
import React from "react";


type props={
    onNext:(data:personalinfo)=>void
}

const PersonalInfoPage:React.FC<props>=({onNext})=>{
    const { register , handleSubmit , formState:{errors}}=useForm<personalinfo>()

return(
    <form onSubmit={handleSubmit(onNext)}>
        <h1>personal information</h1>
       <input
        {...register("fullName", {
          required: "Full name is required",
          minLength: {
            value: 3,
            message: "Full name must be at least 3 characters",
          },
          maxLength: {
            value: 50,
            message: "Full name cannot exceed 50 characters",
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Full name should contain only letters and spaces",
          },
        })}
        placeholder="Full Name"
      />
      {errors.fullName && <p style={{ color: "red" }}>{errors.fullName.message}</p>}

     
      <input
        {...register("designation", {
          required: "Designation is required",
          minLength: {
            value: 2,
            message: "Designation must be at least 2 characters",
          },
          maxLength: {
            value: 50,
            message: "Designation cannot exceed 50 characters",
          },
        })}
        placeholder="Designation"
      />
      {errors.designation && (
        <p style={{ color: "red" }}>{errors.designation.message}</p>
      )}

     
      <input
        type="tel"
        {...register("contactNumber", {
          required: "Contact number is required",
          pattern: {
            value: /^[6-9]\d{9}$/,
            message: "Enter a valid 10-digit Indian mobile number",
          },
        })}
        placeholder="Contact Number"
      />
      {errors.contactNumber && (
        <p style={{ color: "red" }}>{errors.contactNumber.message}</p>
      )}

      
      <select
        {...register("roleId", {
          required: "Role selection is required",
        })}
      >
        <option value="">Select Role</option>
        <option value="superadmin">Super Admin</option>
        <option value="admin">Admin</option>
        <option value="placement_officer">Placement Officer</option>
      </select>
      {errors.roleId && (
        <p style={{ color: "red" }}>{errors.roleId.message}</p>
      )}

      <button type="submit">Next</button>
    </form>
)

};
export default PersonalInfoPage;

