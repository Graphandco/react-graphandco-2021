import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import TextField from './TextField';
import { TextField } from '@material-ui/core';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Checkbox from './Checkbox';
// import ButtonContact from './ButtonContact';
import Button from '../Button';

const SERVICE_ID = 'service_zfif42a';
const TEMPLATE_ID = 'template_w7r6zhj';
const USER_ID = 'user_0u115ugzQWZ0sPRaOzsiy';

const ContactForm = () => {
  //const [values, setValues] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');
  const [nameMissing, setNameMissing] = useState('');
  const [emailMissing, setEmailMissing] = useState('');
  const [wrongEmail, setWrongEmail] = useState();
  const [messageMissing, setMessageMissing] = useState('');
  const emailRegex = /\S+@\S+\.\S+/;

  let history = useHistory();

  const sendForm = (e) => {
    setNameMissing('');
    setEmailMissing('');
    setWrongEmail('');
    setMessageMissing('');
    e.preventDefault();
    const data = {
      name,
      email,
      object,
      message,
    };

    if (!name) {
      setNameMissing('Merci de bien vouloir saisir votre nom');
    } else if (!email) {
      setEmailMissing('Merci de bien vouloir saisir votre adresse mail');
    } else if (!emailRegex.test(email)) {
      setWrongEmail('Merci de bien vouloir saisir un email valide');
    } else if (!message) {
      setMessageMissing('Merci de bien vouloir saisir votre message');
    } else {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
        function (response) {
          console.log(response.status, response.text);
          setName('');
          setEmail('');
          setObject('');
          setMessage('');
          notify();
          setTimeout(function () {
            history.push('/');
          }, 3000);
        },
        function (err) {
          console.log(err);
        },
      );
    }
  };

  const notify = () =>
    toast('Votre message a bien été envoyé ! Nous vous répondrons très vite !', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // function handleForm() {
  //   const { name, email, object, message, rgpd } = values;
  //   const data = {
  //     name,
  //     email,
  //     object,
  //     message,
  //     rgpd,
  //   };
  //   emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
  //     function (response) {
  //       console.log(response.status, response.text);
  //       setValues({});
  //       notify();
  //     },
  //     function (err) {
  //       console.log(err);
  //     },
  //   );
  // }

  // const INITIAL_FORM_STATE = {
  //   name: '',
  //   email: '',
  //   object: '',
  //   message: '',
  //   rgpd: false,
  // };

  // const FORM_VALIDATION = Yup.object().shape({
  //   name: Yup.string().required('Merci de renseigner votre nom'),
  //   email: Yup.string().email('Merci de renseigner un email valide').required('Merci de renseigner votre email'),
  //   object: Yup.string(),
  //   message: Yup.string().required('Merci de renseigner votre message'),
  //   // rgpd: Yup.boolean()
  //   //   .oneOf([true], "Merci d'accepter les termes de la politique de confidentialité")
  //   //   .required("Merci d'accepter les termes de la politique de confidentialité"),
  // });

  return (
    <div className="contact-wrapper">
      <div className="contact-form">
        {/* <Button onClick={notify} title="Click !"></Button> */}
        <ToastContainer />
        <form>
          <div className="form-body">
            <TextField fullWidth name="name" label="Nom" value={name} className="form-field" onChange={(e) => setName(e.target.value)} />
            {nameMissing && <div className="error-message">{nameMissing}</div>}
            <TextField fullWidth name="email" label="Email" value={email} className="form-field" onChange={(e) => setEmail(e.target.value)} />
            {emailMissing && <div className="error-message">{emailMissing}</div>}
            {wrongEmail && <div className="error-message">{wrongEmail}</div>}
            <TextField fullWidth name="object" label="Objet" value={object} className="form-field" onChange={(e) => setObject(e.target.value)} />
            <TextField
              fullWidth
              name="message"
              label="Message"
              value={message}
              multiline
              rowsMax={6}
              className="form-field"
              onChange={(e) => setMessage(e.target.value)}
            />
            {messageMissing && <div className="error-message">{messageMissing}</div>}
          </div>
          <Button title="Envoyer" onClick={sendForm} />
        </form>
        {/* <Formik
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
            <ButtonContact />
          </Form>
        </Formik> */}
      </div>
      <img src="/img/contact.svg" alt="Contact" />
    </div>
  );
};

export default ContactForm;
