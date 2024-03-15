import fs from "fs"

import chalk from 'chalk';


const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'
function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.]*[^\s]*)\)/gm;
    //const capturas = texto.match(regex);
    //const capturas = regex.exec(texto);
    //const capturas = texto.matchAll(regex);

    //Operador de espalhamento
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura=>({
        [captura[1]]:captura[2]
    }))


    console.log(resultados);
}

extraiLinks(textoTeste);

/*
console.log(chalk.green('Hello world!'));

//desencadear métodos de texto, cor de fundo, negrito
console.log(chalk.yellow.bold("CAFÉ..."));

//receber múltiplos argumentos
console.log(chalk.yellow.bgBlue('É ', 'BOM ', 'DEMAIS!'));

//Métodos aninhados
console.log(chalk.underline.red("vermelho", chalk.underline.blue(' azul')));

//Uso de templates e strings
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);*/

//2) Função para tratar dos erros
function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red.underline(erro.code, 'Não há arquivo no diretório. Por favor, verifique o caminho e o diretório novamente.'));
}
/*
//1) Escrever uma function que traga o conteúdo de arquivos .md
function pegaConteudo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo,encoding,(erro,texto)=>{
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

pegaConteudo("./arquivos/texto.md");
// Callback (erro, texto)

//***************************************Aula sobrepromessas - inserir método assíncrono no código************************************************
//1) reescrevendo (refatorando)
function pegaConteudo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo,encoding).then((texto)=>
        console.log(chalk.yellow(texto))).catch((erro)=>trataErro(erro));
}

pegaConteudo('./arquivos/texto.md');

//Usando outra forma de solucionar as promessas (async/await)
async function pegaConteudo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.magenta(texto));

    } catch(erro){
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('Operação concluída'));
    }
}
pegaConteudo('./arquivos/texto.md');
pegaConteudo('./arquivos/teixto.md');*/