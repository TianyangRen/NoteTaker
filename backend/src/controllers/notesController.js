export const getAllNotes = (req, res) => {
  res.status(200).send('You just fetched all notes!');
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