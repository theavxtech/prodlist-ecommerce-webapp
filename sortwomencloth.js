async function sortprice() {

    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = '';

  fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById("products");

        data.sort((a, b) => a.price - b.price);

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
        console.error("Error fetching data:", error);
    });
}

async function sortpricex() {

    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = '';

  fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById("products");

        data.sort((a, b) => b.price - a.price);

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
        console.error("Error fetching data:", error);
    });
}


async function sortrating() {

    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = '';

    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then(response => response.json())
      .then(data => {
          const productsContainer = document.getElementById("products");
  
          data.sort((a, b) => a.rating.rate - b.rating.rate);
  
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
          console.error("Error fetching data:", error);
      });
  }
  
  async function sortratingx() {

    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = '';

    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then(response => response.json())
      .then(data => {
          const productsContainer = document.getElementById("products");
  
          data.sort((a, b) => b.rating.rate - a.rating.rate);
  
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
          console.error("Error fetching data:", error);
      });
  }
  
  
    
  