import Note from '../models/noteModel.js';

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);

  }catch (error) {
    console.error('Error in getAllNotes controller', error);
      res.status(500).json({ message: 'Server Error' });
    }
};

export const createNote = (req, res) => {
  res.status(201).send('Note created');
};

export const updateNote = (req, res) => {
  res.status(200).send('Note updated');
};

export const deleteNote = (req, res) => {
  res.status(200).send('Note deleted');
};