import React from 'react'

const ApplicationCard = ({applicant}) => {
  return (
    <div className={`applicationCard`}>

        <div className={`flex ${applicant.position === "middle" ? "bg-primary" : "bg-[#C2C2C2]" } p-[20px] flex-col md:h-[300px] opacity-[0.75] h-[250px] justify-between md:w-[300px] w-[250px]`}>
            <span className='md:text-[18px] text-[16px] font-roboto font-semibold '> 0{applicant.id} </span>
            <div>
                <h3 className='text-secondaryText font-roboto font-bold md:text-[2rem] text-[1.3rem]'> {applicant.title} </h3>
                <p className='text-secondaryText font-roboto font-bold md:text-[16] text-[14px]'> {applicant.description} </p>
            </div>
        </div>

    </div>
  )
}

export default ApplicationCard