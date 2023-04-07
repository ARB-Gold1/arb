import React from 'react'

const CustomButtom = ({title, styles}) => {
  return (
    <div>
        <button className={`${styles} rounded-[10px] whitespace-nowrap w-[130px] py-[6px] px-[10px] font-medium font-roboto`}> {title} </button>
    </div>
  )
}

export default CustomButtom