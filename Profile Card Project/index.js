setInterval(colorChanger, 1000);
function colorChanger() {
  let html = "conic-gradient(from var(--angle), ";
  let colors = [
    "#ff008c",
    "#00ffea",
    "#ff0000",
    "#6200ff",
    "#00a2ff",
    "#ffae00",
    "#8c00ff",
    "#00ff44",
  ];
  for (let i = 0; i < 8; i++) {
    let index = Math.floor(Math.random() * colors.length);
    html += colors[index] + ", ";
  }
  html = html.slice(0, -2);
  html += ")";
  document.getElementsByClassName("rotation")[0].style.backgroundImage = html;
}
