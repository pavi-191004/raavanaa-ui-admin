import { Form } from "react-bootstrap";

type InputFieldProps = {
    type : string;
    label : string;
    placeholder: string;
    value : string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({label, placeholder, type,value, onChange}: InputFieldProps) => {
  return (
    <Form>
      <Form.Group className="p-2 d-flex flex-column gap-1" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </Form.Group>
    </Form>
  )
}
