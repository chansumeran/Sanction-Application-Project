import { SignUp } from '@clerk/nextjs';

const Signup = () => {
  return (
    <div className='bg-primary h-screen flex justify-center items-center'>
        <div>
            <SignUp redirectUrl="/login"/>
        </div>
    </div>
  )
}

export default Signup