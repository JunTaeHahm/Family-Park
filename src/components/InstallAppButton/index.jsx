import { Container } from './styles';
import React, { useState, useEffect } from 'react';

const InstallAppButton = () => {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallApp = () => {
    // Show the prompt
    prompt.prompt();
    // Wait for the user to respond to the prompt
    prompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setPrompt(null);
    });
  };

  return (
    <Container>
      {prompt !== null && <button onClick={handleInstallApp}>Install as App</button>}
    </Container>
  );
};

export default InstallAppButton;
