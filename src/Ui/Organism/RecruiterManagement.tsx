import { useMemo, useState } from 'react'
import { RecruiterTable } from "../Molecules/RecruiterTable";
import { AddRecruiter } from '../Molecules/AddRecruiter';
import { RecruiterControl } from '../Molecules/RecruiterControl';


export interface Recruiter {
  id: number;
  companyName: string;
  hrName: string;
  hrContact: {
    email: string;
    primaryEmail: string;
    secondaryEmail?: string;
  };
  contactNumber: {
    number: any;
    phoneNumber: string;
    mobileNumber: string;
  };
  jobRoles: string;
  industry: string;
  location: string;
}

export const RecruiterManagement = () => {
  const [filters, setFilters] = useState({})
  const [show, setShow] = useState(false);
  const [editingRecruiter, setEditingRecruiter] = useState<Recruiter | null>(null);
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  }

  const handleSave = (recruiter: Recruiter) => {
    if (editingRecruiter) {
      setRecruiters((prev) =>
        prev.map((r) => (r.id === editingRecruiter.id ? { ...recruiter, id: editingRecruiter.id } : r))
      );
    } else {
      setRecruiters((prev) => [...prev, { ...recruiter, id: Date.now() }]);
    }
    setEditingRecruiter(null);
  };

  const handleEdit = (recruiter: Recruiter) => {
    setEditingRecruiter(recruiter);
    setShow(true);
  };

  const handleDelete = (id: number) => {
    setRecruiters((prev) => prev.filter((r) => r.id !== id));
  };

  const filteredData = useMemo(() => {
  const search = searchValue.toLowerCase();
  return recruiters.filter(
    (r) =>
      r.companyName.toLowerCase().includes(search) ||
      r.hrContact.email.toLowerCase().includes(search) ||
      r.industry.toLowerCase().includes(search) ||
      r.location.toLowerCase().includes(search)
  );
}, [recruiters, searchValue]);


  return (
    <div className='mb-5 mt-5 container rounded shadoe-sm'>
      <RecruiterControl
        onSearch={(val) => setSearchValue(val)}
        onFilterChange={handleFilterChange}
        onAddRecruiter={() => setShow(true)}      
      />

      <AddRecruiter
        show={show}
        close={() => {
          setShow(false);
          setEditingRecruiter(null);
        }}
        save={handleSave}
        recruiter={editingRecruiter}
      />

      <RecruiterTable
        recruiters={filteredData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
