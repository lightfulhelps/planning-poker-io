// import packages
import React, { useState } from 'react';
import { useIO } from '../../contexts/io';
import { useParams, useHistory } from 'react-router-dom';
import { Input, Card, Col, Row, Button } from '../../styles/components';
import * as Styled from './formStyle';

const Layout = () => {
  let { roomId } = useParams();
  let history = useHistory();
  return (
    <Styled.Layout>
      <Row justify="center">
        <Col>
          <Card>
            <Styled.CardLayout>
              <Styled.Heading>
                Joining the room : <br /> <span>{roomId}</span>
              </Styled.Heading>
              <Styled.Description>
                Your team is waiting for you
              </Styled.Description>
              <Form roomId={roomId} />
              <Button onClick={() => history.push('/')} isLink>
                Joining another room ?
              </Button>
            </Styled.CardLayout>
          </Card>
        </Col>
      </Row>
    </Styled.Layout>
  );
};

const Form: React.FC<{ roomId: string }> = ({ roomId }) => {
  const [name, setName] = useState('');
  const { connect } = useIO();
  const valid = name.length > 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid) connect({ name }, roomId);
  };

  return (
    <Styled.Form onSubmit={onSubmit}>
      <Input
        name="name"
        key="name"
        placeholder="Username"
        value={name}
        icon="box"
        onChange={handleChange}
      />
      <Styled.SubmitButton
        icon="arrowRight"
        isDisabled={!valid}
        iconPosition="right"
        type="submit"
      >
        Enter the room
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default Layout;
