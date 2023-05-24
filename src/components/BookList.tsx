

interface Props {
  books: any[];
  setSelectedBook: (book: any) => void;
}

export default function BookList({ books, setSelectedBook }: Props) {
  return (
    <ul>
      {books.map((book) => (
        <li onClick={() => setSelectedBook(book)}>
          <img src={book.coverImg} alt={book.name} style={{ width: '50px' }} />
          {book.name}
        </li>
      ))}
    </ul>
  );
}

