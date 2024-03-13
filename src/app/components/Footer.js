import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";

const Footer = () => {

    const style = "font-bold border-b-2 border-gray-600";

    const links = [
        {
            id : 1,
            logo : <FaFacebook size={25}/>,
            color : "text-purple-800"
        },
        {
            id : 2,
            logo : <SiYoutubemusic size={25}/>,
            color : "text-yellow-800"
        },
        {
            id : 3,
            logo : <AiFillTwitterCircle size={27}/>,
            color : "text-pink-800"
        },
        {
            id : 4,
            logo : <FaSnapchat size={25}/>,
            color : "text-green-800"
        },

    ];

  return (
    <div className="text-gray-400 bg-black">
      <div className="flex justify-around pt-8">

        <h2 className="text-2xl">Khushi Sharma</h2>
        <ul className="flex gap-2">
        {
            links.map(({id, logo, color})=>{
                return (
                    <>
                    <li key={id} className={color}>{logo}</li>
                    </>
                )
            })
        }
        </ul>

        
      </div>
      <div className="flex p-12 justify-evenly">
        <div>
            <h4 className={`${style}`}>Company</h4>
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Get Started</li>
            </ul>
        </div>
        <div>
            <h4 className={`${style}`}>Servies</h4>
            <ul>
                <li>App Design</li>
                <li>Web Design</li>
                <li>Logo Design</li>
                <li>Banner Design</li>
            </ul>
        </div>
        <div>
            <h4 className={`${style}`}>Account</h4>
            <ul>
                <li>Profile</li>
                <li>My Account</li>
                <li>Prefrences</li>
                <li>Purchased</li>
            </ul>
        </div>
        <div>
            <h4 className={`${style}`}>Courses</h4>
            <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Photography</li>
                <li>Photoshop</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
