import { useState } from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import books from './components/data';
import './App.css';


function App() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  return (
    <div>
      <BookDetails book={selectedBook} />
      <BookList setSelectedBook={setSelectedBook} books={books} />
    </div>
  );
}

export default App;
