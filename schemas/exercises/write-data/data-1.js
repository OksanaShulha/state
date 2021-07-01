import { validate } from '../../lib/validate.js';

import { schema } from './schema.js';

const data = {
firstName: 'Oksana',
age: 33,
};

validate(schema, data);

