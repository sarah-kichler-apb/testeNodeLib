//Command Line Interface (cli)
//Importando a função
import pegaConteudo from "./index.js";
import chalk from 'chalk';
import fs from "fs"


//1) criar uma variável para recepcionar o caminho via terminal
const caminho = process.argv;
console.log(caminho);
//pegaConteudo(caminho[2]);


async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaConteudo(caminho);
        console.log(chalk.blue('Lista de links:'), resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async(nomeDoArquivo)=>{
            const lista = await pegaConteudo(`${caminho}/${nomeDoArquivo}`)
            console.log(chalk.redBright(`${caminho}/${nomeDoArquivo}`));
            console.log(lista);
        });
    }

}

processaTexto(caminho);

