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
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audioFondo");
  
    // Intentar reproducir directamente
    const playPromise = audio.play();
  
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("🎵 Audio reproducido automáticamente.");
        })
        .catch((error) => {
          console.warn("⚠️ El navegador bloqueó el autoplay. Esperando interacción del usuario.");
  
          // Esperar a que el usuario haga clic en cualquier parte
          const activarAudio = () => {
            audio.play().then(() => {
              console.log("🎵 Audio iniciado tras interacción.");
              document.removeEventListener("click", activarAudio);
            }).catch(err => {
              console.error("❌ Error al reproducir el audio tras interacción:", err);
            });
          };
  
          document.addEventListener("click", activarAudio);
        });
    }
  });
  