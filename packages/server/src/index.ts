import 'isomorphic-fetch';
import { createServer } from 'http';

import app from './app';
import { config } from './config';

(async () => {
  const server = createServer(app.callback());

  server.listen(config.PORT, () => {
    // eslint-disable-next-line
    console.log(`server running on port :${config.PORT}`);
  });
})();
