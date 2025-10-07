type SubHeadingProps = {
    subheadingText : string;
}

export const Subheading = ({subheadingText}: SubHeadingProps) => {
  return (
    <p>{subheadingText}</p>

  )
}
