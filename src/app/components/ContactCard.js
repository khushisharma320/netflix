import { MdEmail } from "react-icons/md";
import { SiLivechat } from "react-icons/si";
import { CgCommunity } from "react-icons/cg";

const ContactCard = () => {

    const links = [
        {
            id : 1,
            icon : <MdEmail size={25}/>,
            heading : "Email",
            para1 : "Monday to Friday Expected",
            para2 : "Response Time : 72 hours",
            para3 : "Send Email ->",
        },
        {
            id : 2,
            icon : <SiLivechat size={25}/>,
            heading : "Live Chat",
            para1 : "Weekdays : 9 AM - 6 PM ET",
            para2 : "Weekends : 9 AM - 5 PM ET",
            para3 : "Chat Now ->",
        },
        {
            id : 3,
            icon : <CgCommunity size={25}/>,
            heading : "Community Forum",
            para1 : "Monday to Friday Expected",
            para2 : "Response Time : 72 hours",
            para3 : "Ask The Community ->",
        },
    ];

  return (
    <div>
      <h2 className="text-center mt-10 text-2xl font-bold">Contact Page</h2>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
        {
            links.map(({id, icon, heading, para1, para2, para3})=>{
                return (
                    <>
                    <div key={id} className="flex flex-col justify-center items-center shadow-md shadow-black w-80 m-8 text-sm font-light gap-2 p-4">
                        <p className="text-red-800">{icon}</p>
                        <h4 className="font-bold">{heading}</h4>
                        <div>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        </div>
                        <p>{para3}</p>
                    </div>
                    </>
                )
            })
        }
      </div>
    </div>
  )
}

export default ContactCard;