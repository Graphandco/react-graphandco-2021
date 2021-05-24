import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_zfif42a";
const TEMPLATE_ID = "template_w7r6zhj";
const USER_ID = "user_0u115ugzQWZ0sPRaOzsiy";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");
    const [nameMissing, setNameMissing] = useState(false);
    const [emailMissing, setEmailMissing] = useState(false);
    const [messageMissing, setMessageMissing] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value)
        setNameMissing(false)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        setEmailMissing(false)
    }

    const messageHandler = (e) => {
        setMessage(e.target.value)
        setMessageMissing(false)
    }

    function handleForm(e) {
        !name && setNameMissing(true);
        !email && setEmailMissing(true);
        !name && setMessageMissing(true);

        e.preventDefault();
        const data = {
        name,
        email,
        object,
        message,
        };

        if (name && email && message) {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
                function (response) {
                    console.log(response.status, response.text);
                    setName("");
                    setEmail("");
                    setObject("");
                    setMessage("");
                    },
                    function (err) {
                        console.log(err);
                }
            );
        }

    }

   return (
      <div className="contact-wrapper">
         <div className="contact-form">
            <form onSubmit={handleForm}>
               <div className="form-body">
                  <div className="form-item">
                     <label>Nom *</label>
                     {nameMissing && <div className="error">Merci de renseigner votre nom</div>}
                     <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={nameHandler}
                     />
                  </div>
                  <div className="form-item">
                     <label>Email *</label>
                    {emailMissing && <div className="error">Merci de renseigner votre email</div>}
                     <input
                        type="email"
                        id="name"
                        value={email}
                        onChange={emailHandler}
                     />
                  </div>
                  <div className="form-item">
                     <label>Objet</label>
                     <input
                        type="text"
                        id="name"
                        value={object}
                        onChange={(event) => setObject(event.target.value)}
                     />
                  </div>
                  <label>Message *</label>
                  {messageMissing && <div className="error">Merci de renseigner votre message</div>}
                  <div className="form-item">
                     <textarea
                        rows="5"
                        id="name"
                        value={message}
                        onChange={messageHandler}
                     />
                  </div>
               </div>
               <button className="btn btn-primary" type="submit">
                  Envoyer
               </button>
            </form>
         </div>
         <img src="/img/contact.svg" alt="Contact" />
      </div>
   );
};

export default ContactForm;
