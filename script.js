// toggle menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const li = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
    li.classList.toggle('slide');
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
]

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