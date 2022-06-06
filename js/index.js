const firstSelect = document.getElementsByClassName("selects__products")
const selectProducts = document.createElement("select")
selectProducts.className = "selects__single"
selectProducts.id = "select1"


const firstSelectProducts = document.createElement("option")
firstSelectProducts.innerText = "Products (53)"
firstSelectProducts.value = "products"

const secondSelectProducts = document.createElement("option")
secondSelectProducts.innerText = "Grifos"
secondSelectProducts.value = "grifos"

const thirdSelectProducts = document.createElement("option")
thirdSelectProducts.innerText = "Espejos"
thirdSelectProducts.value = "espejos"

firstSelect[0].appendChild(selectProducts)
selectProducts.appendChild(firstSelectProducts)
selectProducts.appendChild(secondSelectProducts)
selectProducts.appendChild(thirdSelectProducts)


const secondSelect = document.getElementsByClassName("selects__sort")
const orderProducts = document.createElement("select")
orderProducts.className = "selects__single"
orderProducts.id = "select2"

const firstOrderProducts = document.createElement("option")
firstOrderProducts.innerText = "ORDENAR POR"

const secondOrderProducts = document.createElement("option")
secondOrderProducts.innerText = "Largos"

secondSelect[0].appendChild(orderProducts)
orderProducts.appendChild(firstOrderProducts)
orderProducts.appendChild(secondOrderProducts)