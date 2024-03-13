"use client";
import { useState } from 'react';


const ContactForm = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => (
            {
                ...prevUser,
                [name]: value
            }
        )
        );

    };


    const handleSubmit = async (e) => {
        
        e.preventDefault();
     
            // Set the status based on the response from the API route
            if (user.name.length < 4) {
                setStatus('nameError');
            } else if(user.phoneNumber.length < 10 || user.phoneNumber.length > 10){
                setStatus('phoneError');
            }
            else {
                setUser({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                })
                setStatus('success');
            }


    }



    return (
        <div className="my-20">
            <h2 className="mb-10 text-center">we love to hear <span className="text-red-800">from you</span></h2>
            <div className="flex justify-center items-center">
                <div className="w-72 shadow-lg shadow-black p-8">
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="name" className="text-sm font-semibold">Enter Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" className="border-2 border-gray w-52 mb-2" value={user.name} onChange={handleChange} required />
                        {status === "nameError" && <p className="text-red-800 text-sm pb-4">Please enter valid name.</p>}
                        </div>
                        <div>
                        <label htmlFor="email" className="text-sm font-semibold">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" className="border-2 border-gray w-52 mb-4" value={user.email} onChange={handleChange} required />
                        </div>
                        <div>
                        <label htmlFor="phoneNumber" className="text-sm font-semibold">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" className="border-2 border-gray w-52 mb-2" value={user.phoneNumber} onChange={handleChange} required />
                        {status === "phoneError" && <p className="text-red-800 text-sm pb-4">Please enter valid Phone Number.</p>}
                        </div>
                        <div>
                        <label htmlFor="message" className="text-sm font-semibold">Message</label>
                        <textarea name="message" id="message" cols="20" rows="5" className="border-2" value={user.message} onChange={handleChange} required />
                        </div>
                        {status === "success" && <p className="text-green-800 text-sm">Thank you for submitting the form.</p>}
                        <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
