// import '../style/zoocss.css';
// import '../style/1000px.css';
// import '../style/640px.css';
// import '../style/320px.css';



// let testimonials = require('./testimonials');




const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');
const logoAdd = document.querySelector('.logo');
const logoAddStyle = document.querySelector('.h1_petstroy');
const headerPadding = document.querySelector('.header_container');
const headerDesigned = document.querySelector('.header_designed');
const headerDesignedButton = document.querySelector('.designed');
const activeBurgerDonate = document.querySelector('.active_burger_donate');

const body = document.body;
let arr = [iconMenu, menuBody, logoAddStyle, logoAdd, menuList, headerPadding, headerDesigned, headerDesignedButton, activeBurgerDonate];
  if (iconMenu) {
      iconMenu.addEventListener("click", applyActiveClass);
  }
  function applyActiveClass() {
      body.classList.toggle('_lock');
      arr.forEach((e) => e.classList.toggle('_active'))
}


  /*ANIMAL CARUSEL*/

let animals = [
    {
        nameAnimal: 'Giant Panda',
        geoposition: 'Native to Southwest China',
        picture: './img/foto-card1-panda.jpg',
        foodImage: './img/banana.svg',

    },
    {
        nameAnimal: 'eagles',
        geoposition: 'Native to South America',
        picture: './img/foto-card2-eagle.jpg',
        foodImage: './img/meet.svg',

    },
    {
        nameAnimal: 'gorillas',
        geoposition: 'Native to Congo',
        picture: './img/foto-card3-gorilla.jpg',
        foodImage: './img/banana.svg',

    },
    {
        nameAnimal: 'TWO-TOED SLOTH',
        geoposition: 'Mesoamerica, South America',
        picture: './img/foto-card5-sloth.jpg',
        foodImage: './img/banana.svg',

    },
    {
        nameAnimal: 'cheetahs',
        geoposition: 'Native to Africa',
        picture: './img/foto-card6-cheetah.jpg',
        foodImage: './img/banana.svg',

    },
    {
        nameAnimal: 'penguins',
        geoposition: 'Native to Antarctica',
        picture: './img/foto-card7-penguin.jpg',
        foodImage: './img/meet.svg',

    },
    {
        nameAnimal: 'alligators',
        geoposition: 'Native to Southeastern U. S.',
        picture: './img/Rectangle.svg',
        foodImage: './img/meet.svg',

    }

]
let blockPets = document.getElementById('block_pets')
function createAnimalDOMElement (animal) {

    const createAnimalsItem = document.createElement('div');
    createAnimalsItem.classList.add("pets");

    const createAnimalOnePhoto = document.createElement('div');
    createAnimalOnePhoto.classList.add("animal");

    const createImagePicture = document.createElement('img');
    createImagePicture.src = animal.picture;
    createImagePicture.classList.add("animal");


    const createPetsInformation = document.createElement('div');
    createPetsInformation.classList.add("information_pets");

    const createNamePets = document.createElement('p');
    createNamePets.innerHTML = animal.nameAnimal;
    createNamePets.classList.add('pets_font_name');

    const createGeopositionPets = document.createElement('p');
    createGeopositionPets.innerHTML = animal.geoposition;
    createGeopositionPets.classList.add('pets_font_location');

    const createDescriptionPets = document.createElement('div');
    createDescriptionPets.classList.add('description_pets');

    const createFoodImage = document.createElement('img');
    createFoodImage.src = animal.foodImage;
    createFoodImage.classList.add('pets_size_photo');


    createFoodImage.appendChild( createDescriptionPets);
    createAnimalOnePhoto.appendChild(createImagePicture);
    createDescriptionPets.appendChild(createNamePets);
    createDescriptionPets.appendChild(createGeopositionPets);
    createPetsInformation.appendChild(createDescriptionPets)
    createPetsInformation.appendChild(createFoodImage)
    createAnimalsItem.appendChild(createAnimalOnePhoto);
    createAnimalsItem.appendChild(createPetsInformation);
    blockPets.appendChild(createAnimalsItem);

}

function createNewAnimals() {
    animals.slice(0,6).forEach(animal => createAnimalDOMElement(animal));
}
createNewAnimals();

function deleteOldAnimals() {
    blockPets.innerHTML = '';

}

function shuffleArray() {
    for (var i = animals.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = animals[i];
        animals[i] = animals[j];
        animals[j] = temp;
    }
    deleteOldAnimals();
    createNewAnimals();
}


