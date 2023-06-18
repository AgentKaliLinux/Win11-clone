let splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000)
})

let bottom = document.querySelector(".bottom");
let startMenu = document.querySelector(".startMenu");
bottom.addEventListener('click', () => {
    if (startMenu.style.bottom == "70px") {
        startMenu.style.bottom = "-650px";
    }
    else {
        startMenu.style.bottom = "70px";
    }
})

let chromee = document.querySelector(".chrome");
let container = document.querySelector(".container");
chromee.addEventListener('click', () => {
    if (container.style.bottom == "100px") {
        container.style.bottom = "-650px";
    }
    else {
        container.style.bottom = "100px";
    }
});

let chromeIcon = document.querySelector(".chromeIcon");
let containerChrome = document.querySelector(".container");
chromeIcon.addEventListener('click', () => {
    if (container.style.bottom == "100px") {
        container.style.bottom = "-650px";
    }
    else {
        container.style.bottom = "100px";
    }
});

function chromeSearch() {
    let input = document.querySelector(".input").value;
    let answer = document.querySelector(".answer");
    document.querySelector(".history").innerHTML = input;
    switch (input) {
        case  "what is Apple":
        case  "what is Banana":
        case  "what is Apricot":
        case  "what is Atemoya":
        case  "what is Avocados":
        case  "what is Blueberry":
        case  "what is Blackcurrant":
        case  "what is Ackee":
        case  "what is Cranberry":
        case  "what is Cantaloupe":
        case  "what is Cherry":
        case  "what is Black":
        case  "what is sapote":
        case  "what is Chocolate":
        case  "what is pudding":
        case  "what is Dragonrfruit":
        case  "what is Dates":
        case  "what is Cherimoya":
        case  "what is Grapefruit":
        case  "what is Gooseberries":
        case  "what is Hazelnut":
        case  "what is Honeyberries":
        case  "what is Durian":
        case  "what is Horned Melon":
        case  "what is HogPlum":
        case  "what is Egg":
        case  "what is Feijoa":
        case  "what is Pineapple":
        case  "what is guava":
        case  "what is Guavasteen":
        case  "what is Indian Fig":
        case  "what is Ice Apple":
        case  "what is Guava":
        case  "what is Fuyu":
        case  "what is Persimmon":
        case  "what is Jackfruit":
        case  "what is Jujube":
        case  "what is Honeydew":
        case  "what is melon":
        case  "what is Jenipapo":
        case  "what is Kiwi":
        case  "what is Kabosu":
        case  "what is Kiwano":
        case  "what is Lime":
        case  "what is Lychee":
        case  "what is Longan":
        case  "what is Langsat":
        case  "what is Mulberry":
        case  "what is Pear":
        case  "what is Lucuma":
        case  "what is Muskmelon":
        case  "what is Naranjilla":
        case  "what is Mangosteen":
        case  "what is Nectarine":
        case  "what is Nance":
        case  "what is Quince":
        case  "what is Medlar":
        case  "what is fruit":
        case  "what is Olive":
        case  "what is Oranges":
        case  "what is Ramphal":
        case  "what is Mouse":
        case  "what is melon":
        case  "what is Papaya":
        case  "what is Peach":
        case  "what is Raspberries":
        case  "what is Strawberries":
        case  "what is Strawberry":
        case  "what is Mango":
            answer.innerHTML = "It Is Fruit";
    }
} 

 