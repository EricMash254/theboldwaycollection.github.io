// let search = document.querySelector('.search-box');

// document.querySelector('#search-icon').onclick = () => {
//     search.classList.toggle('active');
//     navbar.classList.remove('active');
// }

// // Navbar
// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-icon').onclick = () => {
//     navbar.classList.toggle('active');
//     search.classList.remove('active');
// }
// // Remove menu and search icon on scroll
// window.onscroll = () => {
//     navbar.classList.remove('active');
//     search.classList.remove('active');
// }
let search = document.querySelector(".search-box");
let navbar = document.querySelector(".navbar");

if (search) {
  document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
    if (navbar) {
      navbar.classList.remove("active");
    }
  };
}

if (navbar) {
  document.querySelector("#menu-icon").onclick = () => {
    navbar.classList.toggle("active");
    if (search) {
      search.classList.remove("active");
    }
  };

  // Remove menu and search icon on scroll
  window.onscroll = () => {
    navbar.classList.remove("active");
    if (search) {
      search.classList.remove("active");
    }
  };
}

// Header animation
// let header = document.querySelector('.header');

// window.addEventListener('scroll', ()=> {
//     header.classList.toggle('active', window.scrollY > 0);
// })

let header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY > 0);
  });
}
// scroll reveal
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

//brings the floating effect when reloading the page
sr.reveal(".home-text", { delay: 200, origin: "top" });
sr.reveal(".about-text", { delay: 200, origin: "bottom" });
sr.reveal(".heading", { delay: 200, origin: "top" });
// sr.reveal(".products-container .box", { delay: 100, origin: "top" });
// sr.reveal(".customers-container", { delay: 100, origin: "top" });
sr.reveal(".newsletter .box", { delay: 200, origin: "bottom" });

// Sidebar dropdown
// Dropdown elements
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item=> {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function (e) {
        e.preventDefault();
        // close other dropdown when another one opens
        if(!this.classList.contains('active')){
            allDropdown.forEach(i=> {
                const aLink = i.parentElement.querySelector('a:first-child');

                this.classList.remove('active');
                i.classList.remove('show');
            })
        }
        this.classList.toggle('active');
        item.classList.toggle('show');
    })
}); 
// Attach click event listeners to sidebar links
sidebarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetURL = link.getAttribute('href');
    loadContent(targetURL);
  });
});

// // Cart
// let cartIcon = document.querySelector("#cart-icon");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector("#close-cart");

// // Open Cart
// cartIcon.onclick = () => {
//   cart.classList.add("active");
// };
// // close cart
// closeCart.onclick = () => {
//   cart.classList.remove("active");
// };

// // working cart js
// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }
// // making functions
// function ready() {
//   //remove items from cart
//   var removeCartButtons = document.getElementsByClassName("cart-remove");
//   console.log(removeCartButtons);
//   for (var i = 0; i < removeCartButtons.length; i++) {
//     var button = removeCartButtons[i];
//     button.addEventListener("click", removeCartItem);
//   }
//   //  Quantity changes
//   var quantityInputs = document.getElementsByClassName("cart-quantity");
//   for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i];
//     input.addEventListener("change", quantityChanged);
//   }
//   // Add to cart

//   var addToCart = document.getElementsByClassName("add-cart");
//   for (var i = 0; i < addToCart.length; i++) {
//     var button = addToCart[i];
//     button.addEventListener("click", addToCartClicked);
//   }
// // Buy Now button
//   document
//   .getElementsByClassName("btn-buy")[0]
//   .addEventListener("click", buyButtonClicked);
// } 
// // Buy Button
// function buyButtonClicked(){
//     alert('Thank you for shopping with us')[0];
//     var cartContent = document.getElementsByClassName("cart-content")[0];
//     while (cartContent.hasChildNodes()) {
//         cartContent.removeChild(cartContent.firstChild);
//     }
//     updatetotal();
// }
// // remove items from cart
// function removeCartItem(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
//   updatetotal();
// }
// // quantity changes
// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updatetotal();
// }
// // Add to cart
// function addToCartClicked(event) {
//   var button = event.target;
//   var shopProduct = button.parentElement;
//   var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
//   var price = shopProduct.getElementsByClassName("price")[0].innerText;
//   var productImg = shopProduct.getElementsByClassName("product-Img")[0].src;
//   addProductToCart(title, price, productImg);
//   updatetotal();
// }
// // add products to cart
// function addProductToCart(title, price, productImg) {
//   var cartShopBox = document.createElement("div");
//   cartShopBox.classList.add("cart-box")
//   var cartItems = document.getElementsByClassName("cart-content")[0];
//   var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//   for (var i = 0; i < cartItemsNames.length; i++) {
//     if (cartItemsNames[i].innerText == title) {
//     alert("You have already added this item to the cart");
//     return;
//   }
// }
// var cartBoxContent = `
// <img src="${productImg}" alt="" class="cart-img">
// <div class="detail-box">
//     <div class="cart-product-title">
//         ${title}
//     </div>
// <div class="cart-price">${price}</div>
// <input type="number" value="1" class="cart-quantity">
// </div>
// <!-- Remove from Cart -->
// <i class="bx bxs-trash-alt cart-remove"></i>`;
// cartShopBox.innerHTML = cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox
//  .getElementsByClassName("cart-remove")[0]
//  .addEventListener("click", removeCartItem);
// cartShopBox
//  .getElementsByClassName("cart-quantity")[0]
//  .addEventListener("change", quantityChanged);

// }

// // update total
// function updatetotal() {
//   var cartContent = document.getElementsByClassName("cart-content")[0];
//   var cartBoxes = cartContent.getElementsByClassName("cart-box");
//   var total = 0;
//   for (var i = 0; i < cartBoxes.length; i++) {
//     var cartBox = cartBoxes[i];
//     var priceElement = cartBox.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//     var price = parseFloat(priceElement.innerText.replace("Kes.", ""));
//     var quantity = quantityElement.value;
//     total = total + price * quantity;
//   }
//     document.getElementsByClassName("total-price")[0].innerText =
//       "Kes. " + total;
  
// }
