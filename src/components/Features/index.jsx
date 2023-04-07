import {motion} from "framer-motion"

const Features = ({headline, title, subtitle, image, btnTitle, BtnIcon, direction}, ) => {

  return (
    <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} className="w-full md:h-[600px] min-h-[600px] p-[20px] flex items-center bg-secondary">

        <div className={`flex w-[80%] ${direction === "rightToLeft" ? "md:flex-row-reverse": "md:flex-row" } mx-auto items-center justify-between md:gap-[20px]  gap-y-[50px] flex-col`}>
            <img src={image} alt="image" className="md:w-[400px] w-[300px] md:h-[400px] h-[300px] object-cover border-[3px] border-[#000] " />

            <div className="flex flex-col gap-y-[10px] md:w-[550px] w-[350px] ">
                <span className="text-primaryText w-[max-content] border-[1px] border-[#fff] py-[3px] px-[8px] rounded-[10px]"> {headline} </span>
                <h3 className="text-primaryText md:text-[3rem] text-[1.5rem]  font-roboto font-semibold"> {title} </h3>
                <p className="text-primaryText font-roboto font-medium md:text-[16px] text-[14px]"> {subtitle} </p>
                <div className="bg-primary p-[10px] rounded-[10px] flex items-center gap-x-[10px] w-[max-content] mt-[30px] ">
                    <span> { btnTitle } </span>
                    <BtnIcon />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Features