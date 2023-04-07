import {TbTopologyStar3} from "react-icons/tb"
import {RiExternalLinkLine} from "react-icons/ri"

const Waitlists = () => {
  return (
    <div className="min-h-[500px] h-[500px] bg-primary">
        <div className="flex p-[40px] h-full w-[80%] mx-auto flex-col justify-center items-center gap-[30px]">
            <div className="flex items-center gap-[10px]">
                <TbTopologyStar3 />
                <TbTopologyStar3 />
                <TbTopologyStar3 />
            </div>

            <div>
                <h3 className="text-secondaryText font-roboto font-semibold md:text-[3rem] text-[1.5rem]"> We are ready to <span>help</span> you project <br />
                    grow and get <span>fund</span> it
                 </h3>
                 <p className="text-secondaryText font-roboto mt-[10px] font-semibold md:text-[16px] text-[14px]">Turn your films dreams into reality and make your project success <br />
                  with the support of passionate investors on our platform
                  </p>
            </div>

            <div className="flex md:flex-row flex-col mt-[15px] items-center gap-[10px]">
                <input type="text" placeholder="Join waitlists" className="p-[10px] border-[2px] border-secondary bg-[transparent]  outline-none md:w-[400px] w-[300px] text-secondaryText placeholder:text-secondaryText " />
                <button className="p-[10px] flex items-center gap-x-[10px] bg-secondary text-primaryText font-roboto font-medium md:text-[18px] text-[16px] "> 
                Join Waitlists 
                <RiExternalLinkLine className="font-medium md:text-[18px] text-[16px]" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Waitlists