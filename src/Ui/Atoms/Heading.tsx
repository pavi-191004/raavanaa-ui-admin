type HeadingProps = {
    headingText : string;
}

export const Heading = ({headingText}: HeadingProps) => {
  return (
    <h2>{headingText}</h2>
  )
}
