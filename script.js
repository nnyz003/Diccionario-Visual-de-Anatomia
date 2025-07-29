const tooltip = document.getElementById("tooltip");

function mostrarNombre(e) {
  const nombre = e.target.getAttribute("data-nombre");
  tooltip.textContent = nombre;
  tooltip.style.display = "block";
  tooltip.style.left = `${e.pageX + 10}px`;
  tooltip.style.top = `${e.pageY + 10}px`;
}

function ocultarNombre() {
  tooltip.style.display = "none";
}

function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach((s) => s.classList.remove("visible"));
  document.getElementById(id).classList.add("visible");

  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
  const btn = Array.from(document.querySelectorAll(".tab-btn")).find((b) => b.textContent.toLowerCase().includes(id));
  if (btn) btn.classList.add("active");
}
