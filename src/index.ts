import 'module-alias/register';

import config from 'config';

import { server } from '@app/app';

const PORT = config.get('port');
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
