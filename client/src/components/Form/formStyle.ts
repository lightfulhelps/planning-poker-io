import styled from '@emotion/styled';
import { Button } from '../../styles/components';
import theme from '../../styles/theme';

export const Layout = styled.div({
  marginTop: '30px',
});
export const CardLayout = styled.div({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: 327,
});

export const Heading = styled.h5({
  fontWeight: 'bold',
  marginBottom: theme.spacing[3],
  marginTop: theme.spacing[3],
  textTransform: 'uppercase',
  lineHeight: '31px',
  maxWidth: '100%',
  span: {
    maxWidth: '100%',
    display: 'block',
    color: theme.colors.primary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
  },
});

export const Description = styled.p({
  fontSize: theme.fontSize.lg,
  lineHeight: '24px',
});

export const SubmitButton = styled(Button)({
  margin: `${theme.spacing[4]} auto 0`,
});

export const Form = styled.form({
  marginBottom: theme.spacing[3],
});
