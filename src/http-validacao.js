import chalk from "chalk";

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url);
                return response.status;
            }
            catch (erro) {
                return manejaErros(erro);
            }

        })
    )
    return arrStatus;
}


function extraiLinks(arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

function manejaErros(erro) {
    //console.log(chalk.red("Algo deu errado..."));
    if(erro.cause.code === "ENOTFOUND"){
        return "Link não encontrado.";
    } else {
        return "Algo deu errado.";
    }
}



// Criar uma função listaValidada
export default async function listaValidada(listaDeLinks) {
    //return extraiLinks(listaDeLinks);
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }));
}




//[gatinho salsicha](http://gatinhosalsicha.com.br/)
