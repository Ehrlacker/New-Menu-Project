'use strict'


const menu = [
{
    item: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 8.00,
    img: "assets/images/pic-1.png",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
},

{
    item: 2,
    title: "burger",
    category: "lunch",
    price: 8.00,
    img: "assets/images/pic-2.png",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
},

{
    item: 3,
    title: "steak",
    category: "dinner",
    price: 22.00,
    img: "assets/images/pic-3.png",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
},

{
    item: 4,
    title: "icecream",
    category: "dessert",
    price: 5.00,
    img: "assets/images/pic-4.png",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
},

]



//-----What do we want?-----

//1) We want the items in our array to populate the items in our html when the page loads.
//2)We want our buttons to separate menu items by category when clicked on.
//3)We want our home button to show all of the items.






const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn")

window.addEventListener('DOMContentLoaded', function(){
showMenuItems(menu)
});




filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){


    const category = e.currentTarget.dataset.id;

    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem;
    }
  });

  if(category === 'all'){
    showMenuItems(menu)
} else{
    showMenuItems(menuCategory);
}
console.log(menuCategory)
  });
  
});


function showMenuItems(menuItems){
let showMenu = menuItems.map(function(item){

  return `<article class="menu-item">
  <img src= ${item.img} alt= ${item.title}" class="photo" />
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
    </header>
    <p class="item-text">
      ${item.text}
    </p>
  </div>
</article>`


})

showMenu = showMenu.join('');
sectionCenter.innerHTML = showMenu;
};











