import { validate } from '../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  age: 33,
  firstName: 'Oksana',
  lastName: 'Shulha',
};

validate(schema, data);
