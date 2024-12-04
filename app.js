const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const userRoute = require('./src/routes/userRoute');
const User = require('./src/models/userModel');
const sequelize = require('./database/db');
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoute);

app.get('/greet', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

sequelize.sync().then(async () => {

  app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`http://localhost:${port}`);
    console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
  });
});