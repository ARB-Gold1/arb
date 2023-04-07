import {useState} from 'react'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import  { motion } from "framer-motion"

const FaqCard = ({faq: {question, answer}}) => {
    const [expanded, setExpanded] = useState(false);

    const expanding = (expand) => {
        setExpanded(!expand)
    }

  return (
    <div className='w-full md:min-h-[100px] min-h-[80px]'>
        <div className='flex justify-between bg-primary p-[20px] items-center rounded-[10px]'>
            <h3 className='text-secondaryText font-roboto font-semibold md:text-[2rem] text-[16px]'> {question} </h3>
            { expanded ? 
             <IoIosArrowUp onClick={() => expanding(true)} className='text-secondaryText md:text-[2rem] text-[1.5rem] cursor-pointer' /> : 
             <IoIosArrowDown onClick={() => expanding(false)} className='text-secondaryText md:text-[2rem] text-[1.5rem] cursor-pointer' /> }
        </div>

        { expanded && (
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className='bg-[gray] z-10 p-[20px] rounded-[10px]'>
                <p className='text-primaryText font-roboto font-normal text-[16px]'> {answer} </p>
            </motion.div>
        ) }
    </div>
  )
}

export default FaqCard