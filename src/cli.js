//Command Line Interface (cli)
//Importando a função
import pegaConteudo from "./index.js";
import fs from "fs"
import chalk from 'chalk';

//1) criar uma variável para recepcionar o caminho via terminal
const caminho = process.argv;
//console.log(caminho);
//pegaConteudo(caminho[2]);

function imprimeLista(resultado, identificador = "") {
    console.log(chalk.blue('Lista de links:'),
        chalk.blackBright.bgGreen(identificador),
        resultado);
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
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
        imprimeLista(resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaConteudo(`${caminho}/${nomeDoArquivo}`)
            //console.log(chalk.redBright(`${caminho}/${nomeDoArquivo}`));
            //console.log(lista);
            imprimeLista(lista, nomeDoArquivo);
        });
    }

}

processaTexto(caminho);

