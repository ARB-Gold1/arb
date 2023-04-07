import { taglines } from "../../constants"
import TaglineData from "../TaglineData"
import {motion} from "framer-motion"

const Tagline = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className="w-full tagline md:h-[450px] h-[550px]">

        <div className="flex flex-col w-full h-full items-center justify-center bg-primary opacity-[0.75] gap-[20px] md:p-[0] px-[30px] ">
            <h3 className="text-secondaryText mt-[30px] md:text-[3rem] text-[2rem] font-roboto font-semibold"> Get your project funded <br />
                see how with <span className="underline text-primaryText font-roboto font-bold italic text-[3.2rem]"> ArbGold </span>
             </h3>
             <p className="text-secondaryText md:text-[16px] text-[14px] font-roboto font-normal"> Our team of experienced industry professionals is dedicated to helping <br /> you navigate the funding process and bring your film project to fruition </p>
             <div className="flex items-center gap-[30px] mt-[20px]">
                { taglines.map(tag => (
                    <TaglineData key={tag.id} tagline={tag} />
                )) }
             </div>
        </div>
    </motion.div>
  )
}

export default Tagline