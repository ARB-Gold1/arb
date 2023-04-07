import React from 'react'

const TaglineData = ({tagline: {title, desc, Icon}}) => {
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <h3 className='text-secondaryText text-[1.5rem] font-roboto font-semibold'> {title} </h3>
        <p className='text-secondaryText text-[1rem] font-roboto font-medium '> {desc} </p>
    </div>
  )
}

export default TaglineData