let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    const product = {
        image: item.image,
        title: item.title,
        price: item.price
    };

    cartArray.push(product); 
    localStorage.setItem('cart', JSON.stringify(cartArray)); 

    alert(`${item.title} added to cart!`);
    console.log(`${item.title} added to cart!`);
    console.log(cartArray);
}

document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products");
    if (!productsContainer) {
        console.error("Products container not found!");
        return;
    }

    
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
               
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const imgElement = document.createElement("img");
                imgElement.src = item.image;
                imgElement.alt = "Product Image";
                imgElement.classList.add("product-image"); 

                const titleElement = document.createElement("h3");
                titleElement.textContent = item.title;

                const priceElement = document.createElement("p");
                priceElement.textContent = `Price: `;
                const bold = document.createElement("span");
                bold.textContent = `$${item.price}`;
                bold.style.fontWeight = "bold";

                const rateElement = document.createElement("p");
                rateElement.textContent = `Rating: `;
                const bold1 = document.createElement("span");
                bold1.textContent = ` ${item.rating.rate}`;
                bold1.style.fontWeight = "bold";

                const addcart = document.createElement("button");
                addcart.textContent = `Add to Cart`;
                addcart.classList.add("cart");

               
                addcart.addEventListener("click", function() {
                    addToCart(item);
                });

               
                productDiv.appendChild(imgElement);
                productDiv.appendChild(titleElement);
                productDiv.appendChild(priceElement);
                priceElement.appendChild(bold);
                productDiv.appendChild(rateElement);
                rateElement.appendChild(bold1);
                productDiv.appendChild(addcart);

               
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
