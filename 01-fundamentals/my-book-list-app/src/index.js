// import React from 'react'; // with latest version of react, this is not needed anymore
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

/** 1. Basic Component */
// function FirstComponent() {
//   return (
//     <div className="">
//       <Greeting />
//       <AboutMe />
//       <h4>This is my first component.</h4>
//       <img src="" alt="" />
//     </div>
//     // <div></div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };
// const AboutMe = () => <h3>I am Julia.</h3>;

/** 2. Simple Book List Project */
import './index.css'; // css import
import BookList from './BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <h1>Amazon Best Sellers</h1>
    <BookList />
  </section>
);
