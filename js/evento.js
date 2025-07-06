console.log("Iniciando animaciones AOS...");
AOS.init();

console.log("Inicializando efecto de escritura con Typed.js...");
var typed = new Typed("#typed", {
  strings: [
    "Eres una docente increíble...",
    "Una mujer maravillosa...",
    "Y el amor de mi vida. ❤️"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
  onBegin: function() {
    console.log("Typed.js ha comenzado.");
  },
  onStringTyped: function(arrayPos, self) {
    console.log("Cadena escrita:", self.strings[arrayPos]);
  }
});

function mostrarMensaje() {
  console.log("Botón presionado: mostrando mensaje oculto.");
  document.getElementById("mensajeOculto").style.display = "block";
}
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audioFondo");
    const intento = audio.play();
  
    if (intento !== undefined) {
      intento
        .then(() => {
          console.log(" Audio reproducido");
        })
        .catch((err) => {
          console.warn("Audio bloqueado. Esperando interacción del usuario...");
  
          const habilitar = () => {
            audio.play()
              .then(() => {
                console.log("Audio reproducido tras clic.");
                document.removeEventListener("click", habilitar);
              })
              .catch(error => {
                console.error("Error al intentar reproducir:", error);
              });
          };
  
          document.addEventListener("click", habilitar);
        });
    }
  });
  