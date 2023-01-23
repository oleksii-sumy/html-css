const rootElement = document.querySelector('#root');

//WITHOUT REACT---------
// const renderGreeting = elem => {
//   const containerElem = document.createElement('div');
//   containerElem.classList.add('greeting');

//   const titleElem = document.createElement('h1');
//   titleElem.classList.add('greeting__title');
//   titleElem.textContent = 'Hello, world!';

//   const textElem = document.createElement('p');
//   textElem.classList.add('greeting__text');
//   textElem.textContent = "I'm learning React";

//   containerElem.append(titleElem, textElem);

//   elem.append(containerElem);
// };

// renderGreeting(rootElement);

//WITH REACT --------

const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('div', { className: 'greeting__title' }, 'Hello, world!'),
  React.createElement('div', { className: 'greeting__text' }, "I'm learning React"),
);

ReactDOM.render(element, rootElement);
