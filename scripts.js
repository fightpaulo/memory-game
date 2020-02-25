// Variáveis Globais
let cards = document.getElementsByClassName('card');
let selectedCards = document.getElementsByClassName('selectedCard');
let containerDivRows = document.getElementsByClassName('row');
let rowsCount = getRowsCount();
let characters = getListOfCharacters();

// Definindo o evento de click para todos os cards
for (let card in cards) {
   cards[card].addEventListener('click', showCard);
}

// Método principal: será chamado no onload da página
function shuffleCards() {

   let divRowsCount = rowsCount.length;

   while (divRowsCount > 0) {

      let rowIndex = getRandomDivRowIndex(rowsCount);
      let divRow = containerDivRows[rowsCount[rowIndex]];
      removeRandomRowIndex(rowIndex);
      addCardsToDiv(divRow);

      divRowsCount--;
   }
}

function showCard() {

   if (selectedCards.length < 2) {

      // obtém o name de um componente que disparou algum evento
      let nameSelectedCard = event.target.getAttribute('name');
      let idSelectedCard = event.target.getAttribute('id');
      let selectedCard = document.getElementById(idSelectedCard);
      let img = createImageOfSelectedCard(nameSelectedCard);

      // Se meu card selecionado não possui imagem, eu add uma
      if (img != null && selectedCard.childElementCount == 0) {
         selectedCard.appendChild(img);
         selectedCard.classList.add('selectedCard');
      }
   }

   if (selectedCards.length == 2) {
      compareCards();
   }
}

function compareCards() {

   if (selectedCards.length == 2) {

      let firstCard = selectedCards[0];
      let secondCard = selectedCards[1];

      if (firstCard.getAttribute('name') != secondCard.getAttribute('name')) {

         // se as imagens não são iguais, elas desaparecem depois de 800 milissegundos
         setTimeout(function () {
            firstCard.classList.remove('selectedCard');
            firstCard.lastElementChild.remove();
            secondCard.classList.remove('selectedCard');
            secondCard.lastElementChild.remove();
         }, 800);
      }
      else {
         firstCard.classList.remove('selectedCard');
         secondCard.classList.remove('selectedCard');
      }
   }
}

function addCardsToDiv(divRow) {

   let cards = divRow.children;

   for (let card = 0; card < cards.length; card++) {

      let randomChar = characters[Math.floor(Math.random() * characters.length)];
      let nameChar = getNameByRandomChar(randomChar);

      removeSearchedChar(randomChar);

      cards[card].setAttribute('id', randomChar);
      cards[card].setAttribute('name', nameChar);
   }
}

function getNameByRandomChar(randomChar) {

   let name = "";

   switch (randomChar) {

      case "kurapika1":
      case "kurapika2":
         name = "kurapika";
         break;

      case "degel1":
      case "degel2":
         name = "degel";
         break;

      case "shikamaru1":
      case "shikamaru2":
         name = "shikamaru";
         break;

      case "byakuya1":
      case "byakuya2":
         name = "byakuya";
         break;

      case "gambit1":
      case "gambit2":
         name = "gambit";
         break;

      case "todoroki1":
      case "todoroki2":
         name = "todoroki";
         break;
   }

   return name;
}

function removeSearchedDivRow(rowIndex) {

   containerDivRows[rowIndex].splice(rowIndex, 1);
}

function getRowsCount() {
   let totalRows = containerDivRows.length;
   let rowsCount = [];

   for (let i = 0; i < totalRows; i++) {
      rowsCount.push(i);
   }

   return rowsCount;
}

function getRandomDivRowIndex(containerDivRows) {

   let rowIndex = Math.floor(Math.random() * containerDivRows.length);
   return rowIndex;
}

function removeRandomRowIndex(rowIndex) {

   randomIndex = rowsCount.indexOf(rowIndex);
   rowsCount.splice(randomIndex, 1);
}

function createImageOfSelectedCard(name) {

   let img = null;

   switch (name) {

      case "byakuya":
         img = document.createElement('img');
         img.src = `images/${name}.jpg`;
         break;

      case "todoroki":
         img = document.createElement('img');
         img.src = `images/${name}.jpg`;
         break;

      case "shikamaru":
         img = document.createElement('img');
         img.src = `images/${name}.jpg`;

      case "kurapika":
         img = document.createElement('img');
         img.src = `images/${name}.jpg`;
         break;

      case "degel": ""
         img = document.createElement('img');
         img.src = `images/${name}.jpg`;
         break;

      case "gambit":
         img = document.createElement('img');
         img.src = `images/${name}.jpg`;
         break;
   }

   return img;
}

function getListOfCharacters() {
   let characters =
      [
         "shikamaru1", "shikamaru2",
         "todoroki1", "todoroki2",
         "byakuya1", "byakuya2",
         "gambit1", "gambit2",
         "degel1", "degel2",
         "kurapika1", "kurapika2"
      ];

   return characters;
}

function removeSearchedChar(name) {

   let charToBeRemoved = characters.indexOf(name);
   characters.splice(charToBeRemoved, 1);

}
