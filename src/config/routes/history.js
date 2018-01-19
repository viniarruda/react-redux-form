import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import appConfig from './../../../config/webpack.config.dev'

const history = useRouterHistory(createHistory)({
  basename: appConfig.path,
});

export default history;