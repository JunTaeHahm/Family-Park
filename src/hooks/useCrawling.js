import axios from 'axios';
import { useEffect, useState } from 'react';

export const useCrawling = () => {
  const [sayingData, setSayingData] = useState([]);
  const sayingCategories = [
    'love',
    'life',
    'study',
    'success',
    'friend',
    'book',
    'parting',
    'time',
    'effort',
    'hope',
    'challenge',
    'confidence',
  ];
  useEffect(() => {
    axios
      .post('/api/famous', { category: sayingCategories[Math.floor(Math.random() * 12)] })
      .then((res) => setSayingData(res.data))
      .catch((error) => console.log(error));
  }, []);

  let indexArray = [];
  if (sayingData) indexArray = sayingData.flatMap((arr) => arr);

  return { indexArray, sayingData };
};
