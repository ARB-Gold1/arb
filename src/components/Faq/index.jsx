import FaqCard from "../FaqCard"
import { faqs } from "../../constants"

const Faq = () => {

    console.log(faqs)

  return (
    <div className='min:h-[800px] md:pt-[0] md:h-[900px] h-[850px] bg-secondary '>
        <div className='w-[80%] h-full flex flex-col md:pt-[0] pt-[20px] gap-y-[30px] mx-auto'>
            <div className='flex flex-col items-start gap-[20px]'>
                <span className='text-primaryText border-[1px] border-[#fff] font-roboto rounded-[20px] p-[10px] font-medium md:text-[16px] text-[14px]'> Frequently asked questions </span>
                <h3 className='text-primaryText md:text-[3rem] text-[2rem] font-roboto font-semibold'> The following is a list of all questions <br />
                    that have been asked about <span className='text-primary italic underline'>ARBGold</span>
                 </h3>
            </div>

            <div className="md:mt-[30px] flex flex-col gap-y-[10px] ">
                { faqs.map(faq => (
                    <FaqCard key={faq.id} faq={faq} />
                )) }
            </div>
        </div>
    </div>
  )
}

export default Faq