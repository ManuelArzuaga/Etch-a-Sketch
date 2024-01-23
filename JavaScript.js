const container = document.querySelector("#container");


for(let i=0; i<36;i++){ //crea un grid
  let div = document.createElement("div"); //crea el elemento div
  div.classList.add("grid-item") //le da la clase grid-item
  //div.textContent = "i";
  container.appendChild(div); //lo pone en el container
  
}

