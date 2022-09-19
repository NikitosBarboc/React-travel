import React from 'react';
import Button from './Button';
import emailIcon from '../assets/Mail.png'
import InfoBlock from './InfoBlock';


function Main() {
  return (
    <main>
      <section className="main__buttons-link">
        <Button 
          cls="main__button"
          img={emailIcon}
          alt="email"
          text='email'
        />
      </section>
      <section>
        <div className="main__info-blocks">
          <InfoBlock
            cls='main__info-block'
            title='About'
            text='I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
          />
          <InfoBlock
            cls='main__info-block'
            title='Interests'
            text='Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
