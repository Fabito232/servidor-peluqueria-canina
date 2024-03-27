import { Router } from'express';
const router = Router();
import Book  from '../models/Book.mjs'

// Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
});

// Agregar un nuevo libro
router.post('/', async (req, res) => {
  const { title, author, isbn } = req.body;
  try {
    const newBook = await Book.create({ title, author, isbn });
    console.log(newBook);
    res.json({ message: 'Libro guardado correctamente', book: newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar el libro' });
  }
});

// Eliminar un libro por su ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.destroy({ where: { id } });
    console.log(deletedBook);
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
});

export default router;
