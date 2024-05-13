// Obtener referencia al input y al botón
let inputTarea = document.getElementById("nuevaTarea");
let botonAgregar = document.getElementById("agregarBoton");
let listaTareas = document.getElementById("listaTareas");

// Agregar un evento de clic al botón
botonAgregar.addEventListener("click", function () {
  // Obtener el valor del input
  let nuevaTarea = inputTarea.value.trim();

  // Verificar si el input no está vacío
  if (nuevaTarea !== "") {
    // Crear un nuevo elemento de lista (li)
    let nuevaTareaElemento = document.createElement("li");

    // Establecer el texto del nuevo elemento
    nuevaTareaElemento.textContent = nuevaTarea;

    // Agregar la nueva tarea a la lista
    listaTareas.appendChild(nuevaTareaElemento);

    // Limpiar el input después de agregar la tarea
    inputTarea.value = "";
  }
});

// Agregar un evento de clic a la lista para eliminar tareas
listaTareas.addEventListener("click", function (event) {
  // Verificar si se hizo clic en un elemento de lista (li)
  if (event.target.tagName === "LI") {
    // Eliminar la tarea
    event.target.remove();
  }
});
