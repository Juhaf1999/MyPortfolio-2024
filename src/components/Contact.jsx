import React from 'react'

const Contact = () => {
    const config = {
        email:" hjuhaf@gmail.com",
        phone:" +94750717028"
    }
  return (
    <section id='contact' className="flex flex-col px-4 py-32  secondary  text-white ">
        <div className=" flex flex-col items-center ">

          <h1 className="text-4xl font-bold  border-b-4 border-[white] w-[135px] mb-5 ">
           Contact
          </h1>
          <p className="pb-5 ">
            If you want to discuss more in detail, Please contact me
          </p>
          <p className='py-2'><span className='font-bold'>Email:</span>{config.email} </p>
          <p className='py-2'><span className='font-bold'>Phone:</span>{config.phone} </p>

         
        </div>
    </section>
  )
}

export default Contact