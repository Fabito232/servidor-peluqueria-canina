import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  dialect: process.env.dialect,
  host: process.env.HOST,
  username: process.env.DB_HOSTNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Sincronizar modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch(err => {
    console.error('Error al sincronizar modelos:', err);
  });

  export default sequelize;
