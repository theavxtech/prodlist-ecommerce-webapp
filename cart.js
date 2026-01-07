
let cartArray = JSON.parse(localStorage.getItem('cart')) || [];


const cartItemsContainer = document.getElementById('cartItems');
cartArray.forEach(item => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    const imgElement = document.createElement("img");
    imgElement.src = item.image;
    imgElement.alt = "Product Image";
    imgElement.classList.add("product-image");

    const titleElement = document.createElement('h3');
    titleElement.textContent = item.title;

    const priceElement = document.createElement('p');
    priceElement.textContent =` Price: $${ item.price }`;

   
    cartItemDiv.appendChild(imgElement);
    cartItemDiv.appendChild(titleElement);
    cartItemDiv.appendChild(priceElement);


    
    cartItemsContainer.appendChild(cartItemDiv);
});

function displayTotalPrice() {
    let totalPrice = 0;
    cartArray.forEach(item => {
        totalPrice += item.price;
    });

    const totalElement = document.createElement('h3');
    totalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

   
    cartItemsContainer.appendChild(totalElement);
}


displayTotalPrice();


function clearCart() {
    localStorage.removeItem('cart'); 
    cartArray = []; 
    cartItemsContainer.innerHTML = ''; 
    alert('Cart cleared!');
}

function checkout() {
    localStorage.removeItem('cart'); 
    cartArray = []; 
    cartItemsContainer.innerHTML = ''; 
    alert('Your cart is Checkedout!');
}
