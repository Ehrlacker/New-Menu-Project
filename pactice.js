/*-When the page loads, we want to access the array and dynamically populate the menu items.

-Thats why were targeting the section center for query selector

-const sectionCenter = document.querySelector('.section-section);
                               ^JS method


-Window.addEventListener('DOMContentLoaded', function(){
                          ^JS event           ^Callback function


});

-A callback is a function that is passed into another function and then called within that function.

-In the example above, if there's a click, the function above will be executed

-Next we want to be able to iterate over the items in the Array, then add some HTML,
then place the data into the HTML


let displaymenu = menu.map(function(item){
                      ^Iterates over menu array and returns a new array.
                      ^New array can be customized

return `<article class="menu-item">
          <img src="assets/images/pic-1.png" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>`

        })
console.log(displayMenu)
    });

        --^This is returning the HTML article. So the .map() method iterated over the menu array
        and returned a new array that contained the information above. This information above is 
        applied to every item in the new Array that came from the menu array.


------ NEXT BELOW-----

--NEXT WE WILL USE CONCATONATION TO FILL IN THE ITEMS IN THE HTML THAT WE WISH TO POPULATE
SEE THE DIFFERENCE BETWEEN THE ARTICLE TAG ABOVE AND BELOW


        `<article class="menu-item">
          <img src= ${item.img} alt=${item.title} class="photo" />
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

console.log(displayMenu)
})

-------NEXT BELOW-----

--NEXT WE WANT TO JOIN THE ARTICLE TAG ABOVE IN ONE STRING SO THAT IT CAN BE PLACED INTO THE HTML
SECTION CENTER

--WE ALSO WANT TO ADD THE NEW STRING TO THE INNER.HTML OF THE SECTION CENTER

   `<article class="menu-item">
          <img src= ${item.img} alt=${item.title} class="photo" />
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


});

displayMenu = displayMenu.join('');

---                         ^This joins all the information above into one string so that all of the commas
                            that we're in the console.log could be removed. That's because in an array, commas separate each item normally.


sectionCenter.innerHTML = displayMenu;

console.log(displayMenu)
})


-----NEXT BELOW-----

-----NEXT WE WANT TO PLACE ALL OF THE ABOVE CODE INTO A FUNCTION AND THEN JUST CALL
THAT FUNCTION WHEN WE WANT TO EXECUTE THAT CODE. WE CAN PASS IN THE MENU ARRAY AS A 
PARAMETER OF THE FUNCTION.




function displayMenuItems(arr){
let displaymenu = arr.map(function(item){


                    --^Instead of iterating over the menu array, we want to iterate over the 
                    array that we're eventually going to be passing through the function.

return `<article class="menu-item">
          <img src="assets/images/pic-1.png" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>`

        })
        sectionCenter.innerHTML = displayMenu;
console.log(displayMenu)

}




-----NEXT BELOW-----

--NEXT WE WANT TO PASS THE displayMenuItems FUNCTION INTO THE window. FUNCTION AT THE TOP.



-Window.addEventListener('DOMContentLoaded', function(){

displayMenuItems(menu);
--                --^originally we're passing in the menu array
});


-----NEXT BELOW


--NOW OUR PAGE IS READY WHEN IT LOADS, NEXT WE'LL ADD BUTTON FILTERS FOR DIFFERENT SECTIONS 
OF THE MENU. WE'RE GOING TO SELECT THE HTML BUTTONS WITH document.QuerySelector.

const filterBtns = document.querySelectorALL('.filter-btn)
//add this^ to the top of the page



-----NEXT BELOW-----

--NEXT WE WANT TO ITERATE OVER THE BUTTONS

filterBtns.forEach(function(btn){
btn.addEventListener('click', function(e){
                                     --^This is the event object it adds extra functionality.
 console.log(e.currentTarget.dataset) 
                ^This current target will be our button
                            --^.dataset alows us to add the -data attribute to our HTML elements
                            -We added the -data attribute to our buttons. you also have to give -data a
                            name so we did -data-id (we can put any name instead of id if we want)
                            --Then we addwhat button we want to select so we put -data-id"all", for
                            the all button.
})

})



-----NEXT BELOW

--ONCE WE HAVE THE ID IN HTML, WE WANT TO ASSIGN IT TO SOME KIND OF VARIABLE



filterBtns.forEach(function(btn){
btn.addEventListener('click', function(e){
const category = e.currentTarget.dataset.id;

---SO ABOVE WE USED CURRENT TARGET AND THE DATASET PROPERTY THEN WERE LOOKING FOR THE ID.

const menuCategory = menu.filter{function(menuItem){

    if(menuItem.category === category){
        return menuItem;
    }

    ^-THEN WE USED THE FILTER FUNCTION TO FILTER OUT THE ITEMS THAT HAVE THE SAME EXAT MATCHING CATEGORY
}};

if(category === `all`){
    displayMenuItems(menu)
} else{
    displyMenuItems(menuCategory);
}

-THEN AT THE END WE JUST CHECK( IF THE CATEGORY IS "ALL", THEN WE DISPLAY ALL OF THE ITEMS,
IF IT'S OTHER CATEGORIES, THEN WE'LL USE THE menuCategory which is the array that we filtered. )
Then we call displayMenuItems AND THEN PASS IN THE ARRAY of (menuCategory).

})

})

----



-----NEXT BELOW-----

--NEXT WE WANT TO CHANGE HOW WE USE OUR BUTTONS. WE HARD CODED OUR BUTTONS, AND THEN EACH BUTTON REFERENCES THE SPECIFIC BUTTON CATEGORY.
--NOW WHAT HAPPENS IF THE BUTTONS CHANGE FOR THE CATEGORIES AND WE WANT TO ADD NEW BUTTONS?
--IF WE CHANGE ANY OF THE DATA IN OUR ARRAY, OUR BUTTONS ARENT GOING TO MATCH

--SO NOW LETS SET UP THE BUTTONS DYNAMICALLY

--HERE ARE OUR STEPS
1) GET ONLY UNIQUE CATEGORIES
2)ITERATE OVER CATEGORIES, RETURN BUTTONS
3)MAKE SURE TO SELECT BUTTONS WHEN THEY ARE AVAILABLE.


NOW, LETS ADD IN THE BUTTONS DYNAMICALLY.



-Window.addEventListener('DOMContentLoaded', function(){
displayMenuItems(menu);

const categories = menu.reduce(function(values, item){
                                            ^With reduce, we have 2 parmeters in our callback function.
                                            and also we need to come up with some initial value. So categories = a new array

   if(!values.includes(item.category)) {
  --^IF VALUES (the array we're returning)
  DOES NOT INCLUDE THE ITEM CATEGORY(WHICH
    IS A PROPERTY OF EACH OF THE ITEMS
    IN OUR menu ARRAY THAT WE'RE ITERATING
    OVER)      

       values.push(itwm.category)
     --^THEN VALUES(OUR ARRAY) ADD
     THAT ITEM THAT YOU 
     HAVE IN THAT CATEGORY CATEGORY  
   }



return values;
     --^WHEN USING REDUCE, WE ALWAYS NEED TO RETURN
     THE VALUES     



}, ['all])
    --^INITIAL VALUE
    WE RETURNED OUR ARRAY WITH ONE ITEM IN IT.
    THE VALUE IS A STRING OF 'ALL'.
    WE USE A STRING OF `ALL` BECAUSE OF OUR FIRST BUTTON
    THAT REFERENCES ALL OF THE ITEMS(BUTTONS)

//console.log(categories)

const categoryBtns = categories.map(function(category){
    return `<button type="button" class="filter-btn"
     data-id=${category}>${category}</button>`
})
.join('')
//console.log(categoryBtns);
});



-----NEXT BELOW



const categoryBtns = categories.map(function(category){
     --^Variable name                         ^Reference each item as a category
    return `<button type="button" class="filter-btn"
     data-id=${category}>${category}</button>`

--^Instead of returning a string, 
we want to wrap the category value in 
the HTML

})
.join('')

--^this is the same as displayMenu = displayMenu.join('');

//console.log(categoryBtns);
});


--NEXT WE WANT TO TARGET THE BUTTONS CONTAINER. USING THE HTML
WE CAN ADD THE STRING SO WE CAN HAVE DYNAMIC BUTTONS. WE
ADD WHAT'S BELOW TO THE TOP OF THE PAGE LIKE ALL OF THE 
OTHER querySelectors

const container =document.querySelector('.btn-container');


--AFTER THE .join('') WE ADD CONTAINER.INNERHTML


.join('')
container.innerHTML = categoryBtns
this dynamically adds the buttons

-----NEXT BELOW

--NEXT WE MOVE THE FILTERBTNS QUERY SELECTOR SO THAT
AFTER THE BUTTONS ARE LOADED ON THE PAGE, THEN THEY CAN BE FILTERED.


.join('')
container.innerHTML = categoryBtns
const filterBtns = document.querySelectorAll('.filter-btn')


-----NEXT BELOW-----
--NEXT WE MOVE THE ENTIRE BLOCK BELOW UNDER THE PREVIOUS .JOIN('')


.join('')
container.innerHTML = categoryBtns
const filterBtns = document.querySelectorAll('.filter-btn')

--SO RIGHT UNDER THIS ^

filterBtns.forEach(function(btn){
btn.addEventListener('click', function(e){
const category = e.currentTarget.dataset.id;
const menuCategory = menu.filter{function(menuItem){

    if(menuItem.category === category){
        return menuItem;
    }
   
}};

if(category === `all`){
    displayMenuItems(menu)
} else{
    displyMenuItems(menuCategory);
}
})
})








-----EXAMPLE-----

const button = document.querySelector('button')

function toggle(){
    button.classList.toggle('altColor')
}

-^This function toggles the color of a button in another project

-We're going to use a callback function to call the toggle function when certain conditions are met.

button.addEventListener('click', toggle)
-^If you click on a button, we want the toggle to happen





button.addEventListener('click', function(){

    button.classList.toggle('altColor')
})

---This^ gives us the same results as above.


-----NEXT BELOW
--NEXT WE'RE GOING TO SET UP A FUNCTION FOR THE FILTER BTNS
AND ENVOKE THAT FUNCTION IN THE EVENT LISTENER.


function displayMenuButtons(){
--WE PLACED THE CODE BELOW INTO THE ABOVE FUNCTION.

filterBtns.forEach(function(btn){
btn.addEventListener('click', function(e){
const category = e.currentTarget.dataset.id;
const menuCategory = menu.filter{function(menuItem){

    if(menuItem.category === category){
        return menuItem;
    }
   
}};

if(category === `all`){
    displayMenuItems(menu)
} else{
    displyMenuItems(menuCategory);
}
})
})


}



-----NEXT BELOW-----
--FINALLY WE WANT TO INVOKE THAT FUNCTION


-Window.addEventListener('DOMContentLoaded', function(){
displayMenuItems(menu);

displayMenuButtons();
--^INVOKING THE FUNCTION
})



-----END-----



-----TIPS-----
Once you write a function, write console.log('heeeyyyy') in the function to make sure that function works
*/

