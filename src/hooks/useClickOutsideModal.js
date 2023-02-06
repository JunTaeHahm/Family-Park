import { useEffect } from 'react';

function useClickOutsideModal(ref, handler) {
  // ref와 클릭 한 요소가 다를 경우 handler 실행
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);

  return;
}

export default useClickOutsideModal;
