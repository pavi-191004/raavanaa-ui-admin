

type ButtonProps = {
  buttonText: string;
  onClick: () => void;
};

export const Button = ({buttonText,onClick}: ButtonProps) => {
  return (

    <button className="button" onClick={onClick}>{buttonText}</button>
  )
}