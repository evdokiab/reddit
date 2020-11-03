import { useEffect, useState } from 'react';

import Trending from '../components/trending/Trending';
import request from '../modules/request';
import { AppWrapper, GlobalStyle } from '../styles/index.styles';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      const query = `{
        get {
          title
          url
          image
          members
        }
      }`;

      const response = await request(query);
      setData(response);
    };
    queryData();
  }, []);

  return (
    <AppWrapper>
      <GlobalStyle />
      <Trending communities={data} />
    </AppWrapper>
  );
};

export default Home;
