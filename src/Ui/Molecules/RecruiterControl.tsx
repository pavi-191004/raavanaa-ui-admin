import { useState, type FormEvent } from 'react'
import { Select } from '../Atoms/Select';
import { FaFilter } from 'react-icons/fa';
import { Button } from '../Atoms/Button';
import { InputField } from '../Atoms/InputField';
import { Form } from 'react-bootstrap';

interface RecruiterControlProps {
    onSearch: (searchValue: string) => void;
    onFilterChange: (name: string, value: string) => void;
    onAddRecruiter: () => void;
}

export const RecruiterControl = ({onSearch, onFilterChange, onAddRecruiter}: RecruiterControlProps) =>{
    const [inputSearchValue, setInputSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

  const submitSearchForm = (e: FormEvent) => {
    e.preventDefault();
    onSearch(inputSearchValue);
  };
  console.log("Search submitted:", inputSearchValue);

  const Filter = [

    {
      label: "",
      name: "Hr Name",
      options: [
        { value: "Hr Name", label: "Hr name" },
        { value: "", label: "" },
        { value: "", label: "" }
      ]
    },
    {
      label: "",
      name: "Company Name",
      options: [
        { value: "CompanyName", label: "CompanyName" },
        { value: "", label: "" },
        { value: "", label: "" }
      ]
    },
    {
      label: "",
      name: "industry",
      options: [
        { value: "Industry", label: "Industry" },
        { value: "IT", label: "IT" },
        { value: "Finance", label: "Finance" },
        { value: "Healthcare", label: "Healthcare" }
      ]
    },
    {
      label: "",
      name: "Location",
      options: [
        { value: "Location", label: "Location" },
        { value: "", label: "" },
        { value: "", label: "" }
      ]
    }
]

return (
    <div className='container rounded shadow-sm p-3'>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form onSubmit={submitSearchForm} style={{ width: "50%", fontSize: "14px" }}>
                <InputField
                  label=""
                  type="text"
                  placeholder="Search..."
                  value={inputSearchValue}
                  onChange={(e) => {setInputSearchValue(e.target.value)
                    onSearch(e.target.value);
                  }}
                  
                />
              </Form>
      <div className="d-flex align-items-center gap-3">
        <div className="position-relative">
          <button
            className="d-flex align-items-center gap-2 btn btn-outline-info"
            style={{ cursor: "pointer", height: "38px" }}
            onClick={() => setIsOpen(!isOpen)}
            >
            <FaFilter size={20} />
            <span>Filter</span>
          </button>
          {isOpen && (
            <div className="filter-dropdown d-flex flex-row gap-2 rounded">
              {Filter.map((filter, index) => (
                <Select
                key={index}
                label={filter.label}
                name={filter.name}
                options={filter.options}
                onChange={(e) => onFilterChange(filter.name, e.target.value)} />
              ))}

            </div>
          )}

        </div>
        <Button buttonText={"Add Recruiter"} onClick={onAddRecruiter} />
        </div>
      </div>
    </div>
)
}