import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="input"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="text"
          id="email"
          className="input"
          placeholder="Your Email"
        />
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
      </div>
      <div className="btn-wrapper">
        <button className="btn primary-btn">Send message</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  margin: 3rem 0 ;
  max-width: 560px;
  padding:0 1rem;
  
  .form-row {
  }
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
