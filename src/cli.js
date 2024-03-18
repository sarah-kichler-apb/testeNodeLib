//Command Line Interface (cli)
//Importando a função
import pegaConteudo from "./index.js";



//1) criar uma variável para recepcionar o caminho via terminal
const caminho = process.argv;
console.log(caminho);
pegaConteudo(caminho[2]);

