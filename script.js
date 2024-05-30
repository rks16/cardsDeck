const crdsrc = document.getElementsByTagName("img")[0]
const crdtype = document.getElementById("type")
const shuffle = document.getElementById("btn") 
const url = "https://www.deckofcardsapi.com/api/deck/new/draw/?count=1"

let getCard = ()=>{
    fetch(url)
    .then(data=> data.json())
    .then(item =>{

        console.log(item);
        let x = document.createElement("div")
        x.setAttribute("class","container")
        
        // console.log(item.cards[0].suit);
        // console.log(item.cards[0].value);
        // console.log(item.cards[0].image);

        // crdsrc.src = `${item.cards[0].image}`
        // crdtype.textContent = `${item.cards[0].value} of  ${item.cards[0].suit}`

        x.innerHTML = `
        <div class="card">
            <img src="${item.cards[0].image}" alt="card" >
            <h3 id="type">${item.cards[0].value} of  ${item.cards[0].suit}</h3>
        </div>`

        let y= document.querySelector(".cardContainer")
        y.appendChild(x)

    })
}

shuffle.addEventListener("click",getCard)
getCard()