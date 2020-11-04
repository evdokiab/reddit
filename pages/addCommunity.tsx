import { useEffect, useState } from 'react';

import Button from '../components/button/Button';
import Card from '../components/card/Card';
import request from '../modules/request';
import { Form, Input, Label } from '../styles/AddCommunity.styles';
import { AppWrapper, GlobalStyle } from '../styles/index.styles';

const AddCommunity = (): JSX.Element => {
  const [newData, getNewData] = useState([]);

  // useEffect(() => {
  //   const queryData = async () => {
  //     const query = `{
  //       // put mutation here
  //     }`;

  //     const response = await request(query);
  //     getNewData(response);
  //   };
  //   queryData();
  // }, []);

  return (
    <AppWrapper>
      <GlobalStyle />
      <h1>WELCOME</h1>
      <Card title="Add community form">
        <Form>
          <Label>
            Title:
            <Input type="text" name="title" />
          </Label>
          <Label>
            Url:
            <Input type="text" name="url" />
          </Label>
          <Label>
            Image:
            <Input type="text" name="image" />
          </Label>
          <Label>
            Members:
            <Input type="text" name="members" />
          </Label>
          <Button text="Add"></Button>
          {/* <input type="submit" value="Submit" /> */}
        </Form>
      </Card>
    </AppWrapper>
  );
};

export default AddCommunity;
