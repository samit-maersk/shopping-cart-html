const menus = [
    {
        id: 1,
        name: "Fastfood",
        details: "yet to fill",
        price: 40,
        category: "Nonveg",
        image: "images/food7.jpg"
    },
    {
        id: 2,
        name: "Pan Cakes",
        details: "yet to fill",
        price: 70,
        category: "Veg",
        image: "images/food2.jpg"
    },
    {
        id: 3,
        name: "Thai Meals",
        details: "yet to fill",
        price: 90,
        category: "Nonveg",
        image: "images/food3.jpg"
    },
    {
        id: 4,
        name: "Pasta Soup",
        details: "yet to fill",
        price: 190,
        category: "Nonveg",
        image: "images/food4.jpg"
    },
    {
        id: 5,
        name: "Pizza Do Piazza",
        details: "yet to fill",
        price: 270,
        category: "Veg",
        image: "images/food5.jpg"
    },
    {
        id: 6,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "Veg",
        image: "images/food6.jpg"
    }
]
const cart=[];

const cardTemplate = document.querySelector('#card__template');
const cardContainer = document.querySelector("#article__food_menu");

//Prepare the card on the page
menus.map((m,index) => {
    const card = document.importNode(cardTemplate.content, true);

    card.querySelector('.card__name').textContent = m.name;
    card.querySelector('.card__details').textContent = m.details;
    card.querySelector('.card__price').textContent = m.price;
    card.querySelector('img').src = m.image
    const btn = card.querySelector('button')
    btn.addEventListener("click", ()=>{addToCart(index)});

    cardContainer.appendChild(card)
})

//add to cart 
function addToCart(v) {
    //Logic to increase quantity
    const isVailable = cart.find(d => d.id === v);
    if(isVailable) {
        cart.map(d => {
            if(d.id == v) {
                d.quantity = d.quantity + 1
            }
            return d;
        })
    } else {
        cart.push({id: v, quantity: 1})
    }
        
    const cartCount = document.querySelector('.cart__count');
    cartCount.textContent = cart.length;
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".header__icons_cart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// and prepare the data for modal
const modalBody = document.querySelector('.modal-body');
const cartLineTemplate = document.querySelector("#cart-line");
btn.onclick = function() {
    modal.style.display = "block";
    modalBody.innerHTML= "";
    cart.map(m => {
        const cartLine = document.importNode(cartLineTemplate.content, true);
        const item = menus.filter(f => f.id === m.id);
        console.log(item)
        //cart-line-id
        cartLine.querySelector('.cart-line-id').textContent = item[0].name
        //input
        cartLine.querySelector('input').value = m.quantity
        //cart-line-amount
        cartLine.querySelector('.cart-line-amount').textContent = item[0].price * m.quantity

        modalBody.appendChild(cartLine)
    })

    const total = cart.reduce((r, i) => r + i.quantity * menus[i.id -1].price, 0);
    document.querySelector('.modal-txt-total').textContent = total
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}