//Part 1
//Select main element and name it mainEl
const mainEl = document.querySelector('main');

console.log (mainEl)
//Set it to this a specific background color
mainEl.style.backgroundColor = 'var(--main-bg)'

//Create a h1 element
let h1 = document.createElement("h1");
//Add text to the h1 element
h1.innerHTML = "DOM MANIPULATION";

mainEl.appendChild(h1);
//Add class of flex
mainEl.classList.add('flex-ctr')

//Part Two: Creating a Menu Bar

const topMenuEl = document.querySelector("#top-menu")

//Set height to 100%

topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add("flex-around");

// Part Three: Adding menu buttons

const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

menuLinks.forEach((link)=>{

    //create anchor element
    const aElement = document.createElement("a");
    //added href
    aElement.href = link.href
    //added text content
    aElement.textContent = link.text
    //appended to topmenu element
    topMenuEl.appendChild(aElement);
})