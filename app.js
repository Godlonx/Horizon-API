const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const { default: userRouter } = require('./src/pkg/user/route');
const swaggerDocument = YAML.load('./swagger.yaml');
const port = 3000;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/greet', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
  })