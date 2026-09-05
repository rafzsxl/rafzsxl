const fs = require('fs');

const path = 'dist/pacman-contribution-graph-dark.svg';
let svg = fs.readFileSync(path, 'utf8');

svg = svg.replace(
  /(<svg[^>]*>)/,
  '$1<rect width="100%" height="100%" fill="#000000"/>'
);

fs.writeFileSync(path, svg);
console.log('Fundo preto adicionado com sucesso!');
