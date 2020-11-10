import { useState } from 'react';

import Button from '../components/button/Button';
import Card from '../components/card/Card';
import { Navigation } from '../components/navigation/Navigation.styles';
import request from '../modules/request';
import { Form, Input, Label } from '../styles/AddCommunity.styles';
import { AppWrapper, GlobalStyle } from '../styles/index.styles';

const AddCommunity = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [members, setMembers] = useState('');
  const [image, setImage] = useState('');

  const isEnabled =
    title.length > 0 &&
    url.length > 0 &&
    members.length > 0 &&
    image.length > 0;

  const submitForm = async () => {
    const query = `
      mutation {
        add(title: "${title}", url: "${url}", members: ${members}, image: "${image}"){
          title
          url
          members
          image
        }
      }
    `;

    const response = await request(query);

    //Function run after 10sec
    setTimeout(() => {
      alert(`Success!The ${title} community added!`);
      //clear form
      Array.from(document.querySelectorAll('input')).forEach(
        (input) => (input.value = '')
      );
    }, 10000);
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <h1>WELCOME</h1>
      <Card title="Add community form">
        <Form id="form">
          <Label>
            Title:
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Label>
          <Label>
            Url:
            <Input
              type="text"
              name="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </Label>
          <Label>
            Members:
            <Input
              type="number"
              name="members"
              value={members}
              onChange={(event) => setMembers(event.target.value)}
            />
          </Label>
          <Label>
            Image:
            <Input
              type="text"
              name="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </Label>
          <Button text="Add" action={submitForm} disabled={!isEnabled} />
        </Form>
      </Card>
      <Navigation href="/">Home</Navigation>
    </AppWrapper>
  );
};

export default AddCommunity;
