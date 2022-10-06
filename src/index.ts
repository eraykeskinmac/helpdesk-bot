import { createRestApi } from './rest-api';
import { client } from './bot';

const PORT = process.env.PORT || 8000;

const api = createRestApi(client);

api.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
