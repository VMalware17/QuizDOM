//llamo los diferentes elementos de la pagina con el querySelector

const capa = document.querySelector("#lista");
const btnAgregar = document.querySelector("#btnAgregar");
const btnEliminar1 = document.querySelector("#btnEliminar1");
const btnEliminar2 = document.querySelector("#btnEliminar2");
const inputTareas = document.querySelector("#tareas");
const pendientes = document.querySelector("#pendientes");

//capta la informacion del boton Aumentar y crea un texto que agrega
btnAgregar.addEventListener("click", () => {
  //agrega la lista dando click desde el boton
  const li = document.createElement("li");
  let texto = document.getElementById("tareas").value;
  li.textContent = texto;

  //crea la dependencia entre la capa de pendientes y la lista
  pendientes.appendChild(li);
});

//capta la informacion del boton Disminuir y elimina el texto que agrega
btnEliminar1.addEventListener("click", () => {
  pendientes.removeChild(pendientes.lastChild);
});

capa.appendChild(pendientes);

//capta la informacion del boton Disminuir y elimina el texto que agrega
btnEliminar1.addEventListener("click", () => {
  pendientes.removeChild(pendientes.firstChild);
});

capa.appendChild(pendientes);
