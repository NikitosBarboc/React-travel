import React from 'react';
import Title from '../Title';
import './welcome.css';

type welcomeSectionProps = {
  titleText: string,
  children: React.ReactNode,
  button: React.ReactNode,
}

function WelcomeSection(props: welcomeSectionProps) {
  const { titleText, children, button } = props;
  return (
    <section className="welcome">
      <div className="welcome-wrapper">
        <Title cls="welcome-title" text={titleText} />
        {children}
        {button}
      </div>
    </section>
  );
}
export default WelcomeSection;
