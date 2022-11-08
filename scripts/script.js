//getting datas from API
let spells = [];
let hints = [];
const gettingDatas = () =>
  fetch('https://hp-api.herokuapp.com/api/spells?number=10%27').then(
    (response) => response.json().then((data) => loadData(data))
  );

const loadData = (arr) => {
  for (item of arr) {
    spells.push(item.name);
    hints.push(item.description);
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

  let creatingButton = document.querySelector('#alphabet');

  for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement('button');
    button.innerText = alphabet[i];
    button.classList.add('btn');
    creatingButton.appendChild(button);
  }

  const randomNumber = Math.floor(Math.random() * 9);

  const choosenWord = () => spells[randomNumber];

  const choosenHint = () => hints[randomNumber];

  let word = choosenWord().toLowerCase();
  let hint = choosenHint();

  const wordContainer = document.createElement('p');
  for (let i = 0; i < word.length; i++) {
    wordContainer.innerText += '_';
    wordContainer.classList.add('letter');
  }
  document.body.appendChild(wordContainer);
  let hintDOM = document.querySelector('.hint');
  let hintButton = document.querySelector('#showHint');
  hintButton.addEventListener('click', () => {
    hintDOM.innerText = hint;
    hintDOM.style.display = 'block ';
  });
  console.log(word);
  let lives = 5;
  let alphabetButtons = document.querySelectorAll('.btn');
  alphabetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === button.innerText) {
          wordContainer.innerText =
            wordContainer.innerText.slice(0, i) +
            button.innerText +
            wordContainer.innerText.slice(i + 1);
        }
      }

      let j = wordContainer.innerText.indexOf(button.innerText);
      if (j === -1) {
        lives -= 1;
        const img = document.querySelector('#img');
        if (lives === 4) {
          img.setAttribute('src', '../images/1.png');
        } else if (lives === 3) {
          img.setAttribute('src', '../images/2.png');
        } else if (lives === 2) {
          img.setAttribute('src', '../images/3.png');
        } else if (lives === 1) {
          img.setAttribute('src', '../images/4.png');
        } else if (lives === 0) {
          img.setAttribute('src', '../images/5.png');
        }
      }
    });
  });
};

gettingDatas();
