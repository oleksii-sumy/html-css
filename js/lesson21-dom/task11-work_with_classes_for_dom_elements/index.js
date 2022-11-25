export const manageClasses = () => {
  const classOne = document.querySelector('.one');
  classOne.classList.add('selected');

  const classTwo = document.querySelector('.two');
  classTwo.classList.remove('selected');

  const classThree = document.querySelector('.three');
  classThree.classList.toggle('three_done');

  const classFour = document.querySelector('.four');
  if (classFour.classList.contains('some-class')) {
    classFour.classList.add('another-class');
  }
};

