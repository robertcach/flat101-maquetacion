const firstSelect = document.getElementsByClassName("selects__products")
const selectProducts = document.createElement("select")
selectProducts.className = "selects__single"

const firstSelectProducts = document.createElement("option")
firstSelectProducts.innerText = "Products (53)"

const secondSelectProducts = document.createElement("option")
secondSelectProducts.innerText = "Grifos"

const thirdSelectProducts = document.createElement("option")
thirdSelectProducts.innerText = "Espejos"

firstSelect[0].appendChild(selectProducts)
selectProducts.appendChild(firstSelectProducts)
selectProducts.appendChild(secondSelectProducts)
selectProducts.appendChild(thirdSelectProducts)



const secondSelect = document.getElementsByClassName("selects__sort")
const orderProducts = document.createElement("select")
orderProducts.className = "selects__single"

const firstOrderProducts = document.createElement("option")
firstOrderProducts.innerText = "Plateados"

const secondOrderProducts = document.createElement("option")
secondOrderProducts.innerText = "Largos"

secondSelect[0].appendChild(orderProducts)
orderProducts.appendChild(firstOrderProducts)
orderProducts.appendChild(secondOrderProducts)