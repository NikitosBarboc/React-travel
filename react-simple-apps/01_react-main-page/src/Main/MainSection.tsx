import React from 'react';
import Paragraph from '../Paragraph';
import Title from '../Title';
import Card from './Card';
import './main.css';

function MainSection() {
  return (
    <main className="main">
      <div className="main__header">
        <Title
          cls="main__title title"
          text="Understand & Release the stress in 3 steps"
        />
        <Paragraph
          cls="main__paragraph"
          text="Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress."
        />
      </div>
      <div className="main__main">
        <Card
          number="01"
          title="Personalize"
          text="Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!"
          // img={{ imgSrc: '../assets/Rectangle 32.png', imgAlt: '' }}
        />
        <Card
          number="02"
          title="Write & Understand"
          text="Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!"
          // img={{ imgSrc: '../assets/Rectangle 31.png', imgAlt: '' }}
        />
        <Card
          number="03"
          title="Alivio"
          text="Now you are aware, and have a way to manage and overcome your own stress. What are you waiting for? Alivio today!"
          // img={{ imgSrc: './Rectangle 30.png', imgAlt: '' }}
        />
      </div>
    </main>
  );
}

export default MainSection;
