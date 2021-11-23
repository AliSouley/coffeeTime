// funcction for ButtonSearch
let MyFormSearch=document.querySelector('.search-form');

document.querySelector('#search-button').onclick = ()=>{
    MyFormSearch.classList.toggle('active');
    navBarQuery.classList.remove('active');
    shoppingOrders.classList.remove('active');
    formLogin.classList.remove('active');
}

// funcction buttonOrdersCart

let shoppingOrders=document.querySelector('.shopping-orders');

document.querySelector('#cart-button').onclick = ()=>{
    shoppingOrders.classList.toggle('active');
    navBarQuery.classList.remove('active');
    MyFormSearch.classList.remove('active');
    formLogin.classList.remove('active');
}

// funcction buttonSign

let formLogin=document.querySelector('.form-login');

document.querySelector('#login-button').onclick = ()=>{
    formLogin.classList.toggle('active');
    navBarQuery.classList.remove('active');
    shoppingOrders.classList.remove('active');
    MyFormSearch.classList.remove('active');
}

// funcction navbarQuery

let navBarQuery=document.querySelector('.navbar');

document.querySelector('#menu-button').onclick = ()=>{
    navBarQuery.classList.toggle('active');
    shoppingOrders.classList.remove('active');
    MyFormSearch.classList.remove('active');
    formLogin.classList.remove('active');
}

// function to remove button staking on top of each other

window.onscroll = ()=>{
    navBarQuery.classList.remove('active');
    shoppingOrders.classList.remove('active');
    MyFormSearch.classList.remove('active');
    formLogin.classList.remove('active');
}

// swiper Psec

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 15,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    centerdslides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  // swiper Rsec

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 15,
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    centerdslides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });