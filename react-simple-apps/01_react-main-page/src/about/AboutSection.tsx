import React from 'react';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Title from '../Title';
import './about.css';

function About() {
  return (
    <section className="about">
      <div className="about-content content">
        <Title
          cls="about-title"
          text="Let's hear about Kayla's success story"
        />
        <Paragraph
          cls="about-paragraph"
          text="See how well Alivio works in a real customer’s life."
        />
        <Button
          cls="green-button about-button"
          text="Let’s get started"
          modalWindowInfo={{ title: 'Good luck!', text: 'some info about something' }}
        />
      </div>
      <div className="about-video" />
    </section>
  );
}

export default About;
