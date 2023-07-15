const menus = [
    {
        id: 1,
        name: "Chicken Jhol",
        details: "yet to fill",
        price: 40,
        category: "Nonveg"
    },
    {
        id: 2,
        name: "Sak Do Piazza",
        details: "yet to fill",
        price: 70,
        category: "Veg"
    },
    {
        id: 3,
        name: "Shrimp Masala",
        details: "yet to fill",
        price: 90,
        category: "Nonveg"
    },
    {
        id: 4,
        name: "Chicken Curry",
        details: "yet to fill",
        price: 190,
        category: "Nonveg"
    },
    {
        id: 5,
        name: "Paneer Makhnee",
        details: "yet to fill",
        price: 270,
        category: "Veg"
    },
    {
        id: 6,
        name: "Paneer Fry",
        details: "yet to fill",
        price: 170,
        category: "Veg"
    }
]


const cardTemplate = document.querySelector('#card__template');
const cardContainer = document.querySelector("#article__food_menu");


const card = document.importNode(cardTemplate.content, true);

menus.map((m) => {
    const card = document.importNode(cardTemplate.content, true);

    card.querySelector('.card__name').textContent = m.name;
    card.querySelector('.card__details').textContent = m.details;
    card.querySelector('.card__price').textContent = m.price;

    cardContainer.appendChild(card)
})
