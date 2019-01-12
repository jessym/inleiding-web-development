function createPanel(color) {
  const panel = document.createElement('div');
  panel.style.backgroundColor = color;
  panel.style.width = '400px';
  panel.style.height = '80px';
  return panel;
}

function createFlag(color1, color2, color3) {
  const container = document.createElement('div');
  container.style.border = '3px solid black';
  container.style.display = 'inline-block';
  container.appendChild(createPanel(color1));
  container.appendChild(createPanel(color2));
  container.appendChild(createPanel(color3));
  return container;
}

const dutchFlag = createFlag('red', 'white', 'blue');
document.body.appendChild(dutchFlag);

const germanFlag = createFlag('black', 'red', 'yellow');
document.body.appendChild(germanFlag);