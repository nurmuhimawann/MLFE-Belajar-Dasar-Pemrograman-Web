// toggle menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


// loop card
const container = document.getElementById('artist-cards-container');
const valuesCards = [{
    image: 'assets/img/1.png',
    title: 'Ariana Grandong',
    instagram: 'https://www.instagram.com/arianagrande/',
    youtube: 'https://www.youtube.com/c/ArianaGrande/'
},
{
    image: 'assets/img/2.png',
    title: 'Justin Geber',
    instagram: 'https://www.instagram.com/justinbieber/',
    youtube: 'https://www.youtube.com/c/justinbieber/',
},
{
    image: 'assets/img/3.png',
    title: 'Selena Gowes',
    instagram: 'https://www.instagram.com/selenagomez/',
    youtube: 'https://www.youtube.com/c/selenagomez/'
},
{
    image: 'assets/img/4.png',
    title: 'Hailee Stempel',
    instagram: 'https://www.instagram.com/haileesteinfeld/',
    youtube: 'https://www.youtube.com/c/haileesteinfeld/'
},
{
    image: 'assets/img/5.png',
    title: 'Billie Arisan',
    instagram: 'https://www.instagram.com/billieeilish/',
    youtube: 'https://www.youtube.com/c/BillieEilish/'
}
];

function returnCards(valuesCards) {
    return valuesCards.map(valuesCard => `<div class='card'>
        <img class="round" src="${valuesCard.image}" alt="${valuesCard.title}" />
        <h3>${valuesCard.title}</h3>
        <div class="info-artist">
            <ul>
                <li class="socmed"><a href="${valuesCard.instagram}">Instagram</a></li>
                <li class="socmed"><a href="${valuesCard.youtube}">Youtube</a></li>
            </ul>
        </div>
    </div>`).join('');
}

container.innerHTML = returnCards(valuesCards);


// loop gallery-box
const column1 = document.getElementById('column1');
const valuesImage = [{
    img: 'assets/img/gallery-box/1.jpeg',
}, 
{
    img: 'assets/img/gallery-box/2.jpg',
}, 
{
    img: 'assets/img/gallery-box/3.jpg',
}
];

const column2 = document.getElementById('column2');
const valuesImage2 = [{
    img: 'assets/img/gallery-box/4.jpg',
}, 
{
    img: 'assets/img/gallery-box/5.jpg',
}, 
{
    img: 'assets/img/gallery-box/6.jpg',
}, 
{
    img: 'assets/img/gallery-box/7.jpg',
}
];

const column3 = document.getElementById('column3');
const valuesImage3 = [{
    img: 'assets/img/gallery-box/8.jpg',
}, 
{
    img: 'assets/img/gallery-box/9.jpg',
}, 
{
    img: 'assets/img/gallery-box/10.jpg',
}, 
{
    img: 'assets/img/gallery-box/11.jpg',
}
];

function returnImage(valuesImage) {
    return valuesImage.map(valuesImage => `<div class='image-item'>
            <img src="${valuesImage.img}" alt="" />
            <div class="overlay"></div>
        </div>`).join('');
};

column1.innerHTML = returnImage(valuesImage);
column2.innerHTML = returnImage(valuesImage2);
column3.innerHTML = returnImage(valuesImage3);