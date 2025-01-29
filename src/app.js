import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import characterRouter from './pkg/character/route.js';
import userRouter from './pkg/user/route.js';

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/characters', characterRouter);
app.use('/api/v1/users', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
})