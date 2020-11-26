import { useState } from 'react';

import Button from '../components/button/Button';
import Card from '../components/card/Card';
import { Header } from '../components/header/Header';
import { Toast } from '../components/toast/Toast';
import request from '../modules/request';
import { Form, Input, Label } from '../styles/AddCommunity.styles';
import {
  AppWrapper,
  Content,
  ValidationError
} from '../styles/AddCommunity.styles';

const AddCommunity = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [members, setMembers] = useState('');
  const [image, setImage] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('failed');
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [errorUrl, setErrorUrl] = useState('');
  const [errorMembers, setErrorMembers] = useState('');
  const [errorImage, setErrorImage] = useState('');

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
    try {
      const response = await request(query);
      if (response.errors) {
        setToastType('failed');
        setToastMessage(response.errors[0].message);
      } else {
        // clear form
        setTitle('');
        setUrl('');
        setMembers('');
        setImage('');

        // set success message
        setToastType('success');
        setToastMessage(`Success! The ${title} community added!`);
      }
    } catch (error) {
      setToastType('failed');
      setToastMessage(error.message);
    }

    // function run after 10sec
    setTimeout(() => {
      setToastMessage('');
    }, 10000);
  };
  const validateForm = () => {
    // validate Title  field
    if (!title && setToastMessage) {
      setErrorTitle('The title is required');
      setErrorMessage('An error exist try again!');
      setDisabled(true);
    } else {
      setErrorTitle('');
      setDisabled(false);
    }

    // validate Url field
    if (!url) {
      setErrorUrl('The url is required');
      setErrorMessage('An error exist try again!');
      setDisabled(true);
    } else {
      setErrorUrl('');
      setDisabled(false);
    }

    // validate members field
    if (!members) {
      setErrorMembers('The number of members is required');
      setErrorMessage('An error exist try again!');
      setDisabled(true);
    } else if (!/^[0-9]+$/.test(members)) {
      setErrorMembers('Only positive numbers allowed');
      setDisabled(true);
    } else {
      setErrorMembers('');
      setDisabled(false);
    }

    // validate image field
    if (!image) {
      setErrorImage('The image is required');
      setErrorMessage('An error exist try again!');
      setDisabled(true);
    } else if (!image.startsWith('http')) {
      setErrorImage('The url should starting with http');
      setErrorMessage('An error exist try again!');
      setDisabled(true);
    } else {
      setErrorImage('');
      setDisabled(false);
    }
  };

  return (
    <AppWrapper>
      <Header />
      <Content>
        <Card title="Add community form" width={400} height={400}>
          <Form id="form" onBlur={validateForm}>
            <Label>
              Title:
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                maxLength={20}
              />
              <ValidationError>{errorTitle}</ValidationError>
            </Label>
            <Label>
              Url:
              <Input
                type="text"
                name="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
              <ValidationError>{errorUrl}</ValidationError>
            </Label>
            <Label>
              Members:
              <Input
                type="text"
                name="members"
                value={members}
                onChange={(event) => setMembers(event.target.value)}
                maxLength={9}
              />
              <ValidationError>{errorMembers}</ValidationError>
            </Label>
            <Label>
              Image:
              <Input
                type="text"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
              <ValidationError>{errorImage}</ValidationError>
            </Label>
            <Button text="Add" action={submitForm} disabled={disabled} />
            {(errorTitle || errorUrl || errorMembers || errorImage) && (
              <ValidationError>{errorMessage}</ValidationError>
            )}
          </Form>
        </Card>
        {toastMessage && <Toast text={toastMessage} type={toastType} />}
      </Content>
    </AppWrapper>
  );
};

export default AddCommunity;
