import Image from 'next/image'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <main className="bg-primary min-h-screen flex items-center gap-x-36">

      <section className='w-6/12 flex justify-end items-center'>

        <div>
          <p className='font-extralight text-[34px] leading-10 text-white'>Together</p>
          <h1 className='font-bold text-[74px] leading-10 text-white mt-4'>WeComply.</h1>
        </div>

      </section>

      <section className='w-6/12 flex flex-col items-start'>

        <div className='flex items-center gap-2 mt-10'>

          <input
            className='w-80 px-4 py-4 border rounded-xl shadow-md focus:outline-none focus:ring'
            type="text"
            name="id_no"
            placeholder='Search by ID Number'
          />
          
          <button className="bg-secondary p-4 rounded-xl text-white">
            <ArrowRightOnRectangleIcon className="h-6 w-6 pl-0.5" />
          </button>

        </div>

        <div>
          <p className='font-extralight text-[18px] leading-10 text-white mt-2'>Are you an admin? <span className='text-accent font-semibold'>Login</span> instead.</p>
        </div>

      </section>
    </main>
  )
}
