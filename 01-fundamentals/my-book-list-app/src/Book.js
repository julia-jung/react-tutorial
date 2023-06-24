const Book = (props) => {
  const { id, title, author, img, number, getBook } = props;
  const clickHandler = () => {
    alert('hello world');
  };
  const anotherClickHandler = (author) => {
    console.log(author);
  };

  return (
    <article
      className='book'
      // onMouseOver={() => {
      //   console.log(title);
      // }}
    >
      <img src={img} alt='' />
      <h3 onClick={() => console.log(title)}>{title}</h3>
      <h4 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>
        {author.toUpperCase()}
      </h4>
      <span className='number'>{`# ${number}`}</span>
      {/* <button type='button' onClick={clickHandler}>
        Click Me!
      </button> */}
      {/* <button type='button' onClick={props.displayValue}>
        Display
      </button> */}
      {/* <button type='button' onClick={() => anotherClickHandler(author)}>
        Another Button
      </button> */}
      {props.children}
      <button onClick={() => getBook(id)}>Get Book!</button>
      {/* <p>{ let x = 6; }</p> */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

// const Image = () => (
//   <img
//     src="https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
//     alt=""
//   />
// );
// const Title = () => <h3>Harry Potter and the Philosopher's Stone</h3>;
// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>
//     J. K. Rowling
//   </h4>
// );

export default Book;
