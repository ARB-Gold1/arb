import React from 'react'
import { applications } from '../../constants'
import ApplicationCard from '../ApplicationCard'

const Applications = () => {
  return (
    <div className='md:h-[700px] w-full min-h-[600px] bg-secondary'>
        <div className='flex flex-col w-[80%] p-[20px] mx-auto '>
            <div className='flex flex-col items-start gap-[20px]'>
                <span className='text-primaryText md:text-[1rem] rounded-[10px] p-[5px] border-[2px] font-roboto font-normal border-[#fff] w-[max-content] text-[14px]'> How it works </span>
                <h3 className='text-primaryText md:text-[3rem] text-[2rem] font-roboto font-semibold '> What you need to know about applying <br />
                 for funding for your film project
                 </h3>
                 <p className='text-primaryText md:text-[16px] text-[14px] font-roboto font-medium'> applying for funding for your film project doesn't have to be a daunting task. at our film funding organizations, we've <br />
                 streamlined the process to make as easy as possible. here's a quick overview the steps you need to take to apply for funding
                  </p>
            </div>

            <div className='flex mt-[30px] items-center md:flex-row flex-wrap gap-[20px]'>
                { applications.map(application => (
                    <ApplicationCard key={application.id} applicant={application} />
                )) }
            </div>
        </div>

    </div>
  )
}

export default Applications