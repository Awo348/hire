import React from "react";
import "./about.css";
import Layout from "../../utils/layout/layout";
import Header from "../../components/header/header";
import AboutUs from "../../components/about-us/aboutUs";
import ContactForm from "../../components/contact-form/contactForm";
import Works from "../../components/works/works";
import First from "../../components/first/first";

const About = () => {
  return (
    <Layout>
      <Header />
      <AboutUs />
      <ContactForm />
      <Works />
      <First />
    </Layout>
  );
};

export default About;
