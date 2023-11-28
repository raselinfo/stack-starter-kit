import 'module-alias/register';

import { server } from '@app/app';
import config from 'config';

const PORT = config.get('port');

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
