type LabelProps = {
    labelText : string;
}

export const Label = ({labelText}: LabelProps) => {
  return (
    <label>{labelText}</label>
  )
    
}
