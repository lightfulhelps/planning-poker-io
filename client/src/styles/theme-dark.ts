import theme from './theme';
import _ from 'lodash';

export default _.merge({}, theme, {
  colors: {
    body: '#1a1f36',
    font: '#c1c9d2',
    cardBg: '#2b2f45',
    cardBorder: theme.colors.gray700,
    inputBg: '#2b2f45',
    inputBorder: theme.colors.gray700,
  },
});
