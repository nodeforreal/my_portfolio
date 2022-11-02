import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, submitForm] = useForm("meqdpjvy");

  if (state.succeeded) {
    return (
      <h3
        className="text-center"
        style={{ margin: "160px 0", textShadow: "var(--text-shadow)" }}
      >
        Thank you for getting in touch!
      </h3>
    );
  }

  return (
    <Wrapper onSubmit={submitForm}>
      <div className="form-row">
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          className="input"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="Your Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="form-row">
        <label htmlFor="message" className="label">
          Message:
        </label>
        <textarea
          className="input"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="btn-wrapper">
        <button
          className="btn primary-btn"
          type="submit"
          disabled={state.submitting}
        >
          Send message
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  margin: 3rem 0;
  max-width: 560px;

  .label {
    font-size: var(--small-text);
    font-weight: 520;
    color: var(--secondary);
  }

  .input {
    margin: 0.5rem 0 1.5rem 0;
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: var(--borderRadius);
    background-color: #edf2f8;
    font-size: var(--small-text);
    display: block;

    &:focus {
      outline: none;
    }
  }

  .btn-wrapper {
    margin-top: 2rem;
    display: flex;
  }

  .primary-btn {
    margin: 0 auto;
  }
`;

export default ContactForm;
