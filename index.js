// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log('Alonso Prieto Omar');

/***********Promesa #1 *********************************************************/
const miPromesa = new Promise((resolve, reject) => {
  let bandera = true;
  setTimeout(() => {
    return bandera ? resolve('exito') : reject('fracaso');
  }, 1000);
});

//llamada a la promesa#1
miPromesa
  .then((value) => {
    console.log('Promesa #1 ' + value);
  })
  .catch((err) => {
    console.log('Promesa #1 ' + err);
  });

/***********Promesa #2 ***********************************************************/

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(
    () =>
      number > 5
        ? resolve(number)
        : reject(new Error('Menor a 5 salio un ' + number)),
    1000
  );
}); //fin de la promesa

//llamada a la promesa#2

promise
  .then((number) => console.log('Promesa #2 ' + number))
  .catch((error, number) => console.error('Promesa #2 ' + error));

/***********Promesa #3 ************************************************************/
function randomDelayed(max = 10, expected = 5, delay = 1000) {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * max);

    setTimeout(
      () =>
        number > expected
          ? resolve(number)
          : reject(
              new Error('número menor a ' + expected + ' salio ' + number)
            ),
      delay
    );
  });
}

//llamada a la promesa#3

randomDelayed(100, 75, 2500)
  .then((number) => console.log('Promesa #3 ' + number))
  .catch((error) => console.error('Promesa #3 ' + error));

/***********Promesa #4 ************************************************************/
const doTask = (iterations) =>
  new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      console.log(number);
      numbers.push(number);

      if (number === 6) {
        return reject({
          error: true,
          message: 'Se ha sacado un 6',
        }); //fin reject
      } //fin if
    } //fin for

    return resolve({
      error: false,
      value: numbers,
    }); //fin resolve
  }); //fin promesa

//llamada a la promesa#4
doTask(8)
  .then((result) => console.log('Promesa#4 Tiradas correctas: ', result.value))
  .catch((err) => console.error('Promesa#4 Ha ocurrido algo: ', err.message));

/***********Promesa #5 ************************************************************/
//Ejemplo con promesas
function getPosts2() {
  return new Promise(function (resolve, reject) {
    //throw 'Provocando un error!';
    var req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    req.onload = function () {
      if (req.status == 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject();
      }
    };

    req.send();
  });
}

//llamada a la promesa#5
getPosts2()
  .then((r) => {
    console.log('Promesa#5', r);
  })
  .catch((error) => {
    console.log('Promesa#5 Algo salió mal ' + error);
  });

/***********EL EJEMPLO ANTERIOR USANDO CALLBACKS**************************************/
function getPosts(success, error) {
  var req = new XMLHttpRequest();
  req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  req.onload = function () {
    if (req.status == 200) {
      success(JSON.parse(req.response));
    } else {
      error();
    }
  };
  req.send();
}

//LLAMADA A LA FUNCION
getPosts(
  function (r) {
    console.log('callbacks->', r);
  },
  function (r) {
    console.log('callbacks-> Ocurrió un error');
  }
); //FIN DE LA LLAMADA
