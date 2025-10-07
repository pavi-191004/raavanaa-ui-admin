import Button from "react-bootstrap/Button";
import Offcanvas, { type OffcanvasProps } from "react-bootstrap/Offcanvas";
import { InputField } from "../Atoms/InputField"; 
import { useEffect, useState } from "react";
import { RecruiterManagement, type Recruiter } from "../Organism/RecruiterManagement";


type AddRecuiterProps = {
  show: boolean;
  close: () => void;
  save: (recruiter: Recruiter) => void;
  recruiter: Recruiter | null; 
} & OffcanvasProps;

export const AddRecruiter = ({ close, show, save, recruiter, ...props }: AddRecuiterProps) => {
  const [recuiter, setRecuiter] = useState<Recruiter>({
    id: 0,
    companyName: "",
    hrName: "",
    hrContact: {
      email: "",
      primaryEmail: "",
      secondaryEmail: "",
    },
    contactNumber: {
      number: "",
      phoneNumber: "",
      mobileNumber: "",
    },
    jobRoles: "",
    industry: "",
    location: "",
  });


  useEffect(() => {
    if (recruiter) setRecuiter(recruiter);
    else
      setRecuiter({
        id: 0,
        companyName: "",
        hrName: "",
        hrContact: {
          email: "",
          primaryEmail: "",
          secondaryEmail: "",
        },
        contactNumber: {
          number: "",
          phoneNumber: "",
          mobileNumber: "",
        },
        jobRoles: "",
        industry: "",
        location: "",
      });
  }, [recruiter]);

  const handlesave = () => {
    save(recuiter);
    close();
  };

  return (
    <Offcanvas show={show} onHide={close} placement="end" {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{recruiter ? "Edit Recruiter" : "Add Recruiter"}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <InputField
          label="Name"
          type="text"
          placeholder="Enter Name"
          value={recuiter.hrName}
          onChange={(e) =>
            setRecuiter({ ...recuiter, hrName: e.target.value })
          }
        />
        <div className="d-flex gap-2 w-100">
          <InputField
            label="Primary Email*"
            type="email"
            placeholder="Enter Email"
            value={recuiter.hrContact.primaryEmail}
            onChange={(e) =>
              setRecuiter({
                ...recuiter,
                hrContact: { ...recuiter.hrContact, primaryEmail: e.target.value },
              })
            }
          />
          <InputField
            label="Secondary Email"
            type="email"
            placeholder="Enter Email"
            value={recuiter.hrContact.secondaryEmail ?? ""}
            onChange={(e) =>
              setRecuiter({
                ...recuiter,
                hrContact: { ...recuiter.hrContact, secondaryEmail: e.target.value },
              })
            }
          />
        </div>
        <div className="d-flex gap-2 w-100">
          <InputField
            label="Phone Number*"
            type="number"
            placeholder="Enter Phone Number"
            value={recuiter.contactNumber.phoneNumber}
            onChange={(e) =>
              setRecuiter({
                ...recuiter,
                contactNumber: {...recuiter.contactNumber,phoneNumber: e.target.value },
              })
            }
          />
          <InputField
            label="Mobile Number"
            type="number"
            placeholder="Enter Mobile Number"
            value={recuiter.contactNumber.mobileNumber}
            onChange={(e) =>
              setRecuiter({
                ...recuiter,
                contactNumber: { ...recuiter.contactNumber, mobileNumber: e.target.value },
              })
            }
          />
        </div>
        <InputField
          label="Location*"
          type="text"
          placeholder="Enter Location"
          value={recuiter.location}
          onChange={(e) => setRecuiter({ ...recuiter, location: e.target.value })}
        />
        <InputField
          label="Company Name*"
          type="text"
          placeholder="Enter Company Name"
          value={recuiter.companyName}
          onChange={(e) => setRecuiter({ ...recuiter, companyName: e.target.value })}
        />
        <InputField
          label="Job Roles offered*"
          type="text"
          placeholder="Enter Job Roles offered"
          value={recuiter.jobRoles}
          onChange={(e) => setRecuiter({ ...recuiter, jobRoles: e.target.value })}
        />
        <InputField
          label="Industry*"
          type="text"
          placeholder="Enter Industry"
          value={recuiter.industry}
          onChange={(e) => setRecuiter({ ...recuiter, industry: e.target.value })}
        />
        <div className="d-flex gap-2 mt-3">
          <Button variant="primary" onClick={handlesave}>
            {recruiter ? "Update" : "Submit"}
          </Button>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
