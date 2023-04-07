import React from 'react'
import { RiExternalLinkLine } from "react-icons/ri"
import { siri1, siri2 } from "../../assets"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className='h-[900px] md:h-[750px] hero w-full'>

        <div className='w-[100%] h-full bg-secondary opacity-[0.9] py-[30px] px-[50px] flex md:flex-row flex-col justify-between gap-[20px] mx-[auto]'>

            <div className='flex flex-col mt-[30px] gap-[20px] items-start'>
                <h3 className='text-primaryText font-roboto md:text-[4rem] text-[2rem] font-semibold'> The easiest <br />
                    way to get your <br />
                    <span className='text-primary underline font-roboto italic'> film funded </span> is <br />
                    to apply today
                </h3>
                <p className='text-primaryText font-roboto font-normal text-[1.3rem]'>
                    arb gold help filmmaker get their project funded fast. <br />
                    experienced and easily. list your project the site and <br />
                    investors from all over the world will fund it
                </p>

                <div className='flex items-center mt-[30px] bg-primary p-[10px] rounded-[5px] gap-[10px] font-roboto'>
                    <span className='text-secondaryText text-[1.2rem] font-medium'> Start Using ArbGold </span>
                    <RiExternalLinkLine className='text-secondaryText text-[1.2rem] font-medium' />
                </div>
            </div>

            <div className='flex relative right-0'>
                <img src={siri1} alt="siri1" className='md:w-[400px] w-[200px] md:h-[400px] h-[200px] object-cover rounded-tr-[100px] border-[4px] border-[#000]' />
                <img src={siri2} alt="siri2" className='md:w-[400px] w-[200px] md:h-[400px] h-[200px] object-cover rounded-bl-[100px] absolute md:left-[-200px] left-[100px] md:top-[70px] top-[20px] right-0 border-[4px] border-[#000]' />
            </div>
            
        </div>
    </motion.div>
  )
}

export default Hero