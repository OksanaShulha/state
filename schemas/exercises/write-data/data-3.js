import { validate } from '../../lib/validate.js';

import { schema } from './schema.js';

const data = {
  lastName: 'Shulha',
  age: 33,
  firstName: 'Oksana',
};

validate(schema, data);
