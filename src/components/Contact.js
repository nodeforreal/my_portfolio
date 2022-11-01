import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import AnimateAppSection from "./AnimateAppSection";
import contactBackground from "../assets/images/contact-background.png";

const Contact = () => {
  return (
    <Wrapper className="full-page section-grid section-bg-img" id="contact">
      <SocialMedia />
      <AnimateAppSection className="app-section">
        <h2 className="app-section-title">Take a coffee & chat with me</h2>
        <div className="contact-cards">
          <ContactCard
            icon={<MdEmail className="icon" />}
            label="kaliyamoorthy.2k@gmail.com"
            directTo="mailto:kaliyamoorthy.2k@gmail.com"
          />
          <ContactCard
            icon={<MdOutlinePhoneAndroid className="icon" />}
            label="+(91) 6383628557"
            directTo="tel:+(91) 6383628557"
          />
        </div>
        <ContactForm />
      </AnimateAppSection>
    </Wrapper>
  );
};

const ContactCard = ({ icon, label, directTo }) => {
  return (
    <a href={directTo} className="contact-card">
      <span className="grid-center">{icon}</span>
      <p>{label}</p>
    </a>
  );
};

const Wrapper = styled.section`
  background-color: var(--white);
  background-image: url(${contactBackground});
  background-repeat: no-repeat;
  background-size: 100% auto;

  .contact-cards {
    max-width: 590px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .contact-card {
    padding: 1rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
    transition: var(--transition);

    p {
      margin: 0;
    }

    .icon {
      color: var(--secondary);
      width: 36px;
      height: 36px;
    }

    &:hover {
      background-color: var(--secondary);
      .icon {
        color: var(--white);
      }
      p {
        color: var(--white);
      }
    }
  }

  @media screen and (max-width: 992px) {
    .contact-cards {
      max-width: 460px;
      padding: 1rem;
      grid-template-columns: 1fr;
    }
  }
`;
export default Contact;
