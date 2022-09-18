import React, { useState } from 'react';
import PopUp from './popup';

function Content() {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {visibility ? 'Show content' : 'Hide content'}
      </button>
      <section>

        {visibility && <PopUp /> }
      </section>

    </div>
  );
}

export default Content;
