import Book from './Book';
import { books } from './books';

const BookList = () => {
  const someValue = 'someValue';
  const displayValue = () => {
    console.log(someValue);
  };

  let matchedBook = '';
  const getBook = (id) => {
    const book = books.find((b) => b.id === id);
    if (book) {
      matchedBook = book.title;
      console.log(matchedBook);
    }
  };

  return (
    <section className='book-list'>
      {/* <EventExamples /> */}
      {/* <p>{matchedBook}</p> */}
      {books.map((book, index) => (
        <Book
          key={index}
          {...book}
          number={index + 1}
          displayValue={displayValue}
          getBook={getBook}
        >
          <p>{book.description}</p>
        </Book>
      ))}
    </section>
  );
};

const EventExamples = () => {
  const formInputHandler = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const buttonClickHandler = () => {
    alert('click event fired');
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      <form onSubmit={formSubmitHandler}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='product'
          style={{ margin: '1rem 0' }}
          onChange={formInputHandler}
        />
        <button onClick={formSubmitHandler} type='submit'>
          submit
        </button>
      </form>
      <div>
        <button onClick={buttonClickHandler}>Button</button>
      </div>
    </section>
  );
};

export default BookList;
