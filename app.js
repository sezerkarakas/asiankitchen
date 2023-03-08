const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
    "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
    "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
    "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
    "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
    "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
    "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
]

// To reach DOM objects
let menuDOM = document.querySelector(".menu")
let btnDOM = document.querySelector(".btn-container")
let sectionDOM = document.querySelector(".section-center.row")


// Setting Buttons to use categorization
let allBtn = document.createElement("button")
allBtn.textContent = "All"
allBtn.classList.add("btn", "btn-outline-dark", "btn-item")// for some style
allBtn.id = "allBtn"
btnDOM.append(allBtn)

// Listing all the elements of the array
allBtn.addEventListener("click", function(){
  // Firstly deleting all the elements in the page 
  deleteAll()
  // Then creating new elements to show
  groups["Korea"].forEach(element =>{
    createCard(element)
  })
  groups["Japan"].forEach(element=>{
    createCard(element)
  })
  groups["China"].forEach(element=>{
    createCard(element)
  })
  
})

// Same things done here too
let koreaBtn = document.createElement("button")
koreaBtn.textContent = "Korea"
koreaBtn.classList.add("btn", "btn-outline-dark", "btn-item")
btnDOM.append(koreaBtn)
koreaBtn.addEventListener("click",function(){
  deleteAll()
  groups["Korea"].forEach(element => {
    createCard(element)
});})

let japanBtn = document.createElement("button")
japanBtn.textContent = "Japan"
japanBtn.classList.add("btn", "btn-outline-dark", "btn-item")
btnDOM.append(japanBtn)
japanBtn.addEventListener("click",function(){
  deleteAll()
  groups["Japan"].forEach(element => {
  return createCard(element)
  
});})

let chinaBtn = document.createElement("button")
chinaBtn.textContent = "China"
chinaBtn.classList.add("btn", "btn-outline-dark", "btn-item")
btnDOM.append(chinaBtn)
chinaBtn.addEventListener("click",function(){
  deleteAll()
  groups["China"].forEach(element => {
  createCard(element)
});})



// This is for grouping array elements for navigating in the site
function groupBy(arr, property){
  return arr.reduce(function(memo, x){
    if(!memo[x[property]]){
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  },{});
}

// Creating new array
let groups = groupBy(menu, "category")

console.log(groups)


// This is  for deleting all the elements in the site because i don't know to do it without deleting all the elements
const deleteAll = () =>{
  sectionDOM.replaceChildren()
}


// This is for creating cards
const createCard = (element) =>{

  let divDOM = document.createElement("div")
  let imgDOM = document.createElement("img")
  let infoDOM = document.createElement("div")
  let titleDOM = document.createElement("div")
  let textDOM = document.createElement("div")
  let nameDOM = document.createElement("h4")
  let priceDOM = document.createElement("h4")
  
  divDOM.classList.add("menu-items", "col-lg-6", "col-sm-12")
  imgDOM.classList.add("photo")
  infoDOM.classList.add("menu-info")
  titleDOM.classList.add("menu-title")
  textDOM.classList.add("menu-text")

  sectionDOM.appendChild(divDOM)
  divDOM.appendChild(imgDOM)
  divDOM.appendChild(infoDOM)
  infoDOM.appendChild(titleDOM)
  titleDOM.appendChild(nameDOM)
  titleDOM.appendChild(priceDOM)
  infoDOM.appendChild(textDOM)

  imgDOM.src = element.img
  textDOM.textContent = element.desc
  nameDOM.textContent = element.title
  priceDOM.textContent = element.price

  

}

// And finally creating the main page
window.onload = function () {
  document.getElementById("allBtn").click(); };