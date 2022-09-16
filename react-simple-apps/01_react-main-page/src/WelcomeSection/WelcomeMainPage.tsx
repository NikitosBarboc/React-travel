import React from 'react';
import Button from '../Button';
import Paragraph from '../Paragraph';
import WelcomeSection from './WelcomeSection';

function WelcomeMainPage() {
  return (
    <WelcomeSection
      titleText="Be aware, Manage well."
      button={(
        <Button
          cls="welcome-button green-button"
          text="Find Your Way"
          modalWindowInfo={{ text: 'info info info info info info info info info info info info info info info', title: 'More info' }}
        />
)}
    >
      <Paragraph
        cls="welcome-text"
        text="Everyone experiences stress in different ways. Let Alivio guide you, in a personalized journal experience, to overcome your stress."
      />
    </WelcomeSection>
  );
}

export default WelcomeMainPage;
