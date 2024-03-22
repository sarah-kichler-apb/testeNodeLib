//Command Line Interface (cli)
//Importando a função
import pegaConteudo from "./index.js";
import fs from "fs"
import chalk from 'chalk';
import listaValidada from "./http-validacao.js";

//1) criar uma variável para recepcionar o caminho via terminal
//process = valores dos argumentos na linha de comando
const caminho = process.argv;
//console.log(caminho);
//pegaConteudo(caminho[2]);

async function imprimeLista(valida, resultado, identificador = "") {
    if (valida) {
        console.log(chalk.blue('Lista de links:'), chalk.blackBright.bgGreen(identificador), await listaValidada(resultado));
    } else {
        console.log(chalk.blue('Lista de links:'), chalk.blackBright.bgGreen(identificador), resultado);
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    //0ª posição: node - 1ª posição: caminho do documento que estou - 2ª posição: arquivo ou diretório - 3ª posição: "--valida"
    const valida = argumentos[3] === "--valida" ;

    try {
        fs.statSync(caminho)
    }
    catch (erro) {
        if (erro.code === "ENOENT") {
            console.log("Arquivo ou diretório não encontrado!!");
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaConteudo(caminho);
        //      console.log(chalk.blue('Lista de links:'), resultado);
        imprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaConteudo(`${caminho}/${nomeDoArquivo}`)
            //console.log(chalk.redBright(`${caminho}/${nomeDoArquivo}`));
            //console.log(lista);
            imprimeLista(valida, lista, nomeDoArquivo);
        });
    }

}

processaTexto(caminho);

