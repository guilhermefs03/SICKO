const sizeButtons = document.querySelectorAll(".sizes button");
const quantityValue = document.querySelector(".quantity span");
const quantityButtons = document.querySelectorAll(".quantity button");
const cartButton = document.querySelector(".cart-btn");
const buyButton = document.querySelector(".buy-btn");
const thumbs = document.querySelectorAll(".thumbs img");
const mainImage = document.querySelector(".main-image img");

let quantity = 1;
let cartCount = 0;

sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
        sizeButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

quantityButtons[0].addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
    }
});

quantityButtons[1].addEventListener("click", () => {
    quantity++;
    quantityValue.textContent = quantity;
});

buyButton.addEventListener("click", () => {
    cartCount += quantity;
    cartButton.textContent = `Carrinho (${cartCount})`;
    alert("Produto adicionado ao carrinho!");
});

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
    });
});