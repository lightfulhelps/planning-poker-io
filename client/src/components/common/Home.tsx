import React from 'react';
import { useParams } from 'react-router-dom';
import MainForm from '../Form/MainForm';
import InvitationForm from '../Form/InvitationForm';
import { Container } from '../../styles/components';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

const HomeHeading = styled.div({
  width: 800,
  textAlign: 'center',
  margin: '0 auto',
  h1: {
    fontSize: 48,
    textTransform: 'uppercase',
    marginBottom: theme.spacing[4],
  },
});

const DisclaimerBlock = styled.div({
  width: 900,
  margin: `80px auto 0 auto`,
  span: {
    textTransform: 'uppercase',
    color: theme.colors.red,
    display: 'inline-block',
    marginBottom: theme.spacing[2],
  },
});

const Home = () => {
  const { roomId } = useParams();
  const Form = roomId ? InvitationForm : MainForm;
  return (
    <Container>
      <HomeHeading>
        <h1>Planing Poker</h1>
        <p>
          This app helps you to hestimate tickets with your colleagues. Ask them
          to join your room or send them an invitation link.
        </p>
        <p>
          When you are all ready select an estimate then press the 'Reveal'
          button to show everyones estimates. Press the 'Reset' button to start
          again.
        </p>
      </HomeHeading>
      <Form />
      {/* <DisclaimerBlock>
        <span className="h5">Disclaimer</span>
        <p>
          This project is not a professionnal product. There is at this point,
          no security on the room. They are public and anyone with the room ID
          can enter. Fortunately your point estimation should not be a top
          secret information.
        </p>
        <p>
          If you are not familiar with planning poker follow{' '}
          <a
            href="https://www.mountaingoatsoftware.com/agile/planning-poker"
            target="_blank"
            rel="noopener noreferrer"
          >
            this link
          </a>
        </p>
      </DisclaimerBlock> */}
    </Container>
  );
};

export default Home;
