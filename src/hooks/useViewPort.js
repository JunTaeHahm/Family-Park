import { useEffect, useState } from 'react';

export const useViewPort = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth); // viewPort 가로

  /* viewPort 사이즈 변경 감지 */
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeListener);
  }, []);

  return { innerWidth };
};
