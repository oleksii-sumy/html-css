/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная failedPromise
 */

const failedPromise = new Promise((resolve, reject) => {
  reject(new Error('Oops, error!'));
});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
  console.log(error);
});
