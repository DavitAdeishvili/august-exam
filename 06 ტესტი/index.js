fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(products => {
    products.forEach(product => {
        document.body.innerHTML += `
        <div class="card">
        <img src="${product.image}">
        <div class="child">
        <p class="title">${product.title}</p>
        <p class="category">Category: ${product.category}</p>
        <p class="price">${Math.floor(product.price)}$</p>
        <button class="btn" onclick="cart(this, this.parentNode)">Put in cart</button>
        </div></div>
      `;
    });
  });

let count = 0;
let total = 0;

function cart(button, buttonParent) {
    let price = parseInt(buttonParent.querySelector('.price').textContent.split("$")[0]);
  
    if (button.textContent === "Put in cart") {
        count += 1;
        button.textContent = "Remove from cart";
        total += price;
    } else {
        count -= 1;
        button.textContent = "Put in cart";
        total -= price;
    }
  
    document.querySelector('.cartCount').innerHTML = 'items: ' + count;
    document.querySelector('.total').textContent = 'total: ' + total + '$';
}