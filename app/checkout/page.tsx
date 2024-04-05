"use client"
import { useSearchParams } from 'next/navigation'

export default  function Page() {

  const searchParams = useSearchParams();
  const canceled = searchParams.get('status');

  return (
    <div className='py-10'>
    {canceled == "true" && 
    <div className="text-center items-center text-black">
        <p className='font-bold text-5xl mb-10'>You're All Set!</p>
        <p className='text-sm'>We'll send you can email with tracking information once your Order's Ready </p>
    </div> || !canceled && 
     <div className="text-center items-center text-black">
     <p className='font-bold text-5xl mb-10'>Your Cart Is Empty!</p>
     <p className='text-sm'>Keep shopping around until you find something you love</p>
 </div> }
  </div>
  )
}