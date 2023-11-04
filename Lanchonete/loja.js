{
    "menu"; [
      {
        "id": 1,
        "name": "Hamburguer de Siri",
        "description": "Um delicioso hambúrguer de siri com alface, queijo e molho secreto do Siri Cascudo.",
        "price": 8.99
      },
      {
        "id": 2,
        "name": "Hamburguer de Alga Marinha",
        "description": "Um hambúrguer com alga marinha crocante, tomate e molho especial.",
        "price": 7.49
      },
      {
        "id": 3,
        "name": "Batata Frita do Seu Siriguejo",
        "description": "Batatas fritas crocantes e douradas, servidas com ketchup e mostarda.",
        "price": 2.99
      },
      {
        "id": 4,
        "name": "Refresco de Água Salgada",
        "description": "Um refresco refrescante de água salgada com gelo picado.",
        "price": 1.99
      },
      {
        "id": 5,
        "name": "Coral de Sobremesa",
        "description": "Uma sobremesa doce feita de coral cristalizado e chantilly.",
        "price": 4.49
      }
    ]
  }
  


const addCard = document.getElementsByClassName("btn btn-primary")
for (var i = 0; addCard.length > i; i++) {
    addCard[i].addEventListener("click", adding_to_cart)
}


function adding_to_cart(event) {
    const button = event.target
    const product_info = button.parentElement
    const name_product = product_info.getElementsByClassName("card-title")[0].innerText
    console.log(name_product)
    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")


    newCartProduct.innerHTML = 
    `   
    <td class="name-product">
        <strong class="product-title">${name_product}</strong>
    </td>
    <td class="price">
        <span class="product-price">${product_price}</span>

    </td>
    `
    
    
}