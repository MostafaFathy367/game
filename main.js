const controlButton = document.querySelector('.control-button span');

function generateCards() {
  const cards = [
    {dataAnimal: 'camel', imageSrc: 'images/camel.jpg'},
    {dataAnimal: 'cat', imageSrc: 'images/cat.jpg'},
    {dataAnimal: 'deer', imageSrc: 'images/Deer.jpg'},
    {dataAnimal: 'dog', imageSrc: 'images/dog.jpg'},
    {dataAnimal: 'goat', imageSrc: 'images/goat.jpg'},
    {dataAnimal: 'horse', imageSrc: 'images/horse.jpg'},
    {dataAnimal: 'kangaroo', imageSrc: 'images/kangaroo.jpg'},
    {dataAnimal: 'leopard', imageSrc: 'images/Leopard.jpg'},
    {dataAnimal: 'lion', imageSrc: 'images/lion.jpg'},
    {dataAnimal: 'Penguin', imageSrc: 'images/Penguin.jpg'},
  ];
  cards.forEach(card => {
    blocksContainer.innerHTML += `<div class="game-block" data-animal="${card.dataAnimal}">
      <div class="face front"></div>
      <div class="face back">
        <img src="${card.imageSrc}" alt="${card.dataAnimal}">
      </div>
    </div>`.repeat(2);
  })
}
let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
generateCards()
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];

shuffel(orderRange);

blocks.forEach((block, index) => {

  block.style.order = orderRange[index];

  block.addEventListener('click', function () {

    flipBlock(block);

  });

});

function flipBlock(selectedBlock) {

  selectedBlock.classList.add('is-filpped');

  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-filpped'));

  if (allFlippedBlocks.length === 2) {

    stopClicking();

    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

  }

}

function stopClicking() {

  blocksContainer.classList.add('no-clicking');

  setTimeout(() => {

    blocksContainer.classList.remove('no-clicking');

  }, duration);

}

function checkMatchedBlocks (firstBlock, secondBlock) {

  let triesElement = document.querySelector('.tries span');

  if (firstBlock.dataset.animal === secondBlock.dataset.animal) {

    firstBlock.classList.remove('is-filpped');
    secondBlock.classList.remove('is-filpped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

  } else {

    triesElement.innerHTML = +triesElement.innerHTML + 1;

    setTimeout(() => {

      firstBlock.classList.remove('is-filpped');
      secondBlock.classList.remove('is-filpped');

    }, duration);

  }

}

function shuffel(array) {
  let current = array.length,
      temp,
      random;
  
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}
