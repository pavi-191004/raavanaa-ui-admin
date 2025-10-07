
import { Heading } from '../Atoms/Heading'
import { Subheading } from '../Atoms/Subheading'


export const Header = () => {
  return (
    <div className='mt-3 align-items-center container shadow-sm p-3'>
        <Heading headingText={"Recruiter Management"} />
        <Subheading subheadingText={"Manage company recruiters and partnerships"} />
        

    </div>
  )
}
