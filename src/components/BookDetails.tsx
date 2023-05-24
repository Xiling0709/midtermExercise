



interface Props {
  book: any;
}

export default function BookDetails({ book }: Props) {
  return (
    <div>
      <img src={book.coverImg} alt={book.name} style={{ width: '200px' }} />
      <p>{book.name}</p>
      <p>{book.author}</p>
      {book.sequels && (
        <ol>
          {book.sequels.map((sequel, index) => (
            <li key={index}>{sequel}</li>
          ))}
        </ol>
      )}
      <p>{'⭐️'.repeat(book.rating)}</p>
    </div>
  );
}
