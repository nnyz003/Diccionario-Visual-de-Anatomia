const tooltip = document.getElementById('tooltip');

function mostrarNombre(e) {
  const nombre = e.target.getAttribute('data-nombre');
  tooltip.textContent = nombre;
  tooltip.style.display = 'block';
  tooltip.style.left = `${e.pageX + 10}px`;
  tooltip.style.top = `${e.pageY + 10}px`;
}

function ocultarNombre() {
  tooltip.style.display = 'none';
}
