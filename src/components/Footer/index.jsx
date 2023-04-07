import {footerLinks} from "../../constants"

const Footer = () => {
  return (
    <div className="md:h-[100px] h-[150px] bg-secondary w-full">
    
        <div className="flex items-center md:flex-row flex-col md:py-[0] py-[20px] px-[35px] justify-between w-full h-full">
            <div className="flex items-center gap-[10px]">
                <h2 className="text-primaryText font-roboto font-semibold md:text-[2rem] text-[16px]"> ARBGold | </h2>
                <span className="text-primaryText font-roboto font-normal md:text-[14px] text-[12px]"> copyrights@2023 ARBGold. All rights reserved </span>
            </div>
            <ul className="flex items-center md:flex-nowrap flex-wrap gap-[20px]">
                {footerLinks.map(link => (
                    <li className="text-primaryText font-roboto font-semibold md:text-[16px] text-[14px] whitespace-nowrap " key={link.id}>
                        <a href="#">{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Footer