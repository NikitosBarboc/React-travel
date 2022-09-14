import React from 'react';
import SplitPane from './SplitPane';
import WelcomeDialog from './WelcomeDialog';

function App() {
  return (
    <SplitPane
      left={
        <WelcomeDialog />
      }
      right={
        <WelcomeDialog />
      }
    />
  );
}

export default App;
