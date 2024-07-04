const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

//console.log(camposDeFormulario)
//console.log(formulario)

camposDeFormulario.forEach((campo)=>{
campo.addEventListener("blur", ()=>verificarCampo())

});

function verificarCampo(campo) {
     
}  


formulario.addEventListener("submit", (e) => {
  
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    email: e.target.elements["email"].value,
    asunto: e.target.elements["asunto"].value,
    mensaje: e.target.elements["mensaje"].value,
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
    alert("el mensaje ha sido enviado");
});