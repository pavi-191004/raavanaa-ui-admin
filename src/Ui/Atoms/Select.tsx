import { Form } from "react-bootstrap";

type Selectprops = {
    label : string;
    name : string;
    onChange : (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options : {value : string; label : string}[]
}

export const Select = ({label, name, onChange, options}: Selectprops) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Select aria-label="Default select example" onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}
