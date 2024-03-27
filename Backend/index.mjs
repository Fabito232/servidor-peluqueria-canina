import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

import express from 'express';
import morgan from 'morgan';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; // Importar join de path


// Inicializaciones
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
const storage = multer.diskStorage({
  destination: join(__dirname, 'public/uploads'), // Utilizar join para formar la ruta
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname)); // Importar path y utilizar path.extname
  }
});
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import booksRoutes from './routes/books.mjs';
app.use('/api/books', booksRoutes);

app.use(express.static(join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log("Server on port", app.get('port'));
});
