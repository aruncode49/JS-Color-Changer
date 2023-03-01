const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const purple = document.querySelector(".purple");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBGColor = (element) => {
    return window.getComputedStyle(element).backgroundColor;
}

// console.log(getBGColor());

// red.addEventListener("click", () => {
//     center.style.background = getBGColor(red);
// })


const colorChanger = (element, color) => {
    element.addEventListener("click", () => {
        center.style.background = color;
    })
}

colorChanger(red, getBGColor(red));
colorChanger(cyan, getBGColor(cyan));
colorChanger(purple, getBGColor(purple));
colorChanger(orange, getBGColor(orange));
colorChanger(pink, getBGColor(pink));
