import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Button from '../components/button/Button';
import Card from '../components/card/Card';
import { Header } from '../components/header/Header';
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
  const [members, setMembers] = useState(0);
  const [image, setImage] = useState('');
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
      if (title && url && members && image) {
        const response = await request(query);

        if (response.errors) {
          toast.error(response.errors[0].message, {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        } else {
          // clear form
          setTitle('');
          setUrl('');
          setMembers(0);
          setImage('');

          // set success message
          toast.success(`Success! The ${title} community added!`, {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        }
      } else {
        toast.error('Please fill the form first!');
      }
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  const validateForm = () => {
    // validate Title  field
    if (!title) {
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
    } else if (members > 1000000 || members < 0) {
      setErrorMembers('Only positive numbers allowed in range 0-1000000');
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
                type="number"
                name="members"
                value={members}
                onChange={(event) => setMembers(event.target.value)}
                min="0"
                max="1000000"
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

        <ToastContainer />
      </Content>
    </AppWrapper>
  );
};

export default AddCommunity;
