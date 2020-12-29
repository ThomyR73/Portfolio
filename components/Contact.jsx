import React, { useReducer, useState } from "react";

import axios from "axios";

import styles from "../styles/Contact.module.scss";

const formReducer = (state, action) => {
  switch (action.type) {
    case "updateValue":
      return {
        ...state,
        values: { ...state.values, [action.input]: action.text },
        validation: { ...state.validation, [action.input]: action.validation },
      };
    case "updateBlur":
      return {
        ...state,
        touched: { ...state.touched, [action.input]: true },
      };
    case "showErrors":
      return {
        ...state,
        touched: {
          name: true,
          email: true,
          message: true,
        },
      };
    case "reset":
      return intitialValue;
  }
};

const intitialValue = {
  values: {
    name: "",
    email: "",
    message: "",
  },
  validation: {
    name: false,
    email: false,
    message: false,
  },
  touched: {
    name: false,
    email: false,
    message: false,
  },
};

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, intitialValue);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (text, input) => {
    let validation = true;
    if (text.length === 0) {
      validation = false;
    }
    if (input === "email" && !emailRegex.test(text.toLowerCase())) {
      validation = false;
    }
    dispatchFormState({ type: "updateValue", input, text, validation });
  };

  const handleBlur = (input) => {
    dispatchFormState({ type: "updateBlur", input });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      !formState.validation.name ||
      !formState.validation.email ||
      !formState.validation.message
    ) {
      dispatchFormState({ type: "showErrors" });
      return;
    }
    try {
      const response = await axios({
        method: "POST",
        url: "https://app.99inbound.com/api/e/UMhl7GxR",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: {
          name: formState.values.name,
          email: formState.values.email,
          message: formState.values.message,
        },
      });
      dispatchFormState({ type: "reset" });
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={styles.contact} id="contact">
      <h3>Trabajemos Juntos!</h3>
      <form onSubmit={(e) => sendEmail(e)}>
        <label>
          Nombre
          <br />
          <input
            onChange={(text) => handleChange(text.target.value, "name")}
            onBlur={() => handleBlur("name")}
            value={formState.values.name}
          />
        </label>
        {!formState.validation.name && formState.touched.name && (
          <span>Por favor ingrese un nombre valido</span>
        )}
        <label>
          Email
          <br />
          <input
            onChange={(text) => handleChange(text.target.value, "email")}
            onBlur={() => handleBlur("email")}
            value={formState.values.email}
          />
        </label>
        {!formState.validation.email && formState.touched.email && (
          <span>Por favor ingrese un email valido</span>
        )}
        <label>
          Mensaje
          <br />
          <textarea
            rows={10}
            onChange={(text) => handleChange(text.target.value, "message")}
            onBlur={() => handleBlur("message")}
            value={formState.values.message}
          ></textarea>
        </label>
        {!formState.validation.message && formState.touched.message && (
          <span>Por favor ingrese un mensaje valido</span>
        )}
        <input type="submit" value="Enviar" className={styles.button} />

        <div className={`${styles.error} ${!error ? "hide" : ""}`}>
          <p>Ha ocurrido un error por favor inténtelo luego</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            height={20}
            width={20}
            onClick={() => setError(false)}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className={`${styles.success} ${!success ? "hide" : ""}`}>
          <p>El mensaje fue enviado correctamente</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            height={20}
            width={20}
            onClick={() => setSuccess(false)}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default Contact;
