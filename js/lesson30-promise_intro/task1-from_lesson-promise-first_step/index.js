export const addImage = (imgSrc) => {
    const firstPromise = new Promise ((solution,errMessage) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    solution({ width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => errMessage ('Image load is failed'));
});

return firstPromise;
};

const resultAddImage = addImage(imgSrc);
resultAddImage.then(data => console.log(data));
// resultAddImage.catch(error => console.log(data));

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );
