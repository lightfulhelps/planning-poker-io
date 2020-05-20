import styled from '@emotion/styled';
import { Row } from '../../styles/components';
import theme from '../../styles/theme';

export const HeaderButtonWrapper = styled.div({
  display: 'flex',
  position: 'absolute',
  left: '10%',
  button: {
    marginRight: theme.spacing[2],
  },
});

export const HeadingRow = styled(Row)({
  position: 'relative',
});
