// import packages
import React, { useState } from 'react';
import { useIO } from '../../contexts/io';
import { Input, Card, Col, Row } from '../../styles/components';
import * as Styled from './formStyle';

const Layout = () => {
  return (
    <Styled.Layout>
      <Row justify="center">
        <Col>
          <Card>
            <Styled.CardLayout>
              <Styled.Heading>JOIN A ROOM</Styled.Heading>
              <Styled.Description>
                Get your room id from your <br /> SCRUM master
              </Styled.Description>
              <Form />
            </Styled.CardLayout>
          </Card>
        </Col>
      </Row>
    </Styled.Layout>
  );
};

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const { connect } = useIO();

  const valid = name.length > 1 && roomId.length > 3;

  const onSubmit = (e) => {
    e.preventDefault();
    if (valid) connect({ name }, roomId);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="roomId"
        key="roomId"
        placeholder="Room id (4 char. min)"
        value={roomId}
        icon="box"
        onChange={(e) => setRoomId((e.target as HTMLTextAreaElement).value)}
      />
      <Input
        name="name"
        key="name"
        placeholder="Username (2 char. min)"
        value={name}
        icon="user"
        onChange={(e) => setName((e.target as HTMLTextAreaElement).value)}
      />
      <Styled.SubmitButton
        isDisabled={!valid}
        icon="arrowRight"
        iconPosition="right"
        type="submit"
      >
        Enter the room
      </Styled.SubmitButton>
    </form>
  );
};

export default Layout;
