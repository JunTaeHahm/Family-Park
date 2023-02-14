import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const InstallAppButton = () => {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Chrome 67 및 이전 버전에서 자동으로 프롬프트 표시 안 함
      e.preventDefault();
      // 나중에 트리거될 수 있도록 이벤트를 저장
      setPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallApp = () => {
    // 프롬프트 보여주기
    prompt.prompt();
    // 유저의 프롬프트 응답 기다리기
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
