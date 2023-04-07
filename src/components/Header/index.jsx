import { useState } from "react"
import { navlinks } from "../../constants"
import NavLink from "../NavLink"
import CustomButton from "../CustomButton"
import { ImMenu } from "react-icons/im"
import { MdOutlineClose } from "react-icons/md"

import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <motion.header initial={{opacity: 0}} whileInView={{opacity: 1}} className='h-[90px] bg-secondary w-full sticky top-0 z-[3]'>
        <nav className="md:flex h-full w-[90%] mx-[auto] hidden items-center justify-between">
            <div className="flex items-center gap-[30px]">
                <h2 className="text-primaryText font-roboto font-bold text-[1rem]"> ArbGold </h2>
                <ul className="md:flex hidden items-center gap-[20px] ml-[30px]">
                { navlinks.map(link => (
                    <NavLink styles="text-primaryText" link={link} key={link.id} />
                )) }
                </ul>
            </div>
            <div className="flex items-center gap-[20px]">
                <CustomButton title="Launch App" styles="bg-primary text-secondaryText border-none outline-none" />
                <CustomButton title="Connect Wallet" styles="bg-transparent border-[1px] border-[#CEFF03] text-primaryText" />
            </div>
        </nav>

        {/* mobile menu */}
        <div className="md:hidden z-[2] relative flex w-full h-full justify-between items-center px-[20px]">
            <h2 className="text-primaryText md:hidden font-roboto font-bold text-[1.5rem]"> ArbGold </h2>
            <ImMenu onClick={() => setShowMenu(true)} className="text-primary text-[2rem] cursor-pointer" />
        </div>

      <AnimatePresence >
        { showMenu && (
                <motion.div 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}}
                    exit={{opacity: 0}} 
                    className="md:hidden z-[9] absolute p-[20px] top-0 right-0 flex flex-col h-screen w-[400px] bg-primaryText">
                    <MdOutlineClose 
                    onClick={() => setShowMenu(false)} 
                    className="text-secondaryText bg-primary rounded-md p-[3px] text-[2rem] cursor-pointer" />

                    <div className="h-[60%] mt-[40px] flex flex-col justify-between items-start w-full">
                        <ul className="md:hidden flex flex-col items-center gap-[40px] ml-[30px]">
                        { navlinks.map(link => (
                            <NavLink styles="text-secondaryText" link={link} key={link.id} />
                        )) }
                        </ul>
                        <div className="flex flex-col items-center gap-[20px]">
                            <CustomButton title="Launch App" styles="bg-primary text-secondaryText border-none outline-none" />
                            <CustomButton title="Connect Wallet" styles="bg-transparent border-[2px] border-[#CEFF03] text-secondaryText" />
                        </div>
                    </div>
                </motion.div>
        ) }
      </AnimatePresence>

    </motion.header>
  )
}

export default Header