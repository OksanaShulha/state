export const schema = { // DONE
  title: 'a person',
  type: 'array',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: "The person's first name.",
    },
    age: {
      description: 'Age in years which must be equal to or greater than zero.',
      type: 'integer',
      minimum: 0,
    },
    languages: {
      type: 'array',
      description: "All languages which person knows",
    },
    isProgrammer: {
      type: 'boolean',
      description: "To know is the person a programmer or not",
    },
  },
  required: ['name', 'age', 'languages'],
};

