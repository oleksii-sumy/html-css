//-----attach-handlers-btn-----//
const attachHandlers = () => {
  const divElem = document.querySelector('.rect_div');
  const pElem = document.querySelector('.rect_p');
  const spanElem = document.querySelector('.rect_span');

  const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style ="color: ${color}; margin-left: 8px;">${text}</span>`;
  };
  const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
  const logGreenP = logTarget.bind(null, 'P', 'green');
  const logGreenSpan = logTarget.bind(null, 'span', 'green');

  const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
  const logGreyP = logTarget.bind(null, 'P', 'grey');
  const logGreySpan = logTarget.bind(null, 'span', 'grey');

  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);

  
};
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
attachHandlersBtn.addEventListener('click', attachHandlers);

//-----clear-btn-----//
const clearEvents = () => {
  const clearAll = document.querySelector('.events-list');
  clearAll.innerHTML = '';
};
const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', clearEvents);

//-----remove-handlers-btn-----//
const removeHandlers = () => {
    const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
attachHandlersBtn.removeEventListener('click', attachHandlers);
}
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
removeHandlersBtn.addEventListener('click', removeHandlers);
