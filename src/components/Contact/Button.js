import React from "react";
import { useFormikContext } from "formik";

const Button = ({
    ...otherProps
}) => {
   const { submitForm } = useFormikContext();

   const handleSubmit = () => {
      submitForm();
   };

   const configButton = {
       onClick: handleSubmit
   }

   return (
      <button {...configButton} className="btn btn-primary">
         Envoyer
      </button>
   );
};

export default Button;
