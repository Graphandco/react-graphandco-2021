import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import Checkbox from './Checkbox';
import Button from './Button';

const SERVICE_ID = 'service_zfif42a';
const TEMPLATE_ID = 'template_w7r6zhj';
const USER_ID = 'user_0u115ugzQWZ0sPRaOzsiy';

const ContactForm = () => {
  const [values, setValues] = useState({});

  function handleForm() {
    const { name, email, object, message } = values;

    const data = {
      name,
      email,
      object,
      message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
        setValues({});
      },
      function (err) {
        console.log(err);
      },
    );
  }

  const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    object: '',
    message: '',
    rgpd: false,
  };

  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().required('Merci de renseigner votre nom'),
    email: Yup.string().email('Merci de renseigner un email valide').required('Merci de renseigner votre email'),
    object: Yup.string(),
    message: Yup.string().required('Merci de renseigner votre message'),
    rgpd: Yup.boolean()
      .oneOf([true], "Merci d'accepter les termes de la politique de confidentialité")
      .required("Merci d'accepter les termes de la politique de confidentialité"),
  });

  return (
    <div className="contact-wrapper">
      <div className="contact-form">
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            setValues(values);
            handleForm();
          }}
        >
          <Form>
            <TextField name="name" label="Nom" className="form-field" />
            <TextField name="email" label="Email" className="form-field" />
            <TextField name="object" label="Objet" className="form-field" />
            <TextField name="message" label="Message" multiline rowsMax={6} className="form-field" />
            <Checkbox name="rgpd" label="J'accepte les termes de la politique de confidentialité" />
            <Button />
          </Form>
        </Formik>
      </div>
      <img src="/img/contact.svg" alt="Contact" />
    </div>
  );
};

export default ContactForm;
