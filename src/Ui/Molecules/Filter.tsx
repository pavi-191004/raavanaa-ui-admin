
import { Label } from '../Atoms/Label'
import { Select } from '../Atoms/Select'
type FilterProps = {
    labelText : string;
    name : string;
    onChange : (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options : {value : string; label : string}[]
}

export const Filter = ({labelText, name, onChange, options}: FilterProps) => {
  return (
    <div className='gap-2'>
      <Label labelText={labelText} />
      <Select label="" name={name}  onChange={onChange} options={options} />
    </div>
  )
}
