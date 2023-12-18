import { SignIn } from '@clerk/nextjs';

const Login = () => {
  return (
    <div className='bg-primary h-screen flex justify-center items-center'>
        <div>
            <SignIn redirectUrl="/dashboard"/>
        </div>
    </div>
  )
}

export default Login