function extraiLinks (arrLinks){
    return arrLinks.map((objetoLink)=>Object.values(objetoLink).join());
}



// Criar uma função listaValidada
export default function listaValidada(listaDeLinks){
    return extraiLinks(listaDeLinks);
}