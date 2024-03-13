
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {

    return (
        <>

            <ContactCard />


            <ContactForm />

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19548.614330679644!2d79.40697465628016!3d28.387335893970295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1709827367727!5m2!1sen!2sin" width={600} height={450} className="border-0 w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </>


    )
}

export default Contact;