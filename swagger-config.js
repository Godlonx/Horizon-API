const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0', // Specify the OpenAPI version
  info: {
    title: 'API Documentation', // API Title
    version: '1.0.0',           // API Version
    description: 'This is the API documentation for our application.', // API Description
  },
  servers: [
    {
      url: 'http://localhost:3000', // Your server's base URL
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to files where API documentation is written
};

module.exports = swaggerJSDoc(options);