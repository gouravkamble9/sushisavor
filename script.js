

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const category = [
  // {
  //   name: "All",
  //   url: "",
  // },
  {
    name: "Sushi",
    url: "sushi-9.png",
  },
  {
    name: "Ramen",
    url: "sushi-8.png",
  },
  {
    name: "Udon",
    url: "sushi-7.png",
  },
  {
    name: "Dango",
    url: "sushi-6.png",
  },
];


const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi",
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

const cards = [
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871012/sushisavor/sushi-12_hhnfl4.png",
    alt: "sushi-12",
    title: "Sakura Blossom",
    rating: "4.8",
    price: "$21.00",
    category: "Sushi",
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871016/sushisavor/sushi-11_zreoo0.png",
    alt: "sushi-11",
    title: "Oceanic Paradise",
    rating: "4.9",
    price: "$25.00",
    category: "Sushi",
    active: true,
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871011/sushisavor/sushi-13_uvwmwk.png",
    alt: "sushi-10",
    title: "Dragon's Delight",
    rating: "4.7",
    price: "$20.00",
    category: "Sushi",
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871009/sushisavor/sushi-10_azadaf.png",
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.8",
    price: "$22.00",
    category: "Ramen",
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871024/sushisavor/ramen-1_fujse4.png",
    alt: "sushi-10",
    title: "Miso Marvel",
    rating: "4.9",
    price: "$21.00",
    category: "Ramen",
    active: true,
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871017/sushisavor/ramen-2_mdlvxv.png",
    alt: "sushi-10",
    title: "Tokyo Tonkotsu",
    rating: "4.8",
    price: "$22.00",
    category: "Ramen",
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871013/sushisavor/udon-1_rl967a.png",
    alt: "sushi-10",
    title: "Miso Magic",
    rating: "4.8",
    price: "$21.00",
    category: "Udon",
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871016/sushisavor/udon-2_zbbij3.png",
    alt: "sushi-10",
    title: "Teriyaki Treasure",
    rating: "4.8",
    price: "$21.00",
    category: "Udon",
    active: true,
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871011/sushisavor/udon-3_iotnyb.png",
    alt: "sushi-10",
    title: "Kyoto Delight",
    rating: "4.7",
    price: "$19.00",
    category: "Udon",
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871016/sushisavor/dango-1_zzo42u.png",
    alt: "sushi-10",
    title: "Sakura Blossom",
    rating: "4.7",
    price: "$20.00",
    category: "Dango",
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871009/sushisavor/dango-2_pp1kem.png",
    alt: "sushi-10",
    title: "Matcha Moments",
    rating: "4.9",
    price: "$21.00",
    category: "Dango",
    active: true,
  },
  {
    imgSrc: "https://res.cloudinary.com/dyhgopnii/image/upload/v1694871017/sushisavor/dango-3_xs8gf5.png",
    alt: "sushi-10",
    title: "Rainbow Rice",
    rating: "4.8",
    price: "$23.00",
    category: "Dango",
  },
];




function handleSelect(cat) {
  const popular_food = document.querySelector(".popular-foods__catalogue");
  const filterCard=cards.filter((food)=>{return food.category===cat})
  popular_food.innerHTML = filterCard
    .map((item) => {
      return `<article class="popular-foods__card ${
        item.active ? "active-card" : ""
      } ">
    <img
      class="popular-foods__card-image"
      src="${item.imgSrc}"
      alt="sushi"
    />
    <h4 class="popular-foods__card-title">${item.title}</h4>
    <div class="popular-foods__card-details flex-between">
      <div class="popular-foods__card-rating">
        <img src="/assets/star.svg" alt="star" />
        <p>${item.rating}</p>
      </div>

      <p class="popular-foods__card-price">${item.price}</p>
    </div>
  </article>`;
    })
    .join("");
}


document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  activateButton(sushi);
  handleSelect("Sushi"); // Initial call to handleSelect

});


const dango=document.querySelector("#dango")
const ramen=document.querySelector("#ramen")
const sushi=document.querySelector("#sushi")
const udon=document.querySelector("#udon")

function activateButton(button) {
  // Remove "active-card" class from all buttons
  dango.classList.remove("active");
  ramen.classList.remove("active");
  sushi.classList.remove("active");
  udon.classList.remove("active");

  // Add "active-card" class to the clicked button
  button.classList.add("active");
}

dango.addEventListener("click",()=>{
  activateButton(dango);
  handleSelect("Dango")
})

ramen.addEventListener("click",()=>{
  activateButton(ramen);
  handleSelect("Ramen")
})

sushi.addEventListener("click",()=>{
  activateButton(sushi);
  handleSelect("Sushi")
})


udon.addEventListener("click",()=>{
  activateButton(udon);
  handleSelect("Udon")
})

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuButton = document.getElementById("close-menu");
  const mobile_menu=document.getElementById("mobile-menu-items")
  
  mobile_menu.addEventListener("click",function (){
    mobileMenu.style.left = "-100%";
  })

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.style.left = "0";
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.style.left = "-100%";
  });
});



