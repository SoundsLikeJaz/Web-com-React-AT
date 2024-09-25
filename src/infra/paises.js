export default async function obterPaises() {
    let retorno = [];
    const url = `https://restcountries.com/v3.1/all?fields=name`;
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((paises) => {
            retorno = paises.map((pais) => { return { nome: pais.name.common } });
        })
        .catch((erro) => retorno.erro = erro);
    return retorno;
}