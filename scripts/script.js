//getting datas from API
let words = [];
const gettingDatas = () =>
  fetch('https://random-word-api.herokuapp.com/word?number=10').then(
    (response) => response.json().then((data) => loadData(data))
  );

const loadData = (arr) => {
  for (item of arr) {
    words.push(item);
  }
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const ulDOM = document.querySelector('#alphabet');
  const creatingAlphabet = () => {
    for (item of alphabet) {
      let liDOM = document.createElement('li');
      liDOM.innerText = item.toUpperCase();
      ulDOM.append(liDOM);
    }
  };

  creatingAlphabet();

  const randomNumber = Math.floor(Math.random() * 9);

  const chooseWord = () => words[randomNumber];

  console.log(chooseWord());
};
gettingDatas();
