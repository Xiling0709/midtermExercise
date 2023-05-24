function Book({ book, selectBook }) {
  return (
    <div onClick={() => selectBook(book)}>
      <img src={book.coverImg} alt={book.name} style={{ width: '50px' }} />
      <p>{book.name}</p>
    </div>
  );
}

export default Book;
