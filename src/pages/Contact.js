import React from "react";
import ContactContent from "../components/Contact/ContactContent";
import ContactForm from "../components/Contact/ContactForm";
import PageAttributes from "./PageAttributes";

const Contact = () => {
   
   return (
      <>
      <PageAttributes bodyID="contact" pageTitle="Contact" />;
      <div className="contact container">
         <ContactContent />
         <ContactForm />
      </div>
      </>
   );
};

export default Contact;
