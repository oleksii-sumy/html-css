export const getSection = num => {
    let parentName = undefined;
  const arrSection = Array.from(document.querySelectorAll('.box'));
  arrSection.map(divElem => {
    const spanNum = divElem.querySelector(`span[data-number = "${num}"]`);
    if (spanNum !== null) {
      parentName = Object.values(divElem.dataset)[0];
    }
  });
  return parentName;
};
getSection(1);

