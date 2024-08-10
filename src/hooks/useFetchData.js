import { useState, useEffect } from 'react';
import detailsData from '../detailsData';

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setData(detailsData);
      setLoading(false);
  }, [data]);

  return { data, loading };
};

export default useFetchData;