let contenedorModal = document.querySelector(".contenedor-modal");
let botonesAbrirModal = document.getElementsByClassName("btn-modal-abrir");
let botonesCerrarModal = document.getElementsByClassName("btn-modal-cerrar");
let modalActual = null;

for (const boton of botonesAbrirModal){
    boton.addEventListener("click", () => {
        contenedorModal.style.visibility = "visible";
        let modalObjetivo = document.querySelector(boton.getAttribute("data-modal-objetivo"));
        if (modalActual) {
            cerrarModal(modalActual);
        }
        modalObjetivo.style.display = "flex";
        modalActual = modalObjetivo;
    })
};

const cerrarModal = modal => {
    modal.style.display = "none";
    
    //Limpiar inputs dentro del modal si es que tiene
    inputsModal = modal.querySelectorAll("input");
    for (input of inputsModal){
        input.value = input.defaultValue;
    };

    modalActual = null;
};

const cerrarContenedorModal = () => {
    cerrarModal(modalActual);
    contenedorModal.style.visibility = "hidden";
}

contenedorModal.addEventListener("click", (evento) => {
    if (evento.target === contenedorModal) {
        cerrarContenedorModal();
    }
});

for (const boton of botonesCerrarModal){
    boton.addEventListener("click", cerrarContenedorModal);
};